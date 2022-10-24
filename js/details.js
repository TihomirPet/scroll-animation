import supabase from './supabaseClient';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


let baseUrl = window.location.href; // You can also use document.URL
let koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
console.log(koopId); //503









export async function readGallery() {
  let { data: element, error } = await supabase
    .from('gallery')
    .select('*,images(*)')
    .eq('id', koopId)
    .single();
  if (error) {
    throw new Error(error);
  }

  console.log(element);

  let content = `  


  ${element.images.map(
    (el) =>
      `

     <img  src="/public/images/${el.image}"  class="details-img"/>
  

     `
  )}
  

  
  `;

  let parent = document.getElementById('galleryD');
  parent.insertAdjacentHTML('beforeend', content);
}



