const API_URL = "https://api-mappearte.bojlk2.xyz";

/**https://api-mappearte.bojlk2.xyz/
 * Returns standard request headers
 * @param {boolean} withAuth determines if we should try to get and pass the JWT token
 */
const getHeaders = (withAuth) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (withAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return headers;
};

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

//get all streetArt
export async function getStreetart() {
  const response = await fetch(`${API_URL}/streetart`);
  return await response.json();
}

/* //get all users
export async function getUsers() {
  const response = await fetch(`${API_URL}/user`);
  return await response.json()             
} */
//get user by id
export async function getUserById(usertId) {
  const response = await fetch(`${API_URL}/user/${usertId}`);
  return await response.json();
}

//data = {email, password}
export async function login(data) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: getHeaders(false),
  });
  const responseLogin = await response.json();
  return responseLogin.token;
}

export async function postArtist() {
  const response = await fetch(`${API_URL}/artist`);
  return await response.json();
}

//PATCH de artista
export async function patchArtist(id, data) {
  const response = await fetch(`${API_URL}/artist/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: getHeaders(true),
  });
  return await response.json();
}

//PATCH de usuario
export async function patchUser(id, data) {
  const response = await fetch(`${API_URL}/user/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: getHeaders(true),
  });
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

export async function registerUser(data) {
  const response = await fetch(`${API_URL}/user`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseRegisterUser = await response.json();
  return responseRegisterUser;
}

//get art by idArtist
export async function getArtByArtistId(artistId) {
  const response = await fetch(`${API_URL}/streetart/?artistId=${artistId}`);
  return await response.json();
}

export async function getMural() {
  const response = await fetch(`${API_URL}/mural`);
  return await response.json();
}