"use client";
import { useState, useEffect } from "react";

export default function FetchPostsPage() {
  const [Posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch((error) => setError("An expected Error"))
      .finally(() => setLoading(false));
  }, []);

  return ( 
    <div>
      <h1>Posts</h1>
      <ul className="bg-orange-200 text-center font-semibold">
        {Posts.map((Posts: { id: number; title: string; body: string }) => (
          <li key={Posts.id}>{Posts.title}</li>
        ))}
      </ul>
    </div>
  );
}
