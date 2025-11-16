const API = "https://lucky-backend-rlr0.onrender.com/api";

// GET request
export async function apiGet(url, token = null) {
  const res = await fetch(API + url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return res.json();
}

// POST request
export async function apiPost(url, body, token = null) {
  const res = await fetch(API + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

export default API;
