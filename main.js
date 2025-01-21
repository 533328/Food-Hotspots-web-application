// Swiper 
var swiper = new Swiper(".HOME", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Search functionality
document.getElementById('search-button').onclick = function() {
  let query = document.getElementById('search-input').value.toLowerCase();
  let sections = document.querySelectorAll('section');

  sections.forEach(section => {
      if (section.id.toLowerCase().includes(query)) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  });
};

// Fetch data from the API
fetch('https://api.data.amsterdam.nl/dcatd/datasets/y5I1tIFyd9e8aA')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('data-list');
        data.forEach(location => {
            const listItem = document.createElement('li');
            listItem.textContent = location.name;
            dataList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  window.onscroll = () =>{
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
  }