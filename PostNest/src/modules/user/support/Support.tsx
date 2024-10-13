import {
    SupportWrapper,
    HeaderSupport,
    SupportTitle,
} from "@/modules/user/support/style";
import SupportForm from "@/modules/user/support/components/SupportForm";

const Support = () => {
    return (
        <SupportWrapper>
            <HeaderSupport>
                <SupportTitle>Поддержка</SupportTitle>
            </HeaderSupport>

            <SupportForm />
        </SupportWrapper>
    );
};

export default Support;