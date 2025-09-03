"use client";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import CountryList from "country-list-with-dial-code-and-flag";
import { useRouter } from "next/navigation";
import React from "react";

export enum transferTypeEnum {
    ACCOUNT = "account",
    CASH_COLLECTION = "cash-collection",
    MOBILE_TRANSFER = "mobile-transfer",
}
const SendMoneyDetailsForm = () => {
    const allCountries = CountryList.getAll();
    const router = useRouter();

    const CountryOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.name}`,
        value: items?.name,
    }));

    const currencyOptions = allCountries
        .filter((items) => Boolean(items.currencyCode))
        .map((items) => ({
            label: `${items?.flag} ${items?.currencyCode}`,
            value: items?.currencyCode,
        }));
    return (
        <div className="flex-1 flex flex-col w-full  gap-6">
            <CustomCombobox
                options={CountryOptions}
                emptyLabel="No Country found"
                label="Sender Country"
                placeholder="Select Country"
                optionFullWidth
            />
            <CustomCombobox
                options={CountryOptions}
                emptyLabel="No Country found"
                label="Receiver Country"
                placeholder="Select Country"
                optionFullWidth
            />
            <div>
                <p className="font-sans  text-sm text-muted-foreground font-semibold leading-[18px] ">
                    Amount You send
                </p>
                <div className="flex items-end w-full">
                    <p className="p-3 bg-[#F5F5F5] rounded-l-sm border border-r-0 shadow-none font-bold   border-[#E5E7EB] opacity-100">
                        $
                    </p>
                    <div className="w-full">
                        <CustomInput
                            placeholder="Enter amount"
                            className="rounded-none flex-1 w-full bg-white"
                        />
                    </div>
                    <CustomCombobox
                        value="XAF"
                        options={currencyOptions}
                        emptyLabel="No currency code found"
                        className="rounded-l-none border-l-0 w-full"
                        // label="Reeiver Country"
                        placeholder="Select currency code"
                    />
                </div>
            </div>
            <CustomCombobox
                onSelectChange={(value) => {
                    const query = new URLSearchParams();
                    query.set("transferType", value);
                    router.replace(`?${query.toString()}`, {
                        scroll: false,
                    });
                }}
                options={[
                    {
                        label: "Account",
                        value: transferTypeEnum.ACCOUNT,
                    },
                    {
                        label: "Cash collection",
                        value: transferTypeEnum.CASH_COLLECTION,
                    },
                    {
                        label: "Mobile transfer",
                        value: transferTypeEnum.MOBILE_TRANSFER,
                    },
                ]}
                emptyLabel="No Transfer type found"
                label="Transfer type"
                placeholder="Select "
                optionFullWidth
            />
            <CustomCombobox
                options={[
                    {
                        label: "Remitter to send",
                        value: "Remitter to send",
                    },
                    {
                        label: "Beneficiary to receive",
                        value: "beneficiary to receive",
                    },
                ]}
                emptyLabel="No Amount type found"
                label="Amount type"
                placeholder="Select "
                optionFullWidth
            />
        </div>
    );
};

export default SendMoneyDetailsForm;
