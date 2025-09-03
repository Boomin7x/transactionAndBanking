import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CountryList from "country-list-with-dial-code-and-flag";
import React, { FC } from "react";

interface IReceiverStep {
    onNext: () => void;
}
const ReceiverStep: FC<IReceiverStep> = ({ onNext }) => {
    const allCountries = CountryList.getAll();
    const CountryOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.name}`,
        value: items?.name,
    }));
    const dailCodeOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.dialCode}`,
        value: items?.dialCode,
    }));
    return (
        <PaymentCardLayout
            title="Receivers information"
            description="The information must be accurate or your transfer might be delayed"
            buttonLabel="continue"
            onNext={onNext}
        >
            <div className="w-full flex flex-col gap-4">
                <div className="w-full grid grid-cols-2 gap-4">
                    <CustomInput label="First name" placeholder="first name" />
                    <CustomInput
                        label="Middle name"
                        placeholder="Middle name"
                    />
                    <CustomInput label="last name" placeholder="last name" />
                    <CustomInput
                        label="Receiver's email (Optional)"
                        placeholder="Example@gmail.com"
                    />
                    <CustomInput
                        label="Receiver's contact"
                        placeholder="Enter recievers contact"
                    />
                    <CustomCombobox
                        options={[
                            {
                                label: "individual",
                                value: "individual",
                            },
                        ]}
                        emptyLabel="No organisation type found"
                        label="Organization type"
                        placeholder="Select "
                        optionFullWidth
                    />
                </div>
                <CustomInput
                    label="Receiver's Address line 1"
                    placeholder="Enter recievers address"
                />
                <CustomInput
                    label="Receiver's Address line 2"
                    placeholder="Enter recievers address"
                />
                <CustomInput
                    label="Receiver's Address line 3"
                    placeholder="Enter recievers address"
                />
                <div className="w-full grid grid-cols-2 gap-4">
                    <CustomInput label="city" placeholder="city" />
                    <CustomInput label="state" placeholder="state" />
                    <CustomInput
                        label="zip code"
                        placeholder="enter receivers postal code"
                    />
                    <CustomCombobox
                        options={CountryOptions}
                        emptyLabel="No Country found"
                        label="Receiver's country"
                        placeholder="Select Country"
                        optionFullWidth
                    />
                </div>
                <div>
                    <p className="font-sans  text-sm text-muted-foreground font-semibold leading-[18px] ">
                        Telephone
                    </p>
                    <div className="flex items-end w-full">
                        <CustomCombobox
                            value={"+237"}
                            options={dailCodeOptions}
                            emptyLabel="No currency code found"
                            className="rounded-r-none border-r-0 w-full"
                            // label="Reeiver Country"
                            placeholder="Select currency code"
                        />
                        <div className="w-full">
                            <CustomInput
                                placeholder=""
                                type="tel"
                                className="rounded-l-none flex-1 w-full bg-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PaymentCardLayout>
    );
};

export default ReceiverStep;
