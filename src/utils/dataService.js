import axios from "axios";
import {success, error} from "../constants/serverResponse";

const serverApiUrl = 'http://localhost:5000';
// POST requests //
const postSubscribeForm = (data, config) => {
  const apiRoute = '/subscriptions';
  if(!data) return toJson(error);
  return axios.post(serverApiUrl+apiRoute, data, config)
    .then(res => {
      return res.status === 201 ?
      toJson(success) : toJson(error);
    }).catch((err) => {
      return toJson(error, err);
    });
};

const toJson = (obj) => {
  return JSON.stringify(obj);
}

export {
  postSubscribeForm
}