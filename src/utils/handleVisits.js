const { APIBASE } = require("@/constant");
const { default: axios } = require("axios");

export const handleUserVisits = async () => {
  const userIdKey = "user_id";

  let userId = localStorage.getItem(userIdKey);
  if (userId) {
    await axios.post(`api/visitors`, { user_id: userId });
  } else {
    userId = crypto.randomUUID();
    localStorage.setItem(userIdKey, userId);
    await axios.post(`${APIBASE}visits`, { user_id: userId });
  }
};
