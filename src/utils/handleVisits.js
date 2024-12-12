const { APIBASE } = require("@/constant");
const { default: axios } = require("axios");

export const handleUserVisits = async () => {
  const userIdKey = "user_id";
    // Check if the current hostname is localhost
    if (window.location.hostname === "localhost") {
      console.log("Running on localhost, request not sent.");
      return;
    }
  

  let userId = localStorage.getItem(userIdKey);
  if (userId) {
    await axios.post(`api/visitors`, { user_id: userId });
  } else {
    userId = crypto.randomUUID();
    localStorage.setItem(userIdKey, userId);
    await axios.post(`${APIBASE}visits`, { user_id: userId });
  }
};