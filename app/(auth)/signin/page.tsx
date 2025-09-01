import AuthSectionLayout from "@/app/_components/layout/auth/AuthSectionLayout";
import React from "react";
import SignInMain from "./_component/signInMain";

const SignInPage = () => {
    return (
        <AuthSectionLayout title={"Sign In"}>
            <SignInMain />
        </AuthSectionLayout>
    );
};

export default SignInPage;
