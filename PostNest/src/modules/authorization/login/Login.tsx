import useLogin from "@/common/hooks/useLogin";
import InputField from "@/common/ui/InpitField"
import {
    LoginWrapper,
    LoginForm,
    LoginTitle,
    LoginButton,
    Registration,
    Line
} from "@/modules/authorization/login/style";
import { ChangeEvent, useState } from "react";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate({ name, password });
    }

    const { mutate } = useLogin();

    return (
        <LoginWrapper>
            <LoginTitle>Войти в PostNest</LoginTitle>

            <LoginForm onSubmit={handleSubmit}>
                <InputField label="Name" value={name} onChange={handleSetName} />
                <InputField label="Password" value={password} onChange={handleSetPassword} type="password" />

                <LoginButton>
                    Далеe
                </LoginButton>
            </LoginForm>

            <Line />

            <Registration to="/registration">У вас нет аккаунта?</Registration>
        </LoginWrapper>
    )
}

export default Login