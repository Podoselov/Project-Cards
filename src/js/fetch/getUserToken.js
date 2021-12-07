const getLogin = async (email, pass) => {
  try {
    const response = await fetch(
      'https://ajax.test-danit.com/api/v2/cards/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${pass}`,
        }),
      }
    );
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getLogin;
