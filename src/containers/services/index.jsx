import Get from "./Get";
import Post from "./Post";

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', true);
const getComment = () => Get('comments', false);

// POST 
const postNewsBlog = (data) => Post('posts', true, data);

// objec pemanggilan
const API = {
  getNewsBlog,
  getComment,
  postNewsBlog
}

export default API;