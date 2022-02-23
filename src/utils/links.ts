import { useParams } from "react-router-dom";
import { useProjectId } from "./auth-provider";

export const adminLinks = [
  {
    to: "/",
    label: "لوحة التحكم",
  },
  {
    to: "/projects",
    label: "المشاريع",
  },
  {
    to: "/employees",
    label: "الموظفين",
  },
];

export const useProjectLinks = () => {
  const projectId = useProjectId();
  return [
    {
      label: "الرئيسية",
      to: `/projects/${projectId}`,
    },
    {
      label: "الهيكل التنظيمي",
      to: `/projects/${projectId}/structure`,
    },
    {
      label: "موظفين المشروع",
      to: `/projects/${projectId}/employees`,
    },
    {
      label: "الخصومات",
      to: `/projects/${projectId}/discounts`,
    },
    {
      label: "الرواتب",
      to: `/projects/${projectId}/salaries`,
    },
  ];
};
