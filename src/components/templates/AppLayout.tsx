import { type FC, type PropsWithChildren } from "react";
import Sidebar from "../organisms/Sidebar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row gap-4">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AppLayout;
