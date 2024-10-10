import home from '@/common/svg-helper/icons/home.svg?react';
import profile from '@/common/svg-helper/icons/profile.svg?react';
import saved from '@/common/svg-helper/icons/saved.svg?react';
import help from '@/common/svg-helper/icons/help.svg?react';
import settings from '@/common/svg-helper/icons/settings.svg?react';
import notification from '@/common/svg-helper/icons/notification.svg?react';
import favorite from '@/common/svg-helper/icons/favorite.svg?react';
import savedpost from '@/common/svg-helper/icons/savedpost.svg?react';
import pin from '@/common/svg-helper/icons/pin.svg?react';

export type IconType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }
>;

// type here name of icon.
// in SvgHelper iconType prop you can see ts help with names from this union type
export type ImageComponentsTypes =
    | 'profile'
    | 'home'
    | 'notification'
    | 'settings'
    | 'help'
    | 'saved'
    | 'favorite'
    | 'savedpost'
    | 'pin';

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
    profile,
    home,
    notification,
    settings,
    help,
    saved,
    favorite,
    savedpost,
    pin,
};
