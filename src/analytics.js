export function twitterClicked(){
  return window.hasOwnProperty("umami") && window.umami("twitter-clicked");
}

export function instagramClicked(){
  return window.hasOwnProperty("umami") && window.umami("instagram-clicked");
}

export function githubClicked(){
  return window.hasOwnProperty("umami") && window.umami("github-clicked");
}

export function behanceClicked(){
  return window.hasOwnProperty("umami") && window.umami("behance-clicked");
}

export function darkmodeOn(){
  return window.hasOwnProperty("umami") && window.umami("darkmode-on");
}

export function projectsOpen(){
  return window.hasOwnProperty("umami") && window.umami("projects-open");
}

export function contactsOpen(){
  return window.hasOwnProperty("umami") && window.umami("contacts-open");
}

export function postsOpen(){
  return window.hasOwnProperty("umami") && window.umami("posts-open");
}