import "@/common/ui/modalConfirm/style.css";
import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";

interface IModalProps {
    isOpen: boolean;
    children: ReactNode;
    onSuccess?: () => void;
    onError?: () => void;
    successText?: string;
    errorText?: string;
};

const ModalConfirm = ({ isOpen, children, onSuccess, onError, successText, errorText }: IModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const closeModal = (func: () => void) => {
        setIsVisible(false);

        setTimeout(() => {
            func();
        }, 300);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true);
        } else {
            document.body.style.overflow = 'auto';
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className={`modal-confirm__overlay ${isVisible ? "modal-confirm__overlay_open" : ""}`}
            data-testid='overlay'
        >
            <div
                className={`modal-confirm__content ${isVisible ? "modal-confirm__content_open" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-confirm__content-text">
                    {children}
                </div>

                {!!onSuccess && !!onError &&
                    <div className="modal-confirm__buttons-all">
                        <button className="modal-confirm__button" onClick={() => closeModal(onSuccess)}>
                            {successText}
                        </button>
                        <button className="modal-confirm__button modal-confirm__button_error" onClick={() => closeModal(onError)}>
                            {errorText}
                        </button>
                    </div>
                }

                {!!onSuccess && !onError &&
                    <div className="modal-confirm__buttons-one">
                        <button className="modal-confirm__button modal-confirm__button_full" onClick={() => closeModal(onSuccess)}>
                            {successText}
                        </button>
                    </div>
                }

                {!onSuccess && !!onError &&
                    <div className="modal-confirm__buttons-one">
                        <button className="modal-confirm__button modal-confirm__button_error modal-confirm__button_full" onClick={() => closeModal(onError)}>
                            {errorText}
                        </button>
                    </div>
                }
            </div>
        </div>,
        document.getElementById('root')!
    )
};

export default ModalConfirm;