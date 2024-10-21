import Textarea from "@/common/ui/Textarea";
import { SentButton, SupportFormWrapper } from "@/modules/user/support/style";
import { useState } from "react";

const SupportForm = () => {
    const [problem, setProblem] = useState('');

    const handleSetProblem = (val: string) => {
        setProblem(val);
    };

    const handleSupport = async () => {
        await fetch('http://localhost:3001/api/support', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                message: problem,
            })
        })
    }

    return (
        <SupportFormWrapper>
            <Textarea
                value={problem}
                onChange={handleSetProblem}
                placeholder="Подробно опишите свою проблему"
                rows={3}
                border={true}
            />

            <SentButton type="button" onClick={handleSupport}>Отправить</SentButton>
        </SupportFormWrapper>
    );
};

export default SupportForm;