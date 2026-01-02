/*
Challenge:
1. Put all of the data in its own file called
   data.js, and export it back into index.js. 
   Make any changes to index.html that are
   necessary to make this work.
2. Log out tweetsData.
*/

import {tweetsData} from '/data.js'

console.log(tweetsData)

function getFeedHtml(){
    let feedHtml = ``
    for (const tweet of tweetsData) {
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>`
    }
    
    return feedHtml 
}
