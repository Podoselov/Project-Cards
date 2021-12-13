const putVisitCard = async (element, objEl, token) => {
  try {
    const response = await fetch(
      `https://ajax.test-danit.com/api/v2/cards/${element}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(objEl),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default putVisitCard;
