import InputField from "@/common/ui/InpitField"
import { useAuth } from "@/context/AuthContext";
import {
    LoginWrapper,
    LoginForm,
    LoginTitle,
    LoginButton,
    Registration,
    Line
} from "@/modules/authorization/login/style";
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

    const { login } = useAuth();

    const handle = async () => {
        const res = await fetch('http://localhost:3001/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: name,
                password: password,
            })
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            const res = await fetch('http://localhost:3001/api/refresh',
                {
                    credentials: 'include',
                });
            const data = await res.json();
            console.log(data);
            login(data);
        }
    }

    return (
        <LoginWrapper>
            <LoginTitle>Войти в PostNest</LoginTitle>

            <LoginForm>
                <InputField label="Name" value={name} onChange={handleSetName} />
                <InputField label="Password" value={password} onChange={handleSetPassword} type="password" />

                <LoginButton onClick={handle} type="button">Далее</LoginButton>
            </LoginForm>

            <Line />

            <Registration to="/registration">У вас нет аккаунта?</Registration>
        </LoginWrapper>
    )
}

export default Login