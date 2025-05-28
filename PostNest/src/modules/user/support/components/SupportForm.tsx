import useCreateSupportMes from "@/common/hooks/useCreateSupportMes";
import Textarea from "@/common/ui/Textarea";
import { SentButton, SupportFormWrapper } from "@/modules/user/support/style";
import { FormEvent, useEffect, useState } from "react";

const SupportForm = () => {
    const [problem, setProblem] = useState('');
    const { mutate, isPending } = useCreateSupportMes();

    const handleSetProblem = (val: string) => {
        setProblem(val);
    };

    const handleMessage = (e: FormEvent) => {
        e.preventDefault();

        if (problem.trim()) {
            mutate(problem);
        }
    };

    useEffect(() => {
        if (!isPending) {
            setProblem('');
        }
    }, [isPending]);

    return (
        <SupportFormWrapper onClick={handleMessage}>
            <Textarea
                value={problem}
                onChange={handleSetProblem}
                placeholder="Подробно опишите свою проблему"
                rows={3}
                border={true}
                style={{height: "100px"}}
            />

            <SentButton $isLoading={isPending} disabled={isPending}>Отправить</SentButton>
        </SupportFormWrapper>
    );
};

export default SupportForm;