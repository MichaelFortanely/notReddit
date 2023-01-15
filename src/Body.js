import React from 'react'
import Post from './Post';
import {useEffect, useState} from 'react'

// let postsStub = [{
//     postId: 0,
//     subreddit: 'Sheltie Enthusiats',
//     user: "phoenix",
//     timestamp: "April 1, 2012",
//     upvotes: 33900,
//     body: `My fiancee (F) and I (M) are getting married. We've decided wedding's gonna be childfree. No hate towards children just to keep it more organized and contained.

//     My brother 'Chris' (M) and his wife (F) have a 3 yro son who everyone calls "miracle" or "rainbow" baby. He came after several failed pregnancies that lasted for years.
    
//     When they found out that my nephew was included in the no children rule; they tried to convince me to make an exception for him. Chris told me his son is a miracle baby and his presence at the wedding will bring "blessings" for me and my fiancee. I refused and said no, the wedding is childfree. His wife kept sending my fiancee pics of my nephew when he was months old (what that mean??). I told them no, and to stop.
    
//     My brother told me this might cause a rift in our relationship, I again said no and explained that the wedding is childfree. He asked again and pointed out how his baby is different since he's a rainbow, a miracle baby. I again said no and explained that the wedding is childfree. They brought it up when they visited at my home and I knew they weren't going to stop so I'd made flash cards in advance with the phrase "the wedding is childfree, period" and pulled them out and started slowly showing them the flash cards one by one in this order:"`
// }, 
// {
//   postId: 1,
//   subreddit: 'reduxjs',
//   user: "reduction-functino",
//   timestamp: "June 10, 2018",
//   upvotes: 1,
//   body: " asdfasdfasdfasdf"
// }, 
// {
//   postId: 2,
//   subreddit: 'Surreal Memes',
//   user: "Salvador-Dali",
//   timestamp: "July 3, 1943",
//   upvotes: 12,
//   body: `Well, I suppose you could have used hand puppets instead, but flashcards seem to have gotten the message across. It makes me insane how some parents think their little bundle of joy should be allowed anywhere, anywhen, anytime and that no never applies to them. It's pretty clear they were going to run this horse right up to the altar. NTA.`
// }, 
// {
//   postId: 3,
//   subreddit: 'DankMemes',
//   user: "yangee_fat",
//   timestamp: "March 45, 2978",
//   upvotes: 65,
//   body: `My dad passed away 2 weeks ago. Me, my wife 'Candace' and my daughter (16) 'Shiloh' and her stepsisters (19) & (17) flew to my hometown to attend the funeral. After that we got 2 hotel rooms (one for me and Candace, one for the girls).

//   While I was in the room, I got a call from Shiloh at 11pm crying and sounded like she was arguing with her stepsisters. I asked what the matter was and she told me that her stepsisters insisted that she sleep on the floor (there were one large bed in the room and there was enough space for all 3 girls to sleep on). I asked why and she said she didn't know. I went to see what the issue was and talked with my stepdaughters about it. They kept talking but didn't really explain why they told her to sleep on the floor. They just shrugged and said "It's better this way...we're more comfortable this way..". I told Shiloh to grab her things and when one of my stepdaughters asked where we were going, I told her I was booking her a hotel room. Both looked upset but didn't say anything but they must've called their mom because she was awake when I got back and started arguing with me about giving Shiloh an entire hotel room for herself. I explained why I did it but she said I wasted money and that Shiloh could've sucked it up for one night on the floor. I called her unreasonable for saying this but she told me I showed the girls that I'm "playing favorites" and made my stepdaughters share a room while I gave my daughter and entire room for herself.
  
//   We went home and Candace is still bringing it up saying I mishandled this. She even pointed out how my stepdaughters are upset since they're not speaking to me.
//   `
// }, 
// {
//   postId: 4,
//   subreddit: 'AITA',
//   user: "toast_lover42",
//   timestamp: "November 4, 1973",
//   upvotes: 2134,
//   body: `asked why he wouldn't want me with him he said he felt more comfortable having privacy with his doctor. I jokingly asked if his doctor was a women and he glanced at me.

//   I anticipated his next dr appointment and decided to go meet him there. He went and 10 minutes later I entered the office (I identified myself as his wife) and he was shocked when he saw me. I greeted his doctor (a man lol) and we talked but my husband refused to even look my way and refused to speak as well.
  
//   We left the office together and he went off on me in the car saying I shouldn't have "followed" him and came into the dr office after he asked me for some privacy. I said it was alright I'm his wife I already even know what his issues are and just wanted to show support. He said I overstepped his one boundary and refused to respect his wish and made him more stressed than he already is in these hard times he's going through.`
// }, 
// {
//   postId: 5,
//   subreddit: 'ScottishPeopleTwitter',
//   user: "BleachWizard420",
//   timestamp: "June 19, 2018",
//   upvotes: 7,
//   body: `mother of triplets whom are only 2 months old. I never expected ever in my life that I'd be a mother to triplets so when I first became pregnant it was definitely the last thing in my mind.

//   I'm home with my babies all day long and had to even transfer my education to online.
  
//   Sometimes I just need some fresh air especially when I can't get them to stop crying and I find myself getting super frustrated to the point of tears, it's honestly soo hard and the dad isn't here to help as he's ether at work or at school. My fiance's (24) parents rented us a main floor apartment so when I step outside I'm literally just sitting on the chair right beside the door plus I have a baby monitor step up in their room and it has a camera on it I can literally see them and hear them so if anything happened I'd be able to quickly get to them.
//   `
// }, 
// {
//   postId: 6,
//   subreddit: 'WhitePeopleTwitter',
//   user: "light_happiness53",
//   timestamp: "June 10, 2018",
//   upvotes: 33900,
//   body: `I (20) am a mother of triplets whom are only 2 months old. I never expected ever in my life that I'd be a mother to triplets so when I first became pregnant it was definitely the last thing in my mind.

//   I'm home with my babies all day long and had to even transfer my education to online.
  
//   Sometimes I just need some fresh air especially when I can't get them to stop crying and I find myself getting super frustrated to the point of tears, it's honestly soo hard and the dad isn't here to help as he's ether at work or at school. My fiance's (24) parents rented us a main floor apartment so when I step outside I'm literally just sitting on the chair right beside the door plus I have a baby monitor step up in their room and it has a camera on it I can literally see them and hear them so if anything happened I'd be able to quickly get to them.
  
//   Being able to step outside for a few minutes to take a breather is really important to me because I start to have mini panic attacks when I can't get them to stop crying and I get really frustrated because I just feel super overwhelmed, Being able to go outside just gives me a chance to clam down.
  
//   `
// }, {
//   postId: 7,
//   subreddit: 'Sheltie Enthusiats',
//   user: "phoenix",
//   timestamp: "April 1, 2012",
//   upvotes: 33900,
//   body: `My fiancee (F) and I (M) are getting married. We've decided wedding's gonna be childfree. No hate towards children just to keep it more organized and contained.

//   My brother 'Chris' (M) and his wife (F) have a 3 yro son who everyone calls "miracle" or "rainbow" baby. He came after several failed pregnancies that lasted for years.
  
//   When they found out that my nephew was included in the no children rule; they tried to convince me to make an exception for him. Chris told me his son is a miracle baby and his presence at the wedding will bring "blessings" for me and my fiancee. I refused and said no, the wedding is childfree. His wife kept sending my fiancee pics of my nephew when he was months old (what that mean??). I told them no, and to stop.
  
//   My brother told me this might cause a rift in our relationship, I again said no and explained that the wedding is childfree. He asked again and pointed out how his baby is different since he's a rainbow, a miracle baby. I again said no and explained that the wedding is childfree. They brought it up when they visited at my home and I knew they weren't going to stop so I'd made flash cards in advance with the phrase "the wedding is childfree, period" and pulled them out and started slowly showing them the flash cards one by one in this order:"`
// }, 
// {
// postId: 8,
// subreddit: 'reduxjs',
// user: "reduction-functino",
// timestamp: "June 10, 2018",
// upvotes: 1,
// body: " asdfasdfasdfasdf"
// }, 
// {
// postId: 9,
// subreddit: 'Surreal Memes',
// user: "Salvador-Dali",
// timestamp: "July 3, 1943",
// upvotes: 12,
// body: `Well, I suppose you could have used hand puppets instead, but flashcards seem to have gotten the message across. It makes me insane how some parents think their little bundle of joy should be allowed anywhere, anywhen, anytime and that no never applies to them. It's pretty clear they were going to run this horse right up to the altar. NTA.`
// }, 
// {
// postId: 10,
// subreddit: 'DankMemes',
// user: "yangee_fat",
// timestamp: "March 45, 2978",
// upvotes: 65,
// body: `My dad passed away 2 weeks ago. Me, my wife 'Candace' and my daughter (16) 'Shiloh' and her stepsisters (19) & (17) flew to my hometown to attend the funeral. After that we got 2 hotel rooms (one for me and Candace, one for the girls).

// While I was in the room, I got a call from Shiloh at 11pm crying and sounded like she was arguing with her stepsisters. I asked what the matter was and she told me that her stepsisters insisted that she sleep on the floor (there were one large bed in the room and there was enough space for all 3 girls to sleep on). I asked why and she said she didn't know. I went to see what the issue was and talked with my stepdaughters about it. They kept talking but didn't really explain why they told her to sleep on the floor. They just shrugged and said "It's better this way...we're more comfortable this way..". I told Shiloh to grab her things and when one of my stepdaughters asked where we were going, I told her I was booking her a hotel room. Both looked upset but didn't say anything but they must've called their mom because she was awake when I got back and started arguing with me about giving Shiloh an entire hotel room for herself. I explained why I did it but she said I wasted money and that Shiloh could've sucked it up for one night on the floor. I called her unreasonable for saying this but she told me I showed the girls that I'm "playing favorites" and made my stepdaughters share a room while I gave my daughter and entire room for herself.

// We went home and Candace is still bringing it up saying I mishandled this. She even pointed out how my stepdaughters are upset since they're not speaking to me.
// `
// }, 
// {
// postId: 11,
// subreddit: 'AITA',
// user: "toast_lover42",
// timestamp: "November 4, 1973",
// upvotes: 2134,
// body: `asked why he wouldn't want me with him he said he felt more comfortable having privacy with his doctor. I jokingly asked if his doctor was a women and he glanced at me.

// I anticipated his next dr appointment and decided to go meet him there. He went and 10 minutes later I entered the office (I identified myself as his wife) and he was shocked when he saw me. I greeted his doctor (a man lol) and we talked but my husband refused to even look my way and refused to speak as well.

// We left the office together and he went off on me in the car saying I shouldn't have "followed" him and came into the dr office after he asked me for some privacy. I said it was alright I'm his wife I already even know what his issues are and just wanted to show support. He said I overstepped his one boundary and refused to respect his wish and made him more stressed than he already is in these hard times he's going through.`
// }, 
// {
// postId: 12,
// subreddit: 'ScottishPeopleTwitter',
// user: "BleachWizard420",
// timestamp: "June 19, 2018",
// upvotes: 7,
// body: `mother of triplets whom are only 2 months old. I never expected ever in my life that I'd be a mother to triplets so when I first became pregnant it was definitely the last thing in my mind.

// I'm home with my babies all day long and had to even transfer my education to online.

// Sometimes I just need some fresh air especially when I can't get them to stop crying and I find myself getting super frustrated to the point of tears, it's honestly soo hard and the dad isn't here to help as he's ether at work or at school. My fiance's (24) parents rented us a main floor apartment so when I step outside I'm literally just sitting on the chair right beside the door plus I have a baby monitor step up in their room and it has a camera on it I can literally see them and hear them so if anything happened I'd be able to quickly get to them.
// `
// }, 
// {
// postId: 13,
// subreddit: 'WhitePeopleTwitter',
// user: "light_happiness53",
// timestamp: "June 10, 2018",
// upvotes: 33900,
// body: `I (20) am a mother of triplets whom are only 2 months old. I never expected ever in my life that I'd be a mother to triplets so when I first became pregnant it was definitely the last thing in my mind.

// I'm home with my babies all day long and had to even transfer my education to online.

// Sometimes I just need some fresh air especially when I can't get them to stop crying and I find myself getting super frustrated to the point of tears, it's honestly soo hard and the dad isn't here to help as he's ether at work or at school. My fiance's (24) parents rented us a main floor apartment so when I step outside I'm literally just sitting on the chair right beside the door plus I have a baby monitor step up in their room and it has a camera on it I can literally see them and hear them so if anything happened I'd be able to quickly get to them.

// Being able to step outside for a few minutes to take a breather is really important to me because I start to have mini panic attacks when I can't get them to stop crying and I get really frustrated because I just feel super overwhelmed, Being able to go outside just gives me a chance to clam down.

// `
// }, 
// ]

//long overdue to start using mongodb with this project
const Body = () => {
  const[postsStub, setPostsStub] = useState([])
  useEffect(() => {
    //do a fetch for all of the posts in this subreddit
    async function getapi(url) {

        // Storing response
        const response = await fetch(url, {
            mode: "cors",
            headers: {"Content-Type": "application/json"}});
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        setPostsStub(data)
    }
    getapi(`http://localhost:9000/posts/ALL/`)
}, [])
    useEffect(() => {
        console.log(window.location.href)
    }, [])
  return (
    <div>
        <h1 style={{position: 'absolute', top: '50px', fontSize: '100px', left: '700px'}}>Home</h1>
        <div className='background' style={{position: 'relative'}}>
    {postsStub.map(function(post){
      return <Post key={post.postId} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body}/>
    })} </div>
  </div>
  )
}

export default Body