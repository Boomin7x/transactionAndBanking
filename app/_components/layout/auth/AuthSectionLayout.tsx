import React, { FC } from "react";

interface IAuthSectionLayout {
    children: React.ReactNode;
    title: string;
    description?: string;
}
const AuthSectionLayout: FC<IAuthSectionLayout> = ({
    children,
    title,
    description,
}) => {
    return (
        <div className="w-[437px] mx-auto flex flex-col justify-center gap-12  flex-1 relative">
            <div className="flex flex-col gap-2">
                <h2 className=" font-semibold text-[42px] leading-[100%] tracking-[0px]">
                    {title}
                </h2>
                <p className=" font-normal not-italic text-[14px] leading-[21px] tracking-[0px] text-[#747A80]">
                    {description}
                </p>
            </div>
            {children}
        </div>
    );
};

export default AuthSectionLayout;
