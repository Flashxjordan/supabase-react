import './App.css';
import { useState, useEffect } from "react";
import { SupaBase } from '/Users/user/Desktop/supabase-react/src/client.js';

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: "", content: ""})
  const { title, content } = post
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const { data } = await SupaBase
      .from('posts')
      .select()
    setPosts(data)
    console.log("data: ", data)
  }
  async function createPost() {
    await SupaBase
      .from('posts')
      .insert([
        { title, content }
      ])
      .single()
    setPost({ title: "", content: ""})
    fetchPosts()
  }
  return (
    <div className="App">
    <h1> Type your blog here</h1>
     <input 
     placeholder="Title"
     value={title}
     onChange={e => setPost({ ...post, title: e.target.value })}
    />
     <input 
     placeholder="Content"
     value={content}
     onChange={e => setPost({ ...post, content: e.target.value })}
    />
    <button onClick={createPost}> Create Post </button>
    {
      posts.map(post => (
        <div key={post.id}>
          <h3> {post.title}</h3>
          <p> {post.content}</p>
          </div>
      ))
    }
    </div>
  );
}

export default App;
