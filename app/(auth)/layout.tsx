import React from "react";
import MainAuthLayout from "../_components/layout/auth/mainAuthLayout";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return <MainAuthLayout>{children}</MainAuthLayout>;
};

export default AuthLayout;
