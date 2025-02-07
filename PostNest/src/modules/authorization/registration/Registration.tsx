import { useRegistration } from "@/common/hooks/useRegistration";
import { IUserRegistration } from "@/common/interfaces/user";
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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const { mutate, data} = useRegistration();
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IUserRegistration>();

    const submitForm = (data: IUserRegistration) => {
        mutate(data);
        console.log(data);
    };

    const handleSetChecked = () => {
        setChecked(prev => !prev);
    };

    useEffect(()=>{
        if(Array.isArray(data)){
            navigate('/login')
        }
    }, [data])

    return (
        <RegistrationWrapper>
            <RegistrationTitle>
                Регистрация
            </RegistrationTitle>

            <RegistrationForm onSubmit={handleSubmit(submitForm)}>
                <InputField
                    {...register('first_name', {
                        required: { value: true, message: "Введите ваше имя" },
                    })}
                    error={errors.first_name}
                    label="Имя"
                    name="first_name"
                />
                <InputField
                    {...register('last_name', {
                        required: { value: true, message: "Введите вашу фамилию" },
                    })}
                    error={errors.last_name}
                    label="Фамилия"
                    name="last_name"
                />
                <InputField
                    {...register('username', {
                        required: { value: true, message: "Введите ник" },
                    })}
                    error={errors.username}
                    label="Ник"
                    name="username"
                />
                <InputField
                    {...register('email', {
                        required: { value: true, message: "Введите вашу почту" },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Некорректная почта"
                        }
                    })}
                    error={errors.email}
                    label="Почта"
                    name="email"
                />
                <InputField
                    {...register('password', {
                        required: { value: true, message: "Придумайте пароль" },
                    })}
                    error={errors.password}
                    label="Пароль"
                    name="password"
                />

                <PrivacyAccept>
                    <CheckboxWrapper>
                        <InputCheckbox checked={checked} onChecked={handleSetChecked} required={true} />
                    </CheckboxWrapper>

                    <PrivacyLink to="/privacy_policy">
                        Вы соглашаетесь с Политикой Конфиденциальности
                    </PrivacyLink>
                </PrivacyAccept>

                <RegistrationBtn>
                    Зарегестрироваться
                </RegistrationBtn>
            </RegistrationForm>
            
            {data && data.message && <p>{data.message}</p>}
        </RegistrationWrapper>
    );
};

export default Registration;