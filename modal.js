document.getElementById('modal').style.display = 'none';

document.getElementById('addMovie').onclick = () => {
  document.getElementById('modal').style.display = 'block';
};

document.getElementById('closeModal').onclick = () => {
  document.getElementById('modal').style.display = 'none';
};

const closeModal = () => {
  document.getElementById('modal').style.display = 'none';
};
