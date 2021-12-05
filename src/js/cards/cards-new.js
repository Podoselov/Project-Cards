const TOKEN = `Bearer 6437b668-8958-4db2-9491-e121b2a4c327`;

export const getCards = async () => {
    const data = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
            Authorization: TOKEN,
        },
    });
    const cards = await data.json();
    console.log("getCards", cards);
    return cards;
};

export const addCard = async card => {
    const response = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
        },
        body: JSON.stringify(card),
    });
    const data = await response.json();
    console.log("addCard", data);
};

export const deleteCard = async id => {
    const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: TOKEN,
        },
    });
    console.log("deleteCard", response);
};

export const editCard = async (id, card) => {
    const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
        },
        body: JSON.stringify(card),
    });

    console.log("editCard", response);
};

export const getCard = async id => {
    const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: "GET",
        headers: {
            Authorization: TOKEN,
        },
    });
    const card = await response.json();
    console.log("getCard", card);
};