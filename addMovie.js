const addMovie = (name, image, review) => {
  const div = document.createElement('div');
  div.classList.add('card');

  div.innerHTML = `
    <img src="${image}" alt="${name}" />
    <span class="movie-title">&lt;${name}&gt;</span>
    <span class="movie-review">${review}</span>
    `;

  document.querySelector('#container').appendChild(div);

  const span = document.createElement('span');
  span.innerHTML = name;
  document.querySelector('#leftside').appendChild(span);
};

const addMovieHandle = event => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const image = document.getElementById('image').value;
  const review = document.getElementById('review').value;

  addMovie(name, image, review);
  closeModal();
};

document
  .getElementById('addMovieForm')
  .addEventListener('submit', addMovieHandle);
