import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`posts/${id}/`)
      .then((res) => setPost(res.data))
      .catch(() => alert("Post not found"));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small className="text-muted">Author: {post.author_username}</small>
    </div>
  );
}

export default PostDetail;
