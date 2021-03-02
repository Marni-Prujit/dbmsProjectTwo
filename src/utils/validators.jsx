export const validateEmailAndPassword = (email, username, password, type) => {
  const errors = {};
  if (type === 'register') {
    // Empty errors checking
    if (username.trim() === '') errors.username = 'Username cannot be empty';
    if (email.trim() === '') errors.email = 'Email cannot be empty';
    if (password.trim() === '') errors.password = 'Password cannot be empty';
    if (Object.keys(errors).length > 0) return errors;

    // email checking
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(mailformat)) {
      errors.email = 'Invalid email';
    }
    // password checking
    if (password.length < 6) {
      errors.password = 'Password must be atleast 6 characters';
    }
  }
  if (type === 'login') {
    if (email.trim() === '') errors.email = 'Email cannot be empty';
    if (password.trim() === '') errors.password = 'Password cannot be empty';
    if (Object.keys(errors).length > 0) return errors;
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(mailformat)) {
      errors.email = 'Invalid email';
    }
  }
  return errors;
};
