import axios from "axios";

const getUser = async () => {
  const request = await axios.get("http://localhost:3000/profile");
  const data = await request.data;
  return data;
};

const searchResults = async ({ search_id, text }) => {
  const request = await axios.post(
    `http://localhost:3000/search/${search_id}`,
    { text }
  );
  const data = await request.data;
  return data;
};

const searchData = async ({ search_id }) => {
  const request = await axios.get(`http://localhost:3000/search/${search_id}`);
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
  const request = await axios.get("http://localhost:3000/posts");
  const data = await request.data;
  return data;
};

const commentCreate = async ({ postId, content }) => {
  const request = await axios.post(
    `http://localhost:3000/comment/create/${postId}`,
    { content }
  );
  const data = await request.data;
  return data;
};

const userLogout = async () => {
  const request = await axios.delete("http://localhost:3000/users/logout");
  const data = await request.data;
  return data;
};

const likeCreate = async ({ postId }) => {
  const request = await axios.post(`http://localhost:3000/like/${postId}`);
  const data = await request.data;
  return data;
};

const likeDelete = async ({ postId }) => {
  const request = await axios.delete(`http://localhost:3000/like/${postId}`);
  const data = await request.data;
  return data;
};

const createHistory = async ({ url_image, url_video }) => {
  const request = await axios.post(`http://localhost:3000/history`, {
    history: {
      url_image,
      url_video,
    },
  });
  const data = await request.data;
  return data;
};

const listHistories = async () => {
  const request = await axios.get(`http://localhost:3000/histories`);
  const data = await request.data;
  return data;
};

// fetch image and video

const fetchImage = async (formData) => {
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dzkhw6nzm/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = res.json();
  return data;
};

const fetchVideo = async (formData) => {
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dzkhw6nzm/video/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = res.json();
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
  createHistory,
  listHistories,
  fetchImage,
  fetchVideo,
};
