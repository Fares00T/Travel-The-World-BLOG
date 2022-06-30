import Post from "../post/post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.map((p, e) => (
        <div key={e}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
