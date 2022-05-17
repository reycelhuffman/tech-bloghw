const updateButtonHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');

    const title = document.querySelector('#post-title').value.trim();
    console.log(title);
    const content = document.querySelector('#post-contents').value.trim();
    console.log(content);
    // collect the post id from the URL
    const post_id = parseInt(document.location.pathname.split("/").slice(-2));
    console.log(content);

    if (title && content && post_id) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
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


















