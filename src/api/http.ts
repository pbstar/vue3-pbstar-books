import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_SERVER_URL
const get = (url: String, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        params: data,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
const post = (url: String, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
const put = (url: String, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseUrl + url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
const del = (url: String, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(baseUrl + url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export default {
  get,
  post,
  put,
  del,
};
