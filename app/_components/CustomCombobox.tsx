"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface ICustomCombobox extends React.ComponentProps<"button"> {
    options: {
        value: string;
        label: string;
    }[];
    emptyLabel?: React.ReactNode;
    placeholder?: string;
    label?: string;
    value?: string;
    optionFullWidth?: boolean;
    onSelectChange?: (value: string) => void;
}

export function CustomCombobox({
    options = [],
    emptyLabel = "No item found",
    placeholder = "Select option...",
    label,
    value: newVal,
    className,
    optionFullWidth,
    onSelectChange: onChange,
}: ICustomCombobox) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(newVal);

    return (
        <div className="relative ">
            {label && (
                <p className="font-sans  text-sm  font-semibold leading-[18px] mb-2">
                    {label}
                </p>
            )}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-full p-6 bg-[#F5F5F5] rounded-sm shadow-none border border-[#E5E7EB] opacity-100 justify-between pr-4 pl-4 text-left font-normal hover:bg-[#F5F5F5]",
                            className,
                        )}
                    >
                        {value ? (
                            options.find((item) => item.value === value)?.label
                        ) : (
                            <p className="text-muted-foreground">
                                {placeholder}
                            </p>
                        )}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className={cn(
                        "p-0",
                        optionFullWidth && "w-full min-w-[30rem]",
                    )}
                >
                    <Command className="!w-full">
                        <CommandInput placeholder="Search options..." />
                        <CommandList>
                            <CommandEmpty>{emptyLabel}</CommandEmpty>
                            <CommandGroup>
                                {options.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            onChange?.(currentValue);
                                            setValue(
                                                currentValue === value
                                                    ? ""
                                                    : currentValue,
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === item.value
                                                    ? "opacity-100"
                                                    : "opacity-0",
                                            )}
                                        />
                                        {item.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
