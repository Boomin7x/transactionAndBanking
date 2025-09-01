import React from "react";
import ForgotPasswordForm from "../_forms/ForgotPasswordForm";
import Link from "next/link";

const MainForgotPassword = () => {
    return (
        <div>
            <ForgotPasswordForm />
            <p className="text-[14px] absolute bottom-12">
                You don’t have an account?{" "}
                <Link
                    href={{
                        pathname: "/sign-up",
                    }}
                    className="text-[#0052FF]"
                >
                    Create an account
                </Link>
            </p>
        </div>
    );
};

export default MainForgotPassword;
