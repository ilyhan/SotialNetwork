import { 
    NavItemLink, 
    NavItemPath, 
    NavListItem 
} from "@/common/components/sideBar/style";
import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";

interface NavItemProps {
    link: string;
    icon: ImageComponentsTypes;
    title: string;
}

const NavItem = ({ link, icon, title }: NavItemProps) => {
    return (
        <NavListItem>
            <NavItemLink to={link}>
                <SvgHelper iconName={icon} />
                <NavItemPath>{title}</NavItemPath>
            </NavItemLink>
        </NavListItem>
    );
};

export default NavItem;