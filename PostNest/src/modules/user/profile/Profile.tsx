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

const Profile = () => {
    return (
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
                        <ProfileName>User Name</ProfileName>
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
            </ProfileContentWrapper>

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