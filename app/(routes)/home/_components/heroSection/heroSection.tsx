"use client";
import DetailsStep from "@/app/(routes)/send-money/_component/steps/DetailsStep";
import { cn } from "@/lib/utils";

const HeroSection = () => {
    return (
        <section
            className={cn(
                "bg-[url(/assets/images/new_cover_photo.jpg)] bg-cover bg-no-repeat relative ",
                "before:absolute before:inset-0 before:bg-gray-900/70",
            )}
        >
            <div className="w-screen min-h-screen py-16 max-w-6xl mx-auto grid grid-cols-8 items-center relative ">
                <div className="col-span-5 text-white">
                    <h3 className="text-4xl font-bold">
                        A better way to Send Money
                    </h3>
                    <h6 className="text-bold text-lg">
                        {` You've got the money. We've got the speed.`}
                    </h6>
                </div>
                <div className="col-span-3">
                    <DetailsStep onNext={() => {}} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
