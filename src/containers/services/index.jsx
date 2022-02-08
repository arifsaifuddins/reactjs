import Delete from "./Delete";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', true);
const getComment = () => Get('comments', false);

// POST 
const postNewsBlog = (data) => Post('posts', true, data);

// PUT
const putDataBlog = (data, id) => Put(`posts/${id}`, true, data);

// DELETE
const deleteDataBlog = (id) => Delete(`posts/${id}`, true);

// objec pemanggilan
const API = {
  getNewsBlog,
  getComment,
  postNewsBlog,
  putDataBlog,
  deleteDataBlog
}

export default API;