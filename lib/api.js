const API_URL ='http://localhost:8080' 


export async function getArtist() {
  const response = await fetch(`${API_URL}/artist`);
  return await response.json()
}

//data = {email, password}
export async function login(data) {
  const response = await fetch(`${API_URL}/auth/login`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const responseLogin = await response.json();
  return responseLogin.token
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