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
    
    console.log(feedHtml)
/*
Challenge:
1. Use a "for of" to iterate over the data and 
   create HTML string for each tweet using the 
   boilerplate below. Replace UPPERCASE text
   with data from the tweets. 
2. Store this HTML in a let called "feedHtml".
3. Log out feedHtml.
4. Call getFeedHtml to check it's working.
*/  
}

getFeedHtml()
