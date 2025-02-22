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
} from "@/modules/user/profile/style";
import mount from "/images/mountains.jpg"
import defaultImg from "/images/default.jpg"
import useGetProfile from "@/common/hooks/useGetProfile";
import { useParams } from "react-router-dom";
import Post from "@/common/components/post/Post";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import IconButton from "@/common/ui/IconButton";
import useFollow from "@/common/hooks/useFollow";
import useUpdateBackground from "@/common/hooks/useUpdateBackground";
import DragAndDropUpload from "@/common/helper/DragAndDropUpload";
import useUpdateAvatar from "@/common/hooks/useUpdateAvatar";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import Subscribe from "./components/subscribe/Subscribe";
import PostLoader from "@/common/ui/loaders/postLoader/PostLoader";
import UserLoader from "@/common/ui/loaders/userLoader/UserLoader";

interface AuthData {
    id: number;
    user: string;
};

const Profile = () => {
    const { data: authData, isLoading }: UseQueryResult<AuthData, Error> = useQuery({
        queryKey: ['auth'],
    });
    const [enter, setEnter] = useState(false);
    const { username } = useParams();
    const { data, refetch, isLoading: loading } = useGetProfile(`${username}`);
    const { mutate, isSuccess } = useFollow();
    const { mutate: update, isSuccess: issuccess } = useUpdateBackground();
    const { mutate: updateAva, isSuccess: is } = useUpdateAvatar();
    const refInt = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        })
    }, []);

    useEffect(() => {
        if (isSuccess || issuccess || is) {
            refetch();
        }
    }, [isSuccess, issuccess, is])

    const handleFollow = () => {
        mutate(data!.id);
    };

    const handleSetBackground = () => {
        if (refInt) {
            refInt.current?.click();
        }
    };

    const handleAddFile = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files![0] as File;
        const form = new FormData();
        form.append('images', newFile);
        update(form);
    };

    const handleSetAvater = (file: File) => {
        const form = new FormData();
        form.append('images', file);
        updateAva(form);
    };
    console.log(loading);
    return (
        isLoading || loading || data == undefined
            ? <ProfileWrapper>
                <UserLoader/>
                {Array(5).fill('').map(() => <PostLoader />)}
            </ProfileWrapper>
            : <ProfileWrapper>
                <input hidden type="file" ref={refInt} onChange={handleAddFile} accept=".jpg, .jpeg, .png" />
                <ProfileContentWrapper>
                    <BackgroungImgWrapper>
                        <BackgroungImg src={data?.background_image || mount} />
                        {authData?.user === username && <IconButton icon="edit" onClick={handleSetBackground} style={{ position: "absolute", zIndex: 5, top: '20px', right: '20px' }} />}
                    </BackgroungImgWrapper>

                    <MainInfoWrapper>
                        <ProfileMainInfo>
                            <ImageWrapper
                                onMouseEnter={() => setEnter(true)}
                                onMouseLeave={() => setEnter(false)}>
                                <ProfileImage src={data?.avatar || defaultImg} />

                                {authData?.user === username && enter && < DragAndDropUpload onFile={handleSetAvater} multiple={false} accept=".jpg, .jpeg, .png">
                                    <IconButton icon="edit" style={{ position: 'absolute', top: '35px', left: '35px', background: 'grey' }} onClick={() => console} />
                                </DragAndDropUpload>
                                }
                            </ImageWrapper>
                            <ProfileName>{data?.first_name + " " + data?.last_name}</ProfileName>
                            {authData?.user !== username && <IconButton icon={data?.is_following ? 'unsubscribe' : 'subscribe'} onClick={handleFollow} style={{ marginBottom: '9px' }} />}
                        </ProfileMainInfo>
                    </MainInfoWrapper>

                    <ProfileDescription>
                        <DescriptionText>
                            Описание — композиционная форма, которую используют в литературоведении и лингвистике для подробной характеристики предметов или явлений.
                        </DescriptionText>
                    </ProfileDescription>

                    <Subscribe
                        id={data.id}
                        follower={data.follower_count}
                        following={data.following_count}
                        posts={data?.posts?.length}
                    />
                </ProfileContentWrapper>

                {
                    data?.posts?.map((post) => (
                        <Post
                            key={post.id}
                            {...post}
                            first_name={data?.first_name}
                            last_name={data?.last_name}
                            avatar={data?.avatar}
                            username={data.username}
                            isMy={data.username === username}
                        />
                    ))
                }

            </ProfileWrapper >
    );
};

export default Profile;