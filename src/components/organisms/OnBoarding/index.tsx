"use client";

import { useCallback, useState, type FC } from "react";
import InstallStep from "~/components/molecules/InstallStep";
import TestStep from "~/components/molecules/TestStep";
import { STEP } from "~/lib/consts";


const OnBoarding: FC = () => {
  const [isInstallDone, setIsInstallDone] = useState(false);
  const [activeStep, setActiveStep] = useState<STEP | null >();

  const onConnectionPassed = useCallback(() => {
    setIsInstallDone(true)
  }, [])

  const nextStep = useCallback(() => {
    setActiveStep(STEP.Test);
  }, [])

  const onExpand = useCallback((step: STEP) => {
    setActiveStep(step)
  }, [])

  return (
    <div className="mt-4 flex flex-col gap-4">
      <InstallStep onConnectionPassed={onConnectionPassed} nextStep={nextStep} open={activeStep === STEP.Install} onExpand={onExpand} />
      <TestStep isDisable={!isInstallDone} open={activeStep === STEP.Test}  onExpand={onExpand}/>
    </div>
  );
};

export default OnBoarding;
