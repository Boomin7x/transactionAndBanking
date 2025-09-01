import AuthSectionLayout from "@/app/_components/layout/auth/AuthSectionLayout";
import React from "react";
import MainSignUp from "./_component/MainSignUp";

const SignUpPage = () => {
    return (
        <AuthSectionLayout
            title={"Sign Up"}
            description="Before we start, please enter your current location"
        >
            <MainSignUp />
        </AuthSectionLayout>
    );
};

export default SignUpPage;
