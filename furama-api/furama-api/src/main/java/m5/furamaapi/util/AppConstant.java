package m5.furamaapi.util;

public interface AppConstant {

    interface JWT{
        String HEADER = "Authorization";;
        String PREFIX = "Bearer";
        String AUTHOR= "roles";
        String SECRET = "VNUnitechFileServerYear2021Month06Day22DevelopOnUniviOffice";
        int EXPIREINMS = 3600*1000;
    }
    interface Error{
        String TOKEN_NOT_FOUND= "Token not found";
        String TOKEN_EXPRIRED= "Token expired";
        String TOKEN_INVAILD_FORMAT= "Token invalid";
    }

    interface Key{
        String EXCEPTION= "exception";
        String UTF8= "UTF-8";
        String BASE64= "base64";
    }

    String[] excludedUrls = {
            "/register",
            "test/**/doc.html"
    };
}
