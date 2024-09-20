import { type FC } from "react";
import { ChevronDown, User } from "~/assets/icons";

const Workspace: FC = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <User className={"h-5 w-5"} />
        <span className="text-left text-[16px] font-semibold leading-[16px] tracking-[0.1px]">
          My workspace
        </span>
      </div>
      <ChevronDown className={"h-4 w-4"} />
    </div>
  );
};

export default Workspace;
