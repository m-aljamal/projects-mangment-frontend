const localStorageKey = "___auth_provider_token___";

async function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

async function handleUserResponse({ accessToken }: { accessToken: string }) {
  window.localStorage.setItem(localStorageKey, accessToken);

  let user = await currentUser(accessToken);
  console.log("user", user);

  return user;
}

async function currentUser(accessToken: string) {
  const response = await fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query: `
        query currentUser{
            currentUser{
              name
              id
              role
              username
            }
          }
        `,
    }),
  });
  const json = await response.json();
  return json.data.currentUser;
}

async function login(username: string, password: string) {
  return await client("auth/login", { username, password }).then(
    handleUserResponse
  );
}

async function client(endpoint: string, data: any) {
  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return window
    .fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, config)
    .then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { getToken, handleUserResponse, currentUser, login };
