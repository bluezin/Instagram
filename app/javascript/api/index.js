import axios from "axios";

const getUser = async () => {
  const request = await axios.get("/profile");
  const data = await request.data;
  return data;
};

const searchResults = async ({ search_id, text }) => {
  const request = await axios.post(
    `/search/${search_id}`,
    { text }
  );
  const data = await request.data;
  return data;
};

const searchData = async ({ search_id }) => {
  const request = await axios.get(`/search/${search_id}`);
  const data = await request.data;
  return data;
};

const postCreate = async ({ newData }) => {
  const request = await axios.post("/post/create", {
    ...newData,
  });
  const data = await request.data;
  return data;
};

const posts = async () => {
  const request = await axios.get("/posts");
  const data = await request.data;
  return data;
};

const commentCreate = async ({ postId, content }) => {
  const request = await axios.post(
    `/comment/create/${postId}`,
    { content }
  );
  const data = await request.data;
  return data;
};

const userLogout = async () => {
  const request = await axios.delete("/users/logout");
  const data = await request.data;
  return data;
};

const likeCreate = async ({ postId }) => {
  const request = await axios.post(`/like/${postId}`);
  const data = await request.data;
  return data;
};

const likeDelete = async ({ postId }) => {
  const request = await axios.delete(`/like/${postId}`);
  const data = await request.data;
  return data;
};

const createHistory = async ({ url_image, url_video }) => {
  const request = await axios.post(`/history`, {
    history: {
      url_image,
      url_video,
    },
  });
  const data = await request.data;
  return data;
};

const listHistories = async () => {
  const request = await axios.get(`/histories`);
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
