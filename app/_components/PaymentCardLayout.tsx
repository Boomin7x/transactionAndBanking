import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface IPaymentCardLayout {
    children: ReactNode;
    title: string;
    description?: string;
    buttonLabel: string;
    onNext?: () => void;
}
const PaymentCardLayout: FC<IPaymentCardLayout> = ({
    children,
    description,
    title,
    buttonLabel,
    onNext,
}) => {
    return (
        <Card className="rounded-sm shadow-none w-full ">
            <CardHeader className="border-b">
                <CardTitle className="text-2xl capitalize">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button
                    onClick={() => onNext?.()}
                    className="capitalize w-full !p-6 text-base rounded-sm font-semibold"
                >
                    {buttonLabel}
                </Button>
                <div className="text-center flex items-center gap-4 mt-4">
                    {/* <Image
                        width={100}
                        height={80}
                        className="h-8 w-auto"
                        src="/assets/images/security pics/credit-card.png"
                        alt="Credit Card"
                        // srcset=""
                    /> */}
                    <Image
                        width={100}
                        height={80}
                        className="h-8 w-auto"
                        src="/assets/images/security pics/Trustly-logo.png"
                        alt="Trustly"
                    />
                    <Image
                        width={100}
                        height={80}
                        className="h-8 w-auto"
                        src="/assets/images/security pics/partner5.gif"
                        alt="Sofort Banking"
                    />
                    <br />
                </div>
                <p className="text-base text-center">
                    We are Authorised and Regulated by the Financial Conduct
                    Authority (FCA).
                </p>
            </CardFooter>
        </Card>
    );
};

export default PaymentCardLayout;
