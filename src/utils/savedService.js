import tokenService from "./tokenService";

const BASE_URL = "/api/saved"

const index = () => {
  return fetch(BASE_URL, {
    method: "GET",
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  }).then((res) => {
    if (res.ok) {
      console.log("ok")
      return res.json();
    } else {
      throw new Error("Not logged in");
    }
  });
};

const remove = (v) => {
  return fetch(`${BASE_URL}/${v._id}`, {
    method: "DELETE", 
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
}

export { index };
