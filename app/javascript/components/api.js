import axios from "axios";

const getUser = async () => {
  const request = await axios.get("https://instagramruby.herokuapp.com/profile");
  const data = await request.data;
  return data;
};

const searchResults = async ({ search_id, text }) => {
  const request = await axios.post(
    `https://instagramruby.herokuapp.com/search/${search_id}`,
    { text }
  );
  const data = await request.data;
  return data;
};

const searchData = async ({ search_id }) => {
  const request = await axios.get(`https://instagramruby.herokuapp.com/search/${search_id}`);
  const data = await request.data;
  return data;
};

const postCreate = async ({ newData }) => {
  const request = await axios.post("http://localhost:3000/post/create", {
    ...newData,
  });
  const data = await request.data;
  return data;
};

const posts = async () => {
  const request = await axios.get("https://instagramruby.herokuapp.com/posts");
  const data = await request.data;
  return data;
};

const commentCreate = async ({ postId, content }) => {
  const request = await axios.post(
    `https://instagramruby.herokuapp.com/comment/create/${postId}`,
    { content }
  );
  const data = await request.data;
  return data;
};

const userLogout = async () => {
  const request = await axios.delete("https://instagramruby.herokuapp.com/users/logout");
  const data = await request.data;
  return data;
};

const likeCreate = async ({ postId }) => {
  const request = await axios.post(`https://instagramruby.herokuapp.com/like/${postId}`);
  const data = await request.data;
  return data;
};

const likeDelete = async ({ postId }) => {
  const request = await axios.delete(`https://instagramruby.herokuapp.com/like/${postId}`);
  const data = await request.data;
  return data;
};

export {
  getUser,
  searchResults,
  searchData,
  postCreate,
  posts,
  commentCreate,
  userLogout,
  likeCreate,
  likeDelete,
};
