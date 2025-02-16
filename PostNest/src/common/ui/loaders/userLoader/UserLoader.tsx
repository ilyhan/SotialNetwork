import { UserLoaderBackgroungImg, UserLoaderContentWrapper, UserLoaderDescription, UserLoaderDescriptionText, UserLoaderImage, UserLoaderImageWrapper, UserLoaderImgWrapper, UserLoaderMainInfo, UserLoaderMainInfoWrapper, UserLoaderName, UserLoaderSubscribeInfoBtn, UserLoaderSubscribeWrapper, UserLoaderWrapper } from "./style";

const UserLoader = () => {
    return (
        <UserLoaderWrapper>
            <UserLoaderContentWrapper>
                <UserLoaderImgWrapper>
                    <UserLoaderBackgroungImg />
                </UserLoaderImgWrapper>

                <UserLoaderMainInfoWrapper>
                    <UserLoaderMainInfo>
                        <UserLoaderImageWrapper>
                            <UserLoaderImage />
                        </UserLoaderImageWrapper>

                        <UserLoaderName />
                    </UserLoaderMainInfo>
                </UserLoaderMainInfoWrapper>

                <UserLoaderDescription>
                    <UserLoaderDescriptionText />
                </UserLoaderDescription>

                <UserLoaderSubscribeWrapper>
                    <UserLoaderSubscribeInfoBtn />
                    <UserLoaderSubscribeInfoBtn />
                    <UserLoaderSubscribeInfoBtn />
                </UserLoaderSubscribeWrapper>
            </UserLoaderContentWrapper>
        </UserLoaderWrapper>
    )
};

export default UserLoader;