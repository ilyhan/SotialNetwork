import {
    HeaderWrapper,
    HeaderContent
} from "@/common/components/header/style";
import Logo from "@/common/components/Logo";
import SearchInput from "@/common/ui/SearchInput";
import Notification from "@/common/components/notification/Notification";

const Header = () => {
    const handleSearch = async (val: string) => {
        const res = await fetch(`http://localhost:3001/api/search/${val}`, {
            credentials: 'include',
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <HeaderWrapper>
            <HeaderContent>
                <Logo />
                <SearchInput onSearch={handleSearch} />
                <Notification />
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default Header;

