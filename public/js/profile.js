
const handleNewPost = async (event) => {
  try {
      event.preventDefault();

      const nameField = document.querySelector('#post-name');
      const contentField = document.querySelector('#post-content');

      const name = nameField?.value?.trim();
      const content = contentField?.value?.trim();

      if (!name || !content) {
          return; 
      }

      const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({ name, content }),
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          document.location.replace('/profile');
      } else {
          throw new Error('Failed to create project');
      }
  } catch (error) {
      alert(error.message);
  }
};


const handleDeletePost = async (event) => {
  try {
      if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');

          const response = await fetch(`/api/posts/${id}`, {
              method: 'DELETE',
          });

          if (response.ok) {
              document.location.replace('/profile');
          } else {
              throw new Error('Failed to delete post');
          }
      }
  } catch (error) {
      alert(error.message);
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', handleNewPost);

document
  .querySelector('.post-list')
  .addEventListener('click', handleDeletePost);
