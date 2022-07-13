import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from "./Post";
import db from './firebase';
import FlipMove from "react-flip-move";

function Feed(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return(
        <div className="feed">
<div className="feed_header">
    <h2>Home</h2>
</div>
            <TweetBox />
            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        image={post.image}
                        avatar={post.avatar}
                        text={post.text}
                    />
                ))}
            </FlipMove>
        </div>
    )
}
export default Feed;