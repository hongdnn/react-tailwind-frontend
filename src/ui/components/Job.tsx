import { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({
  title,
  icon,
  bgClass,
}: JobProps): ReactNode => {
  return (
    <div
      className={`${bgClass} flex aspect-square flex-col items-center justify-center rounded-lg p-4`}
    >
      {icon}
      <p className="font-popi pt-2">{title}</p>
    </div>
  );
};
