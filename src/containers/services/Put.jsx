import axios from "axios";
import { RootPath, OnlinePath } from "./config";

const Put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? RootPath : OnlinePath}/${path}`, data).then(result => {
      resolve(result.data)
    }, (err) => {
      reject(err)
    })
  })
  return promise;
}

export default Put;