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
      <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200">
        <span className="mr-3">{icon}</span>
        <span className="text-gray-800">{name}</span>
      </div>
    </Link>
  );
};

export default MenuItem;