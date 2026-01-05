import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const createPost = (e) => {
    e.preventDefault();

    API.post("posts/", { title, content })
      .then(() => navigate("/"))
      .catch(() => alert("Login required"));
  };

  return (
    <form onSubmit={createPost} className="card p-4">
      <h4>Create Post</h4>
      <input className="form-control mb-2" placeholder="Title"
        onChange={(e) => setTitle(e.target.value)} />
      <textarea className="form-control mb-2" rows="5"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)} />
      <button className="btn btn-primary">Publish</button>
    </form>
  );
}

export default CreatePost;
