import InputField from "@/common/ui/InpitField";
import InputCheckbox from "@/common/ui/InputCheckbox";
import {
    RegistrationWrapper,
    RegistrationForm,
    RegistrationBtn,
    RegistrationTitle,
    PrivacyAccept,
    PrivacyLink,
    CheckboxWrapper
} from "@/modules/authorization/registration/style";
import { useState } from "react";

const Registration = () => {
    const [checked, setChecked] = useState(false);

    const handleSetChecked = () => {
        setChecked(prev => !prev);
    }

    return (
        <RegistrationWrapper>
            <RegistrationTitle>
                Регистрация
            </RegistrationTitle>

            <RegistrationForm>
                <InputField label="Имя" value={''} onChange={() => console} />
                <InputField label="Фамилия" value={''} onChange={() => console} />
                <InputField label="Ник" value={''} onChange={() => console} />
                <InputField label="Почта" value={''} onChange={() => console} />
                <InputField label="Пароль" value={''} onChange={() => console} />

                <PrivacyAccept>
                    <CheckboxWrapper>
                        <InputCheckbox checked={checked} onChecked={handleSetChecked} />
                    </CheckboxWrapper>

                    <PrivacyLink to="/privacy_policy">
                        Вы соглашаетесь с Политикой Конфиденциальности
                    </PrivacyLink>
                </PrivacyAccept>

                <RegistrationBtn>
                    Зарегестрироваться
                </RegistrationBtn>
            </RegistrationForm>
        </RegistrationWrapper>
    );
};

export default Registration;