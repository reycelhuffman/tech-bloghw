
const CommentAddHandler = async (event) => {
    event.preventDefault();
    const comment_contents = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('input[name="post-id"]').value;
    console.log(post_id)
    if (comment_contents && post_id)  {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_contents, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

document
  .querySelector('#addCommentBtn')
  .addEventListener('click', CommentAddHandler);

