import React, {forwardRef} from 'react';
import "./Post.css";
import {Avatar} from "@mui/material";
import {ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser} from "@mui/icons-material";

const Post = forwardRef(({displayName, username, verified, text, image, avatar}, ref) => {
    return(
        <div className="post" ref={ref}>
<div className="post__avatar">
    <Avatar src={avatar} />
</div>
            <div className="post__body">
<div className="post__header">
    <div className="post__headerText">
        <h3>{displayName}</h3>
            <span className='post__headerSpecial'>
            {verified && <VerifiedUser className="post__badge" />}
        </span> @{username}
    </div>
    <div className="post__headerDescription">
        <p>{text}</p>
    </div>
    <img className='post__bodyImage' alt="" src={image}/>
    <div className="post__footer">
        <ChatBubbleOutline fontSize="small" />
        <Repeat fontSize='small' />
        <FavoriteBorder fontSize='small' />
        <Publish fontSize='small' />
    </div>

</div>
            </div>
        </div>
    )
})
export default Post;