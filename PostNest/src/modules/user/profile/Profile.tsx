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
import NewPost from "@/common/components/newpost/NewPost";
import useGetProfile from "@/common/hooks/useGetProfile";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { username } = useParams();
    console.log(username);
    const {data} = useGetProfile(`${username}`);
    console.log(data)
    return (
        <ProfileWrapper>
            <ProfileContentWrapper>
                <BackgroungImgWrapper>
                    <BackgroungImg src={mount} />
                </BackgroungImgWrapper>

                <MainInfoWrapper>
                    <ProfileMainInfo>
                        <ImageWrapper>
                            <ProfileImage src={data?.avatar ?? defaultImg} />
                        </ImageWrapper>
                        <ProfileName>{data?.first_name + " " + data?.last_name}</ProfileName>
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
                        {data?.follower_count ?? 0}
                    </SubscribeInfoBtn>

                    <SubscribeInfoBtn>
                        Подписки <br />
                        {data?.following_count ?? 0}
                    </SubscribeInfoBtn>

                    <SubscribeInfoBtn>
                        Публикации <br />
                        {data?.posts?.length ?? 0}
                    </SubscribeInfoBtn>
                </SubscribeWrapper>
            </ProfileContentWrapper>

            <NewPost />

            {
                //TODO добавить посты
            }
        </ProfileWrapper>
    );
};

export default Profile;