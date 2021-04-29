export const logIn = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.trace(error);
  }
};

export const register = async (credentials) => {
  try {
    console.warn('[REGISTER] NOT IMPLEMENTED');
    return credentials;
  } catch (error) {
    console.trace(error);
  }
};
