import {
    AsideWpapper,
    SideNavWrapper,
    NavList,
} from "@/common/components/sideBar/style";
import NavItem from "@/common/components/sideBar/NavItem";

//TODO Брать id из кэш
const SideNav = () => {
    return (
        <AsideWpapper>
            <SideNavWrapper>
                <NavList>
                    <NavItem link={"`/profile/${48}`"} icon="profile" title="Моя страница" />
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