const handleCommentSubmission = async (event) => {
    try {
        event.preventDefault();

        const contentField = document.querySelector("#comment-content");
        const content = contentField?.value?.trim();

        if (!content) {
            return; 
        }

        const postID = document.location.pathname.split("/").at(2);

        const response = await fetch(`/api/comments/`, {
            method: "POST",
            body: JSON.stringify({ content, post_id: postID }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            throw new Error("Failed to post comment");
        }
    } catch (error) {
        alert(error.message);
    }
};

document
    .querySelector(".new-comment-form")
    .addEventListener("submit", handleCommentSubmission);
