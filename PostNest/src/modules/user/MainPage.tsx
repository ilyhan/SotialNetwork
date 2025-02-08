import Header from "@/common/components/header/Header";
import SideNav from "@/common/components/sideBar/SideNav";
import { Container } from "@/common/styles/GlobalStyle";
import { Outlet } from "react-router-dom";

const MainPage = () => {

    return (
        <>
            <Header />
            <Container>
                <SideNav />
                <Outlet />
            </Container>
        </>

    )
}

export default MainPage;