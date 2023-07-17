import Header from "components/Header";
import Footer from "components/Footer";
import MovieFreedom from "components/MovieFreedom";
import { ReactNode } from "react";


const PageLayout: React.FC<{children: ReactNode}> = ({ children }) => {
    return (
      <>
        <Header />
        {children}
        <MovieFreedom />
        <Footer />
      </>
    );
}
export default PageLayout;