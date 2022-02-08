import axios from "axios";
import { RootPath, OnlinePath } from "./config";

const Delete = (path, root, id) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? RootPath : OnlinePath}/${path}`, id)
      .then(r => {
        resolve(r.data)
      }, err => {
        reject(err)
      })
  })
  return promise;
}

export default Delete;