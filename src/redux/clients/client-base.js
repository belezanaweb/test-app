import { url } from "../../config.json";

const Client = {
  get: path => fetch(`${url}/${path}`)
};

export default Client;
