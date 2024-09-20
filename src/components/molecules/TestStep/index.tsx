import { type FC } from "react";
import { CheckCircle } from "~/assets/icons";
import Button from "~/components/atoms/Button";

type TestStepProps = {
  isDisable: boolean;
};

const TestStep: FC<TestStepProps> = ({ isDisable }) => {
  return (
    <div className="shadow-[0px_1.2px_3.99px_0px_rgba(0,0,0,0.07), 0px_4.02px_13.4px_0px_rgba(0,0,0,0.11)] gap-[23px] rounded-[8px] border-2 border-[#EBEDF3] bg-white p-6">
      <div className="flex flex-row items-center gap-4">
        <CheckCircle  stroke="grey" />
        <div className="flex flex-col gap-1">
          <div className="font-pretendard text-[18px] font-medium leading-[21.48px] tracking-[0.1px]">
            Test Surface Tag Events
          </div>
          <div className="font-inter text-[16px] font-normal leading-[20px] tracking-[0.05em]">
            Test if the Surface Tag is properly emitting events.
          </div>
        </div>
        <div className="ml-auto">
          <Button color="primary" isDisabled={isDisable}>
            Test tag
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestStep;
