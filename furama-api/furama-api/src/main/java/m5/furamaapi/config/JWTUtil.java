package m5.furamaapi.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import m5.furamaapi.util.AppConstant;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.util.StringUtils;
import org.springframework.web.util.WebUtils;

import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import static java.util.Collections.unmodifiableSet;

public class JWTUtil {
    public static String generateToken(int userId, Collection<String> authorizations) {
        return Jwts.builder()
                .setSubject(String.valueOf(userId))
                .claim(AppConstant.JWT.AUTHOR, authorizations)
                .setExpiration(new Date(System.currentTimeMillis() + AppConstant.JWT.EXPIREINMS))
                .signWith(new SecretKeySpec(Base64.getDecoder().decode(AppConstant.JWT.SECRET),
                        SignatureAlgorithm.HS256.getJcaName()))
                .compact();
    }

    public static Authentication getToken(HttpServletRequest request) {
        String token = extractJwtFromRequest(request);
        String coquanId;

        if(token.isEmpty()){
            throw new BadCredentialsException(AppConstant.Error.TOKEN_NOT_FOUND);
        }

        try {
            Jws<Claims> jwt = Jwts.parserBuilder()
                    .setSigningKey(new SecretKeySpec(Base64.getDecoder().decode(AppConstant.JWT.SECRET),
                            SignatureAlgorithm.HS256.getJcaName()))
                    .build()
                    .parseClaimsJws(token);

            Claims body = jwt.getBody();
            coquanId = body.getSubject();
        }
        catch (MalformedJwtException ex){
            throw new SignatureException(ex.getMessage());
        }

        return coquanId != null ? new UsernamePasswordAuthenticationToken(coquanId, null, null) : null;
    }

    private static String extractJwtFromRequest(HttpServletRequest request) {
        String tokenWithBearer = request.getHeader(AppConstant.JWT.HEADER);

        return tokenWithBearer.startsWith(AppConstant.JWT.PREFIX) ? tokenWithBearer.substring(AppConstant.JWT.PREFIX.length()): "";
    }
}
