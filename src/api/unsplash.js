import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4qUK3ln47Xpbfq91bGycwxkfyDroD0TU8EnLOdpmjUw",
  },
});

