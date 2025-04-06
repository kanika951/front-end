import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function Layout()
{
    return (
        <>
        <Header />
        <Outlet /> {/* Will keep the header and footer same and will only change the outlet this is what outlet is used for*/}
        <Footer />
        </>
    )
}

export default Layout