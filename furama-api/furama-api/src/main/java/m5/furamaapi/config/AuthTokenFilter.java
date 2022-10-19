package m5.furamaapi.config;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import m5.furamaapi.util.AppConstant;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Stream;

public class AuthTokenFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            Authentication authentication = JWTUtil.getToken(request);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch (SignatureException ex) {
            request.setAttribute(AppConstant.Key.EXCEPTION, ex);
        } catch (ExpiredJwtException ex) {
            request.setAttribute(AppConstant.Key.EXCEPTION, ex);
        } catch (BadCredentialsException ex) {
            request.setAttribute(AppConstant.Key.EXCEPTION, ex);
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        AntPathMatcher antPathMatcher = new AntPathMatcher();
        String url = request.getRequestURI();
        return Stream.of(AppConstant.excludedUrls).anyMatch(e -> antPathMatcher.match(e, url));
    }


}
