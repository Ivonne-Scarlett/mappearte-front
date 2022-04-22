const API_URL = "http://localhost:8080";

export async function getArtist() {
  const response = await fetch(`${API_URL}/artist`);
  return await response.json();
}

export async function getArtistById(artistId) {
  const response = await fetch(`${API_URL}/artist/${artistId}`);
  return await response.json();
}

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
  return responseRegisterArtist  
}

export async function registerUser(data) {
  const response = await fetch(`${API_URL}/user`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const responseRegisterUser = await response.json();
  return responseRegisterUser  
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
