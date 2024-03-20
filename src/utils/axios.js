import axios from "axios";

// Если было много запросов, то использовал бы базовый урл по умолчанию.
const instance = axios.create({
//   baseURL: "https://www.mocky.io/",
});

export default instance;
