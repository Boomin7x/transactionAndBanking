"use client";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOff } from "lucide-react";
import React, { FC, useState } from "react";

interface ICustomPassword extends React.ComponentProps<"input"> {
    label?: string;
}

const CustomPassword: FC<ICustomPassword> = ({ label, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            {label && (
                <p className="font-sans font-bold text-[12px] leading-[18px] mb-2">
                    {label}
                </p>
            )}
            <div className="relative h-fit">
                <Input
                    type={showPassword ? "text" : "password"}
                    className="h-[64px] bg-[#F5F5F5] rounded-[8px] border border-[#E5E7EB] opacity-100 pr-10"
                    {...props}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-4 flex items-center  focus:outline-none cursor-pointer hover:cursor-pointer"
                >
                    {showPassword ? (
                        <EyeOff className="size-[18px] text-gray-400" />
                    ) : (
                        <EyeIcon className="size-[18px] text-gray-400" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default CustomPassword;
