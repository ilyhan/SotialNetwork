import useLogout from "@/common/hooks/useLogout";
import IconButton from "@/common/ui/IconButton";
import { useEffect } from "react";

const Notification = () => {
    const { mutate, isSuccess } = useLogout();

    useEffect(()=>{
        if(isSuccess){
            location.reload();
        }
    }, [isSuccess]);

    return (
        <>
            <IconButton icon='quit' onClick={mutate} iconStyle={{ color: 'red' }} />
        </>
    );
};

export default Notification;