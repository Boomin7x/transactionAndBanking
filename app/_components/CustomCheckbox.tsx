"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface ICheckBoxField {
    id: string;
    isChecked?: boolean;
    label: string;
}
export const CheckBoxField: FC<ICheckBoxField> = ({ id, label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="flex items-center gap-3">
            <Checkbox
                id={id}
                onCheckedChange={(value) => {
                    setIsChecked(value as boolean);
                }}
            />
            <Label
                htmlFor={id}
                className={cn("text-[#747A80]", isChecked && "text-black")}
            >
                {label}
            </Label>
        </div>
    );
};
