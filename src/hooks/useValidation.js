export default () => {
  const validateInputs = (email, password, setEmail, setPassword, setError) => {
    if (!validateEmail(email) && !validatePassword(password)) {
      setError('Email and Password do not meet requirements..');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return false;
    }
    if (!validateEmail(email)) {
      setError('Email does not meet requirements..');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return false;
    }

    if (!validatePassword(password)) {
      setError('Password does not meet requirements..');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    if (password.length < 4) {
      return false;
    }
    return true;
  };

  return [validateInputs];
};
