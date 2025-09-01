"use client";
import CustomInput from "@/app/_components/CustomInput";
import { Mail } from "lucide-react";
import SignUpForm from "../_forms/SignUpForm";
import { div } from "framer-motion/client";
import Link from "next/link";

const MainSignUp = () => {
    return (
        <div>
            <SignUpForm />
            <p className="text-[14px] absolute bottom-12">
                Already registered?{" "}
                <Link
                    href={{
                        pathname: "/signin",
                    }}
                    className="text-[#0052FF]"
                >
                    {" "}
                    sign in
                </Link>
            </p>
        </div>
    );
};

export default MainSignUp;
