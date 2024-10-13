import { 
    PrivacyPolicyContetnt, 
    PrivacyPolicyTitle, 
    PrivacyPolicyWrapper 
} from "@/modules/user/privacyPolicy/style";

const PrivacyPolicy = () => {
    return (
        <PrivacyPolicyWrapper>
            <PrivacyPolicyTitle>
                Политика конфиденциальности
            </PrivacyPolicyTitle>

            <PrivacyPolicyContetnt 
                src="/privacy/Privacy.pdf" 
                type="application/pdf" 
            />
        </PrivacyPolicyWrapper>
    );
};

export default PrivacyPolicy;
