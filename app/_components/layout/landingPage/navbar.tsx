"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LandingPageNavBar = () => {
    const router = useRouter();
    return (
        <nav className=" py-4 px-8 bg-white shadow-md">
            <div className="flex items-center max-w-7xl w-full mx-auto justify-between">
                <Link href={"/home"} className="flex items-center gap-3">
                    <Image
                        src="/Logo.png"
                        alt="FINASDDEE Logo"
                        width={40}
                        height={40}
                    />
                    <div className="flex flex-col">
                        <span className="font-extrabold text-xl text-gray-900">
                            FINASDDEE
                        </span>
                        <span className="text-sm text-gray-500">
                            Credit Line
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-8 text-gray-700 font-medium">
                    <Link
                        href="#how-it-works"
                        className="hover:text-primary transition-colors duration-200"
                    >
                        HOW IT WORKS
                    </Link>
                    <Link
                        href="#help"
                        className="hover:text-primary transition-colors duration-200"
                    >
                        HELP
                    </Link>
                    <Link
                        href="#our-network"
                        className="hover:text-primary transition-colors duration-200"
                    >
                        OUR NETWORK
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <Button
                        onClick={() => {
                            router.push("/send-money");
                        }}
                        className=" text-white px-6 py-2.5  shadow-sm font-semibold transition-colors duration-200"
                    >
                        SEND MONEY
                    </Button>
                    <Link
                        href="/login"
                        className="text-gray-700 font-bold hover:text-primary transition-colors duration-200"
                    >
                        LOGIN
                    </Link>
                    <Button className="bg-[#C89E4E] hover:bg-[#b08b41] text-white px-6 py-2.5 rounded-lg shadow-sm font-semibold transition-colors duration-200">
                        REGISTER
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default LandingPageNavBar;
