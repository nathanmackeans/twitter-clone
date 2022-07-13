import React, {useState} from 'react';
import './TweetBox.css';
import db from './firebase';
import {Avatar, Button} from "@mui/material";

function TweetBox(){
    const [tweet, setTweet] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Jedidah Azah',
            username: 'Jeddiiii',
            verified: true,
            text: tweet,
            image: tweetImage,
        });
        setTweetImage('');
        setTweet('');
    }

    return (
        <div className="TweetBox">
<form>
    <div className="tweetBox__input">
        <Avatar src="https://images.generated.photos/TXS791UF50Y0Bibu1xoJC4kbG6Aap2bslyY28AWNvfU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNDg2/NTExLmpwZw.jpg" />
        <input onChange={e => setTweet(e.target.value)} value={tweet} placeholder="What's happening?" type="text" />
    </div>
    <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} placeholder="What's happening?" type="'"className="tweetBox__inputImage" placeholder="Optional: Enter Image url" type="text" />
    <Button onClick={sendTweet} onChange={e => setTweet(e.target.value)}type="submit" className="tweetBox__tweetButton">Tweet</Button>
</form>
        </div>
    )
}
export default TweetBox;