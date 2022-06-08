const postHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');

    const title = document.querySelector('#post-title').value.trim();
    console.log(title);
    const content = document.querySelector('#post-contents').value.trim();
    console.log(content);

    if (title && content) {
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
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
