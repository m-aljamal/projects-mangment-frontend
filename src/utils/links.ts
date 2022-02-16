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

export const projectLinks = (projectId: string) => {
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
  ];
};
