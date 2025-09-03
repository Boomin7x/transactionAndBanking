import { Textarea } from "@/components/ui/textarea";
import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface ICustomTextarea extends React.ComponentProps<"textarea"> {
    label?: string;
}

const CustomTextarea: FC<ICustomTextarea> = ({
    label,
    className,
    ...props
}) => {
    return (
        <div className="relative ">
            {label && (
                <p className="font-sans font-semibold capitalize text-sm leading-[18px] mb-2">
                    {label}
                </p>
            )}
            <div className="relative h-fit">
                <Textarea
                    className={cn(
                        "p-6 bg-[#F5F5F5] rounded-sm border shadow-none border-[#E5E7EB] opacity-100 min-h-[120px]",
                        className,
                    )}
                    {...props}
                />
            </div>
        </div>
    );
};

export default CustomTextarea;
