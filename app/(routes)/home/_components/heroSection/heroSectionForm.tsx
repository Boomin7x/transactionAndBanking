import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Lock } from "lucide-react";

const HeroSectionForm = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
                Send Money
            </h2>

            <div className="space-y-5">
                {/* Sender Country */}
                <div>
                    <label
                        htmlFor="senderCountry"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Sender Country
                    </label>
                    <div className="relative">
                        <select
                            id="senderCountry"
                            className="block w-full h-12 px-4 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-green-500 pr-10"
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                {/* Receiver Country */}
                <div>
                    <label
                        htmlFor="receiverCountry"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Receivers Country
                    </label>
                    <div className="relative">
                        <select
                            id="receiverCountry"
                            className="block w-full h-12 px-4 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-green-500 pr-10"
                        >
                            <option>United Kingdom</option>
                            <option>Germany</option>
                            <option>France</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                {/* Delivery methods */}
                <div>
                    <label
                        htmlFor="deliveryMethods"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Delivery methods
                    </label>
                    <div className="relative">
                        <select
                            id="deliveryMethods"
                            className="block w-full h-12 px-4 py-2 bg-[#F5F5F5] rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-green-500 pr-10"
                        >
                            <option>Bank Transfer</option>
                            <option>Cash Pickup</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                {/* Sending Currency */}
                <div>
                    <label
                        htmlFor="sendingCurrency"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Sending Currency
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-gray-500">$</span>
                        <Input
                            id="sendingCurrency"
                            type="number"
                            placeholder="0"
                            className="w-full h-12 pl-8 pr-4 bg-[#F5F5F5] rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                        />
                    </div>
                </div>

                {/* Financial Details */}
                <div className="space-y-3 pt-4">
                    <div className="flex justify-between text-gray-700">
                        <span className="font-semibold">Receiver gets</span>
                        <span>0.0</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span className="font-semibold">Total Fees</span>
                        <span>0.0</span>
                    </div>
                    <div className="flex justify-between text-gray-800 font-bold text-lg">
                        <span>Amount To Pay</span>
                        <span>0.00</span>
                    </div>
                </div>

                <Button className="w-full h-12 bg-[#C89E4E] hover:bg-[#b08b41] text-white font-semibold rounded-lg shadow-md transition-colors duration-200 mt-6">
                    Continue
                </Button>

                {/* Payment and Regulatory Info */}
                <div className="flex flex-col items-center space-y-4 mt-6">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/Trustly.svg"
                            alt="Trustly Logo"
                            width={80}
                            height={20}
                        />
                        <Image
                            src="/Sofort.svg"
                            alt="Sofort Banking Logo"
                            width={80}
                            height={20}
                        />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 text-center">
                        <Lock className="size-4" />
                        <span>
                            We are Authorised and Regulated by the Financial
                            Conduct Authority (US Dollars).
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionForm;
