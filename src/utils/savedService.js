import tokenService from "./tokenService";

const BASE_URL = "/api/saved";

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    console.log("ok");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (v) => {
  try {
    const res = await fetch(`${BASE_URL}/${v._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    console.log("ok");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index, remove };
