import {
    ProfileWrapper,
    ProfileContentWrapper,
    BackgroungImg,
    BackgroungImgWrapper,
    ProfileMainInfo,
    ImageWrapper,
    ProfileImage,
    ProfileName,
    MainInfoWrapper,
    ProfileDescription,
    DescriptionText,
    SubscribeWrapper,
    SubscribeInfoBtn
} from "@/modules/user/profile/style";
import mount from "/images/mountains.jpg"
import defaultImg from "/images/default.jpg"
import Post from "@/common/components/post/Post";
import NewPost from "@/common/components/newpost/NewPost";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    avatar?: string;
}

const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState<IUser>();
    const { userId } = useAuth();

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`http://localhost:3001/api/users/${username}`, {
                credentials: 'include',
            });
            const data = await res.json();
            setUser(data);
        }
        getUser();
    }, []);

    const handleFollow = async () => {
        const res = await fetch('http://localhost:3001/api/follow', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                followedId: user?.id,
            })
        });
        const data = await res.json();
        console.log(data);
    }

    return !!user && (
        <ProfileWrapper>
            <ProfileContentWrapper>
                <BackgroungImgWrapper>
                    <BackgroungImg src={mount} />
                </BackgroungImgWrapper>

                <MainInfoWrapper>
                    <ProfileMainInfo>
                        <ImageWrapper>
                            <ProfileImage src={defaultImg} />
                        </ImageWrapper>
                        <ProfileName>{user.first_name + " " + user.last_name}</ProfileName>
                    </ProfileMainInfo>
                </MainInfoWrapper>

                <ProfileDescription>
                    <DescriptionText>
                        Описание — композиционная форма, которую используют в литературоведении и лингвистике для подробной характеристики предметов или явлений.
                    </DescriptionText>
                </ProfileDescription>

                <SubscribeWrapper>
                    <SubscribeInfoBtn>
                        Подписчики <br />
                        17
                    </SubscribeInfoBtn>

                    <SubscribeInfoBtn>
                        Подписки <br />
                        17
                    </SubscribeInfoBtn>

                    <SubscribeInfoBtn>
                        Публикации <br />
                        17
                    </SubscribeInfoBtn>
                </SubscribeWrapper>
                {userId !== user.id &&
                    <button onClick={handleFollow}>
                        Подписаться
                    </button>
                }
            </ProfileContentWrapper>

            <NewPost />

            <Post
                avatar={defaultImg}
                name="Ilia"
                content="Content"
            />

            <Post
                avatar={defaultImg}
                name="Ilia"
                content="Content"
            />
        </ProfileWrapper>
    );
};

export default Profile;