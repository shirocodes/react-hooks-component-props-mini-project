import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  //helper func to get the emoji string
  function renderEmoji(minutes) {
    let emoji = ""
    if(minutes < 30) {
        const cups = Math.ceil(minutes/5);
        emoji ="☕️".repeat(cups)
    }else {
        const bent = Math.ceil(minutes/10)
        emoji = "🍱".repeat(bent)
    }
    return `${emoji} ${minutes} min read`
  }
  
    return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderEmoji(minutes)}</p>
    </article>
  );
}

export default Article;
