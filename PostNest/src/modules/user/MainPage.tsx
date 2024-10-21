import Header from "@/common/components/header/Header";
import SideNav from "@/common/components/sideBar/SideNav";
import { Container } from "@/common/styles/GlobalStyle";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('home');
    }, []);

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