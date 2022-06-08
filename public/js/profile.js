const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const EditPostBtnHandler = async (event) => {
  const id = event.target.getAttribute('data-id');

  await document.location.replace(`/post/${id}/edit`);
  
};

function initializedEventListeners() {
  let deleteButtons = document.querySelectorAll('.deletePostBtn');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", delButtonHandler);
  }

  let editButtons = document.querySelectorAll('.editPostBtn');

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", EditPostBtnHandler);
  }


}

initializedEventListeners();
