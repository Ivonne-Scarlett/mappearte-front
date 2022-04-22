const API_URL = "http://localhost:8080";

//get all artists
export async function getArtist() {
  const response = await fetch(`${API_URL}/artist`);
  return await response.json();
}
//get artist by id
export async function getArtistById(artistId) {
  const response = await fetch(`${API_URL}/artist/${artistId}`);
  return await response.json();
}

/* //get all users
export async function getUsers() {
  const response = await fetch(`${API_URL}/user`);
  return await response.json();
}
//get user by id
export async function getUserById(usertId) {
  const response = await fetch(`${API_URL}/artist/${usertId}`);
  return await response.json();
} */

//data = {email, password}
export async function login(data) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseLogin = await response.json();
  return responseLogin.token;
}

export async function postArtist() {
  const response = await fetch(`${URL_BASE}/artist`);
  return await response.json();
}

export async function registerArtist(data) {
  const response = await fetch(`${API_URL}/artist`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseRegisterArtist = await response.json();
  return responseRegisterArtist;
}

/*
async-await 

async function nameFucntion() {
  //..code 
  await ...
}

const funtionName = async () => {
   //..code 
  await ...
}
*/
