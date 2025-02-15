import Modal from "@/common/ui/modal/Modal";
import { SubscribeInfoBtn, SubscribeWrapper } from "./style";
import FollowerModal from "../modal/FollowerModal";
import { useState } from "react";
import FollowingModal from "../modal/FollowingModal";

interface ISubscribeProps {
    id: number;
    follower?: number;
    following?: number;
    posts?: number;
}

const Subscribe = ({ id, following, follower, posts }: ISubscribeProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFollowingOpen, setIsFollowingOpen] = useState(false);

    const handleFollowingOpen = ()=> {
        setIsFollowingOpen(true);
    };

    const handleFollowingClose = ()=> {
        setIsFollowingOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <>
            <SubscribeWrapper>
                <SubscribeInfoBtn onClick={handleOpen}>
                    Подписчики <br />
                    {follower ?? 0}
                </SubscribeInfoBtn>

                <SubscribeInfoBtn onClick={handleFollowingOpen}>
                    Подписки <br />
                    {following ?? 0}
                </SubscribeInfoBtn>

                <SubscribeInfoBtn>
                    Публикации <br />
                    {posts ?? 0}
                </SubscribeInfoBtn>
            </SubscribeWrapper>

            <Modal isOpen={isOpen} onClose={handleClose}>
                <FollowerModal id={id} />
            </Modal>

            <Modal isOpen={isFollowingOpen} onClose={handleFollowingClose}>
                <FollowingModal id={id} />
            </Modal>
        </>
    )
};

export default Subscribe;