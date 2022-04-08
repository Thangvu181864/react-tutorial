const validator = () => {};

validator.isRequired = () => {};

validator.isEmail = () => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
};
