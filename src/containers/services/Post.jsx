import axios from "axios";
import { RootPath, OnlinePath } from "./config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? RootPath : OnlinePath}/${path}`, data).then(result => {
      resolve(result.data);
    }, (err) => {
      reject(err)
    })
  })
  return promise;
}

export default Post;