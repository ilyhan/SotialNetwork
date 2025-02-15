import useLogin from "@/common/hooks/useLogin";
import { ILogin } from "@/common/interfaces/user";
import InputField from "@/common/ui/InpitField"
import Loader from "@/common/ui/loaders/defaultLoader/DefaultLoader";
import {
    LoginWrapper,
    LoginForm,
    LoginTitle,
    LoginButton,
    Registration,
    Line
} from "@/modules/authorization/login/style";
import { useForm } from "react-hook-form";

const Login = () => {
    const submitForm = (data: ILogin) => {
        mutate(data);
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<ILogin>();

    const { mutate, isPending } = useLogin();

    return (
        <LoginWrapper>
            <LoginTitle>Войти в PostNest</LoginTitle>

            <LoginForm onSubmit={handleSubmit(submitForm)}>
                <InputField
                    {...register('name', {
                        required: { value: true, message: "Введите ваш ник" },
                    })}
                    error={errors.name}
                    label="Ник"
                    name="name"
                />
                <InputField
                    {...register('password', {
                        required: { value: true, message: "Введите ваш пароль" },
                    })}
                    error={errors.password}
                    label="Пароль"
                    name="password"
                    type="password"
                />

                <LoginButton>
                    Далеe
                </LoginButton>

                {isPending && <Loader style={{margin: '0px 50%', translate: '-50%'}}/>}
            </LoginForm>

            <Line />

            <Registration to="/registration">У вас нет аккаунта?</Registration>
        </LoginWrapper>
    )
}

export default Login