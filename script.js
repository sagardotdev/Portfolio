function showSidebar(){
  const sidebar = document.querySelector('#sidebar')
  sidebar.style.display = 'flex';
}

function hideSidebar(){
  const sidebar = document.querySelector('#sidebar')
  sidebar.style.display = 'none';
}


const images = document.querySelectorAll('.floating-img');
const container = document.querySelector('.image-container');

function getRandomPosition() {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const x = Math.floor(Math.random() * (containerWidth - 70)); 
  const y = Math.floor(Math.random() * (containerHeight - 50)); 
  return { x, y };
}

function moveImages() {
  images.forEach(img => {
    const { x, y } = getRandomPosition();
    img.style.transform = `translate(${x}px, ${y}px)`; // Move the image to the random position
  });
}

setInterval(moveImages, 2000);


