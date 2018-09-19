import axios from "axios"
export const request = (path, data, method) => {   
  return axios({
    method,
    url: `localhost:3001/api/v1/${path}`,
    headers: {
      'Content-Type':'application/json',
      ACCESS_TOKEN: "FSADFSASAFKJSADLKFADSKLFJLSA",
    },
    data
  })
}
export const getRequest = (path, data) => request(path, data, "GET")
export const postRequest = (path, data) => request(path, data, "POST")
// export function patchRequest(path, data) => request(path, data, "PATCH")
// export function deleteRequest(path, data) => request(path, data, "DELETE")
// export function putRequest(path, data) => request(path, data, "PUT")