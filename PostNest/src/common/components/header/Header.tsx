import {
    HeaderWrapper,
    HeaderContent
} from "@/common/components/header/style";
import Logo from "@/common/components/Logo";
import SearchInput from "@/common/ui/SearchInput";
import Notification from "@/common/components/notification/Notification";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <Logo />
                <SearchInput onSearch={(val)=>console.log(val)}/>
                <Notification />
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default Header;

