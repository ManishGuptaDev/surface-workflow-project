import Link from "next/link";
import React from 'react';

interface MenuItemProps {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, path, icon }) => {
  return (
    <Link href={path}>
      <div className="flex items-center py-2 rounded-lg hover:bg-gray-200 transition duration-200 gap-4">
        <span className="text-[#383F5080]">{icon}</span>
        <span className="text-[#383F5080] text-[16px] font-medium">{name}</span>
      </div>
    </Link>
  );
};

export default MenuItem;