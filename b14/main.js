
let listSection = document.querySelectorAll('[id*="section-"]')
let listColor = ["#E52B50", "#FFBF00", "#9966CC", "#FBCEB1", "#7FFFD4", "#007FFF", "#89CFF0", "#F5F5DC", "#CB4154", "#000000", "#0000FF", "#0095B6", "#8A2BE2", "#DE5D83", "#CD7F32", "#964B00", "#800020", "#702963", "#960018", "#DE3163", "#007BA7", "#F7E7CE", "#7FFF00", "#7B3F00", "#0047AB", "#6F4E37", "#B87333", "#FF7F50", "#DC143C", "#00FFFF", "#EDC9Af", "#7DF9FF", "#50C878", "#00FF3F", "#FFD700", "#808080", "#008000", "#3FFF00", "#4B0082", "#FFFFF0", "#00A86B", "#29AB87", "#B57EDC", "#FFF700", "#C8A2C8", "#BFFF00", "#FF00FF", "#FF00AF", "#800000", "#E0B0FF", "#000080", "#CC7722", "#808000", "#FF6600", "#FF4500", "#DA70D6", "#FFE5B4", "#D1E231", "#CCCCFF", "#1C39BB", "#FD6C9E", "#8E4585", "#003153", "#CC8899", "#800080", "#E30B5C", "#FF0000", "#C71585", "#FF007F", "#E0115F", "#FA8072", "#92000A", "#0F52BA", "#FF2400", "#C0C0C0", "#708090", "#A7FC00", "#00FF7F", "#D2B48C", "#483C32", "#008080", "#40E0D0", "#3F00FF", "#7F00FF", "#40826D", "#FFFFFF", "#FFFF00"]

for (let index = 0; index < listSection.length; index++) {
  let section = listSection[index];
  let randomIdx = Math.floor(Math.random() * listColor.length)
  section.innerHTML = `<h1>Section ${index + 1}</h1>`
  section.style.height = '600px';
  section.style.backgroundColor = listColor[randomIdx];
}



// let listNavItem = document.querySelectorAll('.nav-item p');
let listNavItem = document.querySelectorAll('a[href*="#"]');


listNavItem.forEach((navItem) => {
  navItem.addEventListener('click', function(evt) {
    evt.preventDefault();

    let aElement = this;
    let dataSectionId = aElement.getAttribute('href')

    let sectionTarget = document.querySelector(dataSectionId);
    let menuElement = document.querySelector('.navbar');
    let domRect = sectionTarget.getBoundingClientRect();
    let menuDomRect = menuElement.getBoundingClientRect();
    let x = domRect.top + window.scrollY;

    window.scrollTo({
      top: x - menuDomRect.height,
      left: 0,
      behavior: 'smooth'
    });
  })
})

// for (let index = 0; index < listNavItem.length; index++) {
//   let navItem = listNavItem[index];
//   navItem.addEventListener('click', function (evt) {
//     let pElement = this;
//     let dataSectionId = pElement.getAttribute('data-section-id')

//     let sectionTarget = document.querySelector(dataSectionId);
//     let domRect = sectionTarget.getBoundingClientRect();
//     let x = domRect.top + window.scrollY;

//     window.scrollTo({
//       top: x,
//       left: 0,
//       behavior: 'smooth'
//     });
//   })
// }


/*
https://vi.wikipedia.org/wiki/T%E1%BB%89nh_th%C3%A0nh_Vi%E1%BB%87t_Nam
Array.from(document.querySelectorAll('.wikitable tbody tr td:nth-child(5)'))
    .map(function(col) {
        return col.innerText
    })
    .map(function(stringNumber) {
        return stringNumber.split('.').join('')
    })
    .map(function(stringNumber) {
        return Number(stringNumber.split(',').join('.'))
    })
    .filter(function(number) {
        if (number > 100000) {
            return true;
        }
        return false;
    })
*/

/*
Array
    .from(document.querySelectorAll('.wikitable tbody tr td:nth-child(5)'))
    .map(function(col) {
        var strNumber = col.innerText;
        var number =  strNumber.split('.').join('')
        return Number(number.split(',').join('.'))
    })
    .filter(function(number) {
        if (number > 100000) {
            return true;
        }
        return false;
    })
*/


document
  .querySelector('#back-to-top')
  .addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })