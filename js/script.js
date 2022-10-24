
export  function el(css) {
    return document.querySelector(css);
  }

export  function create(html) {
    return document.createElement(html);
  }

export default function loadImages() {
  for (let i = 1; i <= 18; i++) {
    let img = create('img');
    img.src = `/util/img/_DSC_${i}.JPG`;
    img.className = 'rot';
    img.setAttribute('id', ` img ${i}`);

    el('#content').appendChild(img);

    console.log(img);
  }
}


