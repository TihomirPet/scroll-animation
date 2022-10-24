import supabase from './supabaseClient';

 export default async function detailGallery() {


  let { data: gallery, error } = await supabase.from('gallery').select('*');

  if (error) {
    throw new Error(error);
  }

 

  let contentD = `  


  ${gallery.map(
    (element) =>
      `


    <form method="get" action="/Details/detail.html">

    <div class="border test" id="">
     <button  type="submit">
      <h2  type="text" name="title-detail"   value="${element.title}"/>${element.title}</h2>
    
     <img  src="/public/images/${element.image}" height="200" />
     <input  type="text" name="id"  value="${element.id}"/>
     </button>


     </div>
    

   </form>
    


     `
  )}
  

  
  `;

  let p = document.getElementById('gallery');
  p.insertAdjacentHTML('beforeend', contentD);




}
window.addEventListener('load', () => {
  let params = new URL(document.location).searchParams;

  const idDetail = params.get('id');
  //  const title = params.get('title-detail');

  document.getElementById('result').innerHTML = idDetail;
  //  document.getElementById('result-title').innerHTML = title;

  //  let output = window.location.search;
  //  alert(output);
});