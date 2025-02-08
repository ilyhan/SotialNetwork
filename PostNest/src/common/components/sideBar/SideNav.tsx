import {
    AsideWpapper,
    SideNavWrapper,
    NavList,
} from "@/common/components/sideBar/style";
import NavItem from "@/common/components/sideBar/NavItem";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

//TODO Брать id из кэш

interface AuthData {
    id: number;
    user: string;
}

const SideNav = () => {
    const { data }: UseQueryResult<AuthData, Error> = useQuery({
        queryKey: ['auth'],
    });

    return (
        <AsideWpapper>
            <SideNavWrapper>
                <NavList>
                    <NavItem link={`/profile/${data?.user}`} icon="profile" title="Моя страница" />
                    <NavItem link="/home" icon="home" title="Главная" />
                    <NavItem link="/saved" icon="saved" title="Сохраненное" />
                    <NavItem link="/settings" icon="settings" title="Настройки" />
                    <NavItem link="/support" icon="help" title="Поддержка" />
                </NavList>
            </SideNavWrapper>
        </AsideWpapper>
    );
};

export default SideNav;