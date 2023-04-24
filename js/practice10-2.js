// https://the-one-api.dev/

const BASE_URL = "https://the-one-api.dev/v2";
const ENDPOINT = "/character";
const TOKEN = "18aEQHs2_l3sCMmPg1yk";
const option = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

// const option2 = {
//     method: "POST",
//     body: {
//         name : 'Artem',
//         email: 'test@gmail.com',
//         password: '12345'
//     },
//     headers:{
//       Authorization: `Bearer ${TOKEN}`
//     }
//   };

fetch(`${BASE_URL}${ENDPOINT}`, option).then(resp => {
    if (!resp.ok) {
        throw new Error(resp.statusText)
    }

    return resp.json();
})