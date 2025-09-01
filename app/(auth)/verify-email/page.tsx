import VerifyAndTelSection from "@/app/_components/layout/auth/VerifyAndTelSection";
import React from "react";
import VerifyEmailMain from "./_component/VerifyEmailMain";

const VerifyEmailPage = () => {
    return (
        <VerifyAndTelSection
            title="Enter verification code"
            description="We have just sent a verification code to tynisha*****@mail.com"
        >
            <VerifyEmailMain />
        </VerifyAndTelSection>
    );
};

export default VerifyEmailPage;
