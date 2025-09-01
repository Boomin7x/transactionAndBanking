import React, { FC, ReactNode } from "react";

interface IVerifyAndTelSection {
    title: string;
    description: string;
    children: ReactNode;
}
const VerifyAndTelSection: FC<IVerifyAndTelSection> = ({
    title,
    description,
    children,
}) => {
    return (
        <div className="w-[437px] mx-auto flex flex-col justify-center items-center gap-12  flex-1 relative">
            <div className="flex flex-col items-center gap-4 w-full ">
                <h3 className=" font-bold text-[24px] leading-[130%] tracking-[0px] text-center">
                    {title}
                </h3>
                <p className="font-urbanist font-medium text-[15px] leading-[150%] tracking-[0.2px] text-[#747681]">
                    {description}
                </p>
            </div>
            {children}
        </div>
    );
};

export default VerifyAndTelSection;
