import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPageFooter = () => {
    return (
        <footer className="bg-[#C89E4E] text-white py-12 px-8 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white border-opacity-30 pb-8">
                {/* Information Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4">INFORMATION</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#how-it-works"
                                className="hover:underline text-sm"
                            >
                                How it works
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#sending-countries"
                                className="hover:underline text-sm"
                            >
                                Sending Countries
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#receiving-countries"
                                className="hover:underline text-sm"
                            >
                                Receiving Countries
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#faq"
                                className="hover:underline text-sm"
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Help and Support Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4">HELP AND SUPPORT</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#contact-us"
                                className="hover:underline text-sm"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#user-agreement"
                                className="hover:underline text-sm"
                            >
                                User Agreement
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#terms-and-conditions"
                                className="hover:underline text-sm"
                            >
                                Terms and Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#cookie-policy"
                                className="hover:underline text-sm"
                            >
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Logo and Tagline Section */}
                <div className="md:col-span-2 flex flex-col items-end justify-between text-right">
                    <div className="flex flex-col items-center md:items-end mb-4">
                        <Image
                            src="/Logo.png"
                            alt="FINASDDEE Logo"
                            width={60}
                            height={60}
                            className="mb-2"
                        />
                        <span className="font-extrabold text-2xl">
                            FINASDDEE
                        </span>
                        <span className="text-md text-white opacity-80">
                            Credit Line
                        </span>
                    </div>
                    <p className="text-sm text-white opacity-80 mt-4">
                        Finasddee sends and receives in 150+ countries.
                    </p>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="max-w-7xl mx-auto pt-8 text-center text-sm text-white opacity-80">
                <p>Copyright © 2025 Finasddee. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default LandingPageFooter;
