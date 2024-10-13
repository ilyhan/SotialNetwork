import Textarea from "@/common/ui/Textarea";
import { SentButton, SupportFormWrapper } from "@/modules/user/support/style";
import { useState } from "react";

const SupportForm = () => {
    const [problem, setProblem] = useState('');

    const handleSetProblem = (val: string) => {
        setProblem(val);
    };

    return (
        <SupportFormWrapper>
            <Textarea
                value={problem}
                onChange={handleSetProblem}
                placeholder="Подробно опишите свою проблему"
                rows={3}
                border={true}
            />

            <SentButton>Отправить</SentButton>
        </SupportFormWrapper>
    );
};

export default SupportForm;