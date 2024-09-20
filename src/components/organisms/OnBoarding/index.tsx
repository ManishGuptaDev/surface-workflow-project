"use client";

import { useState, type FC } from "react";
import InstallStep from "~/components/molecules/InstallStep";
import TestStep from "~/components/molecules/TestStep";

const OnBoarding: FC = () => {
  const [isInstallDone, setIsInstallDone] = useState(false);
  return (
    <div className="mt-4 flex flex-col gap-4">
      <InstallStep />
      <TestStep isDisable={!isInstallDone} />
    </div>
  );
};

export default OnBoarding;
