import React from 'react';
import './Widgets.css';
import {SearchSharp} from "@mui/icons-material";
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";


function Widgets(){
    return(
        <div className="widgets">
            <div className='widgets__input'>
            <SearchSharp className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>
            <div className='widgets__widgetsContainer'>
                <h2>Whats happening</h2>
                <TwitterTweetEmbed tweetId={"134582705483148083"} />
                <TwitterTimelineEmbed sourceType='profile'
                                      screenName='AzahNathaniel'
                                      options={{height: 400}}
                                      />
                <TwitterShareButton url={'facebook.com/AzahNathaniel'}
                    options={{text: 'Check out my website', via: 'NathanMackeans'}}
                    />

            </div>
        </div>
    )
}
export default Widgets;