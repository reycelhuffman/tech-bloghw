const addCommentBtnHandler = async (event) => {
    const id = event.target.getAttribute('data-id');
    console.log(id)
    await document.location.replace(`/post/${id}/comment`);
};

function initializedEventListeners() {
    let editButtons = document.querySelectorAll('#addCommentBtn');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", addCommentBtnHandler);
    }
}

initializedEventListeners();