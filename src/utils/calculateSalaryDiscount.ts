export const calculateDiscount = (salary: number, discount: number) => {
  const totalDaysOfMonth = 30;
  return Math.round((salary / totalDaysOfMonth / 100) * discount);
};
