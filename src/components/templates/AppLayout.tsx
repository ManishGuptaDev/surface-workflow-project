import { type FC, type PropsWithChildren } from "react";
import Sidebar from "../organisms/Sidebar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-1 m-8">{children}</div>
    </div>
  );
};

export default AppLayout;
