import { useEffect, useState } from "react";
import type { Post } from "./type";

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    console.log(posts);

    return (
        <div>
            <h2>Posts :  {posts.length} </h2>
            {
                posts.slice(0, 10).map(post => <p key={post.id}>{post.title}</p>)
            }
            <hr />
        </div>

    );
};

export default Posts;