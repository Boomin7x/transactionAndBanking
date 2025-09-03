import React, { FC, ReactNode } from "react";
import MainLandingPageLayout from "../_components/layout/landingPage/MainLandingPageLayout";

interface ILandingPageLayout {
    children: ReactNode;
}
const LandingPageLayout: FC<ILandingPageLayout> = ({ children }) => {
    return <MainLandingPageLayout>{children}</MainLandingPageLayout>;
};

export default LandingPageLayout;
