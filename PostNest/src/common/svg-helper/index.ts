import home from '@/common/svg-helper/icons/home.svg?react';
import profile from '@/common/svg-helper/icons/profile.svg?react';
import saved from '@/common/svg-helper/icons/saved.svg?react';
import help from '@/common/svg-helper/icons/help.svg?react';
import settings from '@/common/svg-helper/icons/settings.svg?react';
import notification from '@/common/svg-helper/icons/notification.svg?react';
import favorite from '@/common/svg-helper/icons/favorite.svg?react';
import savedpost from '@/common/svg-helper/icons/savedpost.svg?react';
import pin from '@/common/svg-helper/icons/pin.svg?react';
import search from '@/common/svg-helper/icons/search.svg?react';
import arrow from '@/common/svg-helper/icons/arrow.svg?react';
import camera from '@/common/svg-helper/icons/camera.svg?react';
import video from '@/common/svg-helper/icons/video.svg?react';
import emoji from '@/common/svg-helper/icons/emoji.svg?react';
import subscribe from '@/common/svg-helper/icons/subscribe.svg?react';
import unsubscribe from '@/common/svg-helper/icons/unsubscribe.svg?react';
import quit from '@/common/svg-helper/icons/quit.svg?react';
import edit from '@/common/svg-helper/icons/edit.svg?react';
import close from '@/common/svg-helper/icons/close.svg?react';
import trash from '@/common/svg-helper/icons/trash.svg?react';

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
    | 'pin'
    | 'search'
    | 'arrow'
    | 'camera'
    | 'video'
    | 'emoji'
    | 'subscribe'
    | 'unsubscribe'
    | 'quit'
    | 'edit'
    | 'close'
    | 'trash';

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
    search,
    arrow,
    camera,
    video,
    emoji,
    subscribe,
    unsubscribe,
    quit,
    edit,
    close,
    trash,
};
