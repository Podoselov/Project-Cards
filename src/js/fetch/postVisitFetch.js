const postVisitFetch = async (bodyObj, token) => {
  try {
    const response = await fetch('https://ajax.test-danit.com/api/v2/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyObj),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default postVisitFetch;
