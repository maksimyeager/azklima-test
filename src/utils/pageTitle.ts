import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                document.title = "Azklima";
                break;
            case "/about-us":
                document.title = "HAQQIMIZDA - Azklima";
                break;
            case "/projects":
                document.title = "GÖRÜLƏN İŞLƏR - Azklima";
                break;
            case "/career":
                document.title = "KARYERA - Azklima";
                break;
            case "/contact-us":
                document.title = "ƏLAQƏ - Azklima";
                break;
            case "/collaboration-form-for-masters":
                document.title = "ƏMƏKDAŞLIQ ANKETI - Azklima";
                break;
            case "/credit-payment-form":
                document.title = "KREDIT ANKETI - Azklima";
                break;
            case "/corporate-cooperation-form":
                document.title = "KORPORATIV ƏMƏKDAŞLIQ ANKETI - Azklima";
                break;
            default:
                document.title = "Azklima";
        }
    }, [location]);

    return null;
};

export default PageTitle;
