import Header from "../../components/headre/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className='Home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
