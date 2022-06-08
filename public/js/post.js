const postHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');

    const title = document.querySelector('#post-title').value.trim();
    console.log(title);
    const post_contents = document.querySelector('#post-contents').value.trim();
    console.log(post_contents);

    if (title && post_contents) {
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, post_contents }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        console.log(response);
        document.location.replace('/profile');
    } else {
        alert('Failed to add post :(');
    }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', postHandler);
