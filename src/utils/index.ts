export const getAcronym = (str: string): string => {
  const arr = str.split(" ");
  if (arr.length > 1) {
    return arr.map((s) => s[0].toUpperCase()).join("");
  }
  return str[0].toUpperCase() + str[1].toUpperCase();
};
