import { type FC, type ReactNode } from "react";

export type ToasterProps = {
  title: string;
  icon: ReactNode;
  color: string;
  display: boolean;
  description?: ReactNode;
};

const Toaster: FC<ToasterProps> = ({
  icon,
  title,
  display,
  color,
  description,
}) => {
  if (!display) {
    return null;
  }
  return (
    <div
      className={`flex flex-row items-center gap-4 rounded-[8px] p-2`}
      style={{ backgroundColor: color }}
    >
      {icon}
      <div>
        <p className="text-[14px] font-normal leading-[20px] text-[#0A0D14]" >{title}</p>
        {description}
      </div>
    </div>
  );
};

export default Toaster;
