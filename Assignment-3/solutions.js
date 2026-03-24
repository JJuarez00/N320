// ============================================================
//  solutions.js — SnapGrid Social Media Dashboard
//  Assignment 3: JavaScript DOM Manipulation & Event Handling
//
//  Name:   JOSEPH JUAREZ
//  Date:   MARCH 23, 2026
// ============================================================
//
//  INSTRUCTIONS:
//  • Write all your code in this file — do not modify index.html or styles.css
//  • Test each task in the browser before moving on
//  • Recommended order: Tasks 1 → 2 → 4 → 3 → 5
//    (Task 3's Post Composer calls Task 4's attachLikeListeners(),
//     so it helps to have Task 4 written first)
// ============================================================















// TASK 1 - Dark / Light Mode Toggle

//  1. First step is to select: #themeToggleBtn #themeIcon and #themeLabel
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

//  2. Next, we declare a variable to track the current theme state
let isDark = true;

//  3. Add a 'click' event listener to the theme toggle button
themeToggleBtn.addEventListener('click', () => { // 4. Inside the listener

    //  a. Flip isDark using !isDark
    isDark = !isDark;
    
    //  b. If isDark is TRUE
    if (isDark) {

        // DEBUGGING-MSG
            console.log(" DARK MODE ")

        //  set the theme to dark
        document.documentElement.setAttribute('data-theme', 'dark');

        //  Set #themeIcon text to '🌙'
        themeIcon.textContent = '🌙';

        //  Set #themeLabel text to 'Dark Mode'
        themeLabel.textContent = 'Dark Mode';

    } else { //  c. If isDark is now false

        // DEBUGGING-MSG
            console.log(" LIGHT MODE ")
        
        //  Set data-theme attribute to 'light'
        document.documentElement.setAttribute('data-theme', 'light');
        
        //  Set #themeIcon text to '☀️'
        themeIcon.textContent = '☀️';

        //  Set #themeLabel text to 'Light Mode'
        themeLabel.textContent = 'Light Mode';
    }

});















// TASK 2 - Follow / Unfollow with Live Counter

//  1. Select #followBtn, #followBtnText, and #followerCount
const followBtn = document.getElementById('followBtn');
const followBtnText = document.getElementById('followBtnText');
const followerCount = document.getElementById('followerCount');

//  2. Declare
let isFollowing = false;
let followers = 1284;

//  3. Add a 'click' event listener to #followBtn
followBtn.addEventListener('click', () => {  //  4. Inside the listener
    //  a. Flip isFollowing
    isFollowing = !isFollowing;

    //  b. If now following
    if (isFollowing) {

        // DEBUGGING-MSG
        console.log("FOLLOWING")

        //  followers++
        followers++;

        //  Set #followBtnText to '✅ Following'
        followBtnText.textContent = 'Following'; 

        //  Add class 'following' to #followBtn
        followBtn.classList.add('following');  //  Basically used to style the button differently when following.


    } else { //  c. If now unfollowed

        // DEBUGGING-MSG
        console.log("UNFOLLOWING")
        
        //  followers--
        followers--;

        //  Set #followBtnText to '+ Follow'
        followBtnText.textContent = '+ Follow';

        //  Remove class 'following' from #followBtn
        followBtn.classList.remove('following');  //  Basically used to style the button differently when unfollowing.

    }

    //  d. In both cases In both cases, update #followerCount.textContent to followers.toLocaleString()
    
    //      This updates the follower count display with the new number of followers.
    //      toLocaleString() formats the number with commas for thousands (e.g. I click '+ Follow' the number will not have a comma).
    
    //      Testing this code:
    //      Without this code, if I click on '+ Follow' the FOLLOWERS count will not update.
    //      With the code, the  FOLLOWERS count will update from 1,284 to 1,285
    followerCount.textContent = followers.toLocaleString();

});















// TASK 3 — Live Post Composer (SKIP THIS, COMPLETE TASK 4, AND RETURN TO THIS TASK)

//  1. Select #composerTextarea, #charCounter, #postBtn, #postFeed, and #postCount
const composerTextarea = document.getElementById('composerTextarea');
const charCounter = document.getElementById('charCounter');
const postBtn = document.getElementById('postBtn');
const postFeed = document.getElementById('postFeed');
const postCount = document.getElementById('postCount');

//  2. Add an 'input' event listener to #composerTextarea
composerTextarea.addEventListener('input', () => {

    //  a. remaining =  280 - composerTextarea.value.length
    const remaining = 280 - composerTextarea.value.length;

    //  b. Update #charCounter text to "X characters remaining" 
    charCounter.textContent = remaining + ' characters remaining';

    //  c. If remaining < 20
    if (remaining < 20) {
        // add class 'counter-warning' to #charCounter
        charCounter.classList.add('counter-warning')
    } else { 
        // otherwise remove it
        charCounter.classList.remove('counter-warning');
    }

    // d. Disable #postBtn if textarea value is empty (after trim); enable it otherwise
    //    I tested this, basicallly you can't post spaces, only text.
    postBtn.disabled = composerTextarea.value.trim() === '';
});

//  3. Add a 'click' event listener to #postBtn:
postBtn.addEventListener('click', () => {

    //  a. Get postText = composerTextarea.value.trim()
    const postText = composerTextarea.value.trim()

    // EXTRA STEP TO MAKE #hashtag STYLING WORK. Convert any #hashtag into a styled span
    const formattedText = postText.replace(/#\w+/g, '<span class="post-tag">$&</span>');
    
    //  b. Create a new <article> element (document.createElement)
    const newPost = document.createElement('article');

    //  Add classes:  post-card  new-post
    newPost.classList.add('post-card', 'new-post');

    //  EXTRA STEP FOR FILTERING. Extract hashtags from the post text
    const hashtagMatches = postText.match(/#\w+/g);
    const tagString = hashtagMatches ? hashtagMatches.join(' ') : '';

    //  Set data-tags attribute (extract hashtags from text or leave '')
    // newPost.setAttribute('data-tags', '') OLD VERSION
    newPost.setAttribute('data-tags', tagString);


    //  c. Set its innerHTML using the template from the task instructions
    newPost.innerHTML = `
            <div class="post-header">
            <div class="post-avatar">🧑‍💻</div>
                <div class="post-meta">
                    <span class="post-author">Alex Rivera</span>
                    <span class="post-time">Just now</span>
                </div>
            </div>
            <p class="post-body">${formattedText}</p>

            <div class="post-actions">
                <button class="like-btn" data-liked="false">
                    <span class="like-icon">🤍</span>
                    <span class="like-count">0</span>
                </button>
            </div>
            `;
    
    //  d. Add to the top of the feed
    postFeed.prepend(newPost);

    //  e. Call attachLikeListeners() so the new heart button works
    attachLikeListeners();

    //  f. When the post is pushed, reset the:
    //  textarea, counter text, remove counter-warning, and disable the post button.
    composerTextarea.value  = '';
    charCounter.textContent = '280 characters remaining';
    charCounter.classList.remove('counter-warning');
    postBtn.disabled = true;

    //  g. Increment and update #postCount
    postCount.textContent = parseInt(postCount.textContent) + 1;

    // EXTRA. 
    // Programmatically click the pill.addEventListener() as I set up the 'click' listener. 
    // This re-runs the Task 5 filter logic, and re-counts all visible posts including the new one, and updates the result message.
    const activePill = document.querySelector('.tag-pill.active');
    activePill.click(); 
    
});















//  TASK 4 - Like / Unlike Posts

//  1. Define:  function attachLikeListeners() {...}
function attachLikeListeners() {
    
    //  a. Select all .like-btn elements
    const likeBtn = document.querySelectorAll('.like-btn');

    //  b. Loop with forEach
    likeBtn.forEach(function(btn) {
        //  c. For each btn, clone it to remove old listeners
        //  https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
        const fresh = btn.cloneNode(true);
        btn.parentNode.replaceChild(fresh, btn);

        //  d. Add a 'click' listener to 'fresh'
        fresh.addEventListener('click', ()=> {
            //  Read liked state
            //  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
            const alreadyLiked = fresh.getAttribute('data-liked') === 'true';

            //  Get count from .like-count span inside the button (parseInt)
            const likeIconSpan  = fresh.querySelector('.like-icon');
            const likeCountSpan = fresh.querySelector('.like-count');
            let count = parseInt(likeCountSpan.textContent);

            //  If alreadyLiked
            if (alreadyLiked) {

                // DEBUGGING-MSG
                    console.log("POST UN-LIKED")

                //  set data-liked to 'false', remove class 'liked',
                fresh.setAttribute('data-liked', 'false');
                fresh.classList.remove('liked');

                //  icon → '🤍', count - 1
                likeIconSpan.textContent  = '🤍';
                likeCountSpan.textContent = count - 1;
            } else {
                
                // DEBUGGING-MSG
                    console.log("POST LIKED")

                //  set data-liked to 'true', add class 'liked',
                fresh.setAttribute('data-liked', 'true');
                fresh.classList.add('liked');

                //  icon → '❤️', count + 1
                likeIconSpan.textContent  = '❤️';
                likeCountSpan.textContent = count + 1;
            };

            // Call updateTotalLikes()
            updateTotalLikes();

        });
    });
}


//  3. Define: function updateTotalLikes() {...}
function updateTotalLikes() {


    //  a. Count all .like-btn[data-liked="true"] elements
    const likedPosts = document.querySelectorAll('.like-btn[data-liked="true"]');

    //  b. Update #totalLikedCount with that number
    const totalLikedCount = document.getElementById('totalLikedCount');

    //  Used the same logic when it came to updating followers but replaces toLocaleString() w/ length.
    //  This updates the '❤️ YOUR LIKES' section.
    totalLikedCount.textContent = likedPosts.length;

    // DEBUGGING-MSG
        console.log("UPDATED TOTAL LIKES:", likedPosts.length, likedPosts);
}


//  4.  Call attachLikeListeners() at the bottom of this section to wire up the initial posts.
attachLikeListeners();















//  TASK 5 — Hashtag Filter

//  1. Select all .tag-pill elements and #filterResultMsg
const tagPill = document.querySelectorAll('.tag-pill');
const filterResultMsg = document.getElementById('filterResultMsg');


//  2. Loop through the pills with forEach and add a 'click' listener to each
tagPill.forEach(function(pill) {
    pill.addEventListener('click', () => {
        //  3. Inside the listener:

        //  a. Remove class 'active' from ALL pills, then add it to the clicked one only
        tagPill.forEach(pill => pill.classList.remove('active'));
        pill.classList.add('active');
        
        //  b. Get the tag: pill.getAttribute('data-tag')
        const tag = pill.getAttribute('data-tag');

        //  c. Get all .post-card elements inside #postFeed
        //     Use Array.from() so you can use .filter() later
        const posts = Array.from(document.querySelectorAll('#postFeed .post-card'));
        
        //  d. Loop through posts:
        posts.forEach(post => {
            //   If tag === 'all': remove class 'hidden' from every post
            if (tag === 'all') {
                post.classList.remove('hidden');
            } else {
                //   Otherwise: check if post's data-tags includes(tag)
                const postTags = post.getAttribute('data-tags') || '';
                if (postTags.includes(tag)) {
                    //  yes -> remove 'hidden'
                    post.classList.remove('hidden');
                } else {
                    //  no  -> add 'hidden'
                    post.classList.add('hidden');
                }
            }
        });

        //  e. Count visible posts:
        const visibleCount = posts.filter(post => !post.classList.contains('hidden')).length;

        //  f. Update #filterResultMsg:

        //  'all' tag   → "Showing all X posts"
        if (tag === 'all') {
            filterResultMsg.textContent = `Showing all ${visibleCount} posts`;
        } else {
            //  other tags  → "X post(s) tagged #tagname"
            filterResultMsg.textContent = `${visibleCount} post(s) tagged ${tag}`;
        }
    });
});
