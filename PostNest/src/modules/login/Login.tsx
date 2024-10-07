import InputField from "@/common/ui/InpitField"
import {
    LoginWrapper,
    LoginForm,
    LoginTitle,
    LoginButton,
    Registration,
    Line
} from "@/modules/login/style";
import { useState } from "react";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSetPassword = (val: string) => {
        setPassword(val);
    };

    const handleSetName = (val: string) => {
        setName(val);
    };

    return (
        <LoginWrapper>
            <LoginTitle>Войти в PostNest</LoginTitle>
            
            <LoginForm>
                <InputField label="Name" value={name} onChange={handleSetName} />
                <InputField label="Password" value={password} onChange={handleSetPassword} type="password" />

                <LoginButton>Далее</LoginButton>
            </LoginForm>

            <Line/>

            <Registration to="/registration">У вас нет аккаунта?</Registration>
        </LoginWrapper>
    )
}

export default Login