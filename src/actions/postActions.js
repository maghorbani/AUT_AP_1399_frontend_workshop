import { FETCH_POST, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("http://127.0.0.1:8000/posts/api/posts/")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_POST,
        payload: data,
      });
    });
};

export const newPost = (formData) => (dispatch) => {
  fetch("http://127.0.0.1:8000/posts/api/posts/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      dispatch({
        type: NEW_POST,
        payload: data,
      });
    });
};
