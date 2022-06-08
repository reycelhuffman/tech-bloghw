const updateButtonHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');
  
    const title = document.querySelector('#post-title').value.trim();
    console.log(title);
    const post_contents = document.querySelector('#post-contents').value.trim();
    console.log(post_contents);
    // collect the post id from the URL
    const post_id = parseInt(document.location.pathname.split("/").slice(-2));
    console.log(post_contents);
  
    if (title && post_contents && post_id) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title,post_contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log(response);
      if (response.ok) {
        // console.log(response);
        document.location.replace('/profile');
      } else {
        alert('Failed to update this post');
      }
    }
  };
  
  document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateButtonHandler);

  document
    .querySelector('#updatePostBtn')
    .addEventListener('click', updateButtonHandler);
