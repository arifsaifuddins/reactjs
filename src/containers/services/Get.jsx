import axios from "axios";
import { RootPath, OnlinePath } from "./config";

const Get = (path, root) => {
  // promise
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? RootPath : OnlinePath}/${path}`).then(result => {
      resolve(result.data)
    }, err => {
      reject(err)
    })
  })
  return promise;
}

export default Get;