import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("posts/")
      .then((res) => setPosts(res.data))
      .catch(() => alert("Error loading posts"));
  }, []);

  return (
    <div>
      <h2>Latest Posts</h2>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5>{post.title}</h5>
                <p>{post.content.substring(0, 80)}...</p>
                <Link to={`/post/${post.id}`} className="btn btn-primary btn-sm">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
