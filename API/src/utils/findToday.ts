export const findToday = (): string => {
  const x = new Date().toLocaleDateString();
  return x.split("/").reverse().join("-");
};
