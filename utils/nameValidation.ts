export const nameValidation = (name: string) => {
  const hasNumber = !!name.match(/\d+/);
  if (hasNumber) return "Name can only contain letters!";
  return "";
};
