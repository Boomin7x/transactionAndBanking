import AuthSectionLayout from "@/app/_components/layout/auth/AuthSectionLayout";
import React from "react";
import MainForgotPassword from "./_component/MainForgotPassword";

const ForgotPasswordPage = () => {
    return (
        <AuthSectionLayout
            title="Forgot password?"
            description="Enter your email below, you will receive an email with instructions
on how to reset your password in a few minutes.  You can also
set a new password if you’ve never set one before."
        >
            <MainForgotPassword />
        </AuthSectionLayout>
    );
};

export default ForgotPasswordPage;
