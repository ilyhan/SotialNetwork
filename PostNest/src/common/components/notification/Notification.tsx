import useLogout from "@/common/hooks/useLogout";
import IconButton from "@/common/ui/IconButton";
import ModalConfirm from "@/common/ui/modalConfirm/ModalConfirm";
import { useEffect, useState } from "react";

const Notification = () => {
    const { mutate, isSuccess } = useLogout();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleExit = () => {
        setOpen(false);
        mutate();
    };

    useEffect(() => {
        if (isSuccess) {
            location.reload();
        }
    }, [isSuccess]);

    return (
        <>
            <ModalConfirm
                isOpen={open}
                onSuccess={handleCancel}
                onError={handleExit}
                successText="Остаться"
                errorText="Выйти"
            >
                Вы действительно хотите выйти?
            </ModalConfirm>

            <IconButton icon='quit' onClick={handleOpen} iconStyle={{ color: 'red' }} />
        </>
    );
};

export default Notification;