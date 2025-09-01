import { Input } from "@/components/ui/input";
import { AlignEndVertical } from "lucide-react";
import React, { FC } from "react";
import { IconType } from "../_interface";

interface ICustomInput extends React.ComponentProps<"input"> {
    label?: string;
    icon?: IconType;
}
const CustomInput: FC<ICustomInput> = ({ label, icon, ...props }) => {
    const Icon = icon;
    return (
        <div className="relative ">
            <p className="font-sans font-bold text-[12px] leading-[18px] mb-2">
                {label}
            </p>
            <div className="relative h-fit">
                <Input
                    className=" h-[64px] bg-[#F5F5F5] rounded-[8px] border  border-[#E5E7EB] opacity-100"
                    {...props}
                />
                {icon
                    ? (() => {
                          const Icon = icon;
                          return (
                              <Icon className="size-[18px] absolute top-1/2 right-4 -translate-y-1/2" />
                          );
                      })()
                    : null}
            </div>
        </div>
    );
};

export default CustomInput;
