import Link from "next/link";
import { type FC } from "react";
import { CheckCircle, Home } from "~/assets/icons";
import Button from "~/components/atoms/Button";
import Divider from "~/components/atoms/Divider";
import MenuItem from "~/components/molecules/MenuItem";
import Workspace from "~/components/molecules/Workspace";
import { menuItems } from "~/lib/consts/menuItems";

const Sidebar: FC = () => {
  return (
    <div className="flex min-h-screen w-[281px] flex-col rounded-[0_18px_18px_0] bg-[#F9F9F9] p-4 px-4 py-6 shadow-[0px_1.2px_3.99px_0px_rgba(0,0,0,0.07)] shadow-[inset_-3px_4.02px_10.3px_-3px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col">
        <Link href={"/home"} passHref>
          <h4 className="mb-4 text-left text-[26.33px] font-semibold leading-[26.54px]">
            surface{" "}
            <span className="rounded bg-[#2F64EE] p-[2px] text-white">
              labs
            </span>
          </h4>
        </Link>
        <Divider />
        <Workspace />
        <Divider />
        <div className="py-4">
          <Link href={"/getting-started"} passHref>
            <Button color="secondary" icon={<CheckCircle />}>
              Getting started
            </Button>
          </Link>
        </div>
        <Divider />
        <nav className="p-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              name={item.name}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
