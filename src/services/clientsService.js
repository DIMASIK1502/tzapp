import axios from "../utils/axios";

export const fetchClients = async () =>
  axios.get("https://run.mocky.io/v3/dcc396a8-785e-4b60-9b2f-eeacf420156d");
