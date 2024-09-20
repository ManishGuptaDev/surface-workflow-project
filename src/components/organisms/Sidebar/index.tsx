import Link from "next/link";
import { type FC } from "react";
import Image from "next/image";
import { CheckCircle } from "~/assets/icons";
import Button from "~/components/atoms/Button";
import Divider from "~/components/atoms/Divider";
import MenuItem from "~/components/molecules/MenuItem";
import Workspace from "~/components/molecules/Workspace";
import { menuItems } from "~/lib/consts/menuItems";

// Sample user data
const user = {
  name: "Chris Hood",
  email: "hello@example.com",
  avatarUrl: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
};

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
      <div className="mb-4 mt-auto flex items-center justify-center">
        <Image
          src={user.avatarUrl}
          alt={`${user.name}'s avatar`}
          width={40}
          height={40}
          className="rounded-full border border-gray-300"
        />
        <div className="ml-3">
          <p className="text-[#383F50] font-medium">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
