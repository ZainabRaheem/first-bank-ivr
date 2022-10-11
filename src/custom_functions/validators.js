export const required = (value) => {
  if (value.length == "") {
    return "Field cannot be empty";
  }

  return "";
};
