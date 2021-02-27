export const validateEmailAndPassword = (email, password) => {
  const errors = {};
  // Empty errors checking
  if (email.trim() === '') errors.email = 'Email cannot be empty';
  if (password.trim() === '') errors.password = 'Password cannot be empty';
  if (Object.keys(errors).length > 0) return errors;

  // email checking
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(mailformat)) {
    errors.email = 'Invalid email';
  }
  // password checking
  if (password.length < 6) {
    errors.password = 'Password must be atleast 6 characters';
  }
  return errors;
};
