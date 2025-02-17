import {
    HeaderWrapper,
    HeaderContent,
    LogoWrapper,
} from "@/common/components/header/style";
import Logo from "@/common/components/Logo";
import Notification from "@/common/components/notification/Notification";
import SiteSearch from "@/common/components/search/SiteSearch";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <SiteSearch />
                <Notification />
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default Header;

