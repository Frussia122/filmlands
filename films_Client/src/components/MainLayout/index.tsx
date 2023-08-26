import Footer from "components/Footer";
import Header from "components/Header";
import MovieFreedom from "components/Movie/MovieFreedom";
import { Outlet } from "react-router-dom";


const MainLayout: React.FC = () => {
    return (
        <>
        <Header />
        <Outlet />
        <MovieFreedom />
        <Footer />
        </>
    )
}

export default MainLayout;