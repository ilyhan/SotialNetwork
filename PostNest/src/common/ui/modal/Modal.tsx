import "@/common/ui/modal/style.css";
import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";
import SvgHelper from "@/common/svg-helper/SvgHelper";

interface IModalProps {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
    withCloseIcon?: boolean;
};

const Modal = ({ isOpen, children, onClose, withCloseIcon = true }: IModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const closeModal = () => {
        setIsVisible(false);

        setTimeout(() => {
            onClose();
        }, 300);
    };

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className={`modal__overlay ${isVisible ? "modal__overlay_open" : ""}`}
            onClick={closeModal}
            data-testid='overlay'
        >
            <div
                className={`modal__content ${isVisible ? "modal__content_open" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                {withCloseIcon && (
                    <button
                        className="modal__close-btn"
                        onClick={closeModal}
                    >
                        <SvgHelper iconName="pin" width={18} height={18}/>
                    </button>
                )}
                {children}
            </div>
        </div>,
        document.getElementById('root')!
    )
};

export default Modal;