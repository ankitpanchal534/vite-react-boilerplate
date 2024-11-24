import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.AUTH_TOKEN}`, // Replace with your auth token logic
  },
  withCredentials: true,
});

export { client };
