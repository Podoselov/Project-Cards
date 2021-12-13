const getCards = async (token) => {
  try {
    const response = await fetch('https://ajax.test-danit.com/api/v2/cards', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCards;
