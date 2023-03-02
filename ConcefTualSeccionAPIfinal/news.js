const getCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.data));
};
const displayCatagories = (catagories) => {
  // console.log(catagories);

  catagories.news_category.forEach((singleCategory) => { 
    // console.log(singleCategory);
    const { category_name, category_id } = singleCategory;

    const catagoriesContainer = document.getElementById("catagories-container");

    const p = document.createElement("p");
    p.innerHTML = `
        
        <a  class="nav-link" href="#" onclick="getCategoryNews('${category_id}','${category_name}')">${category_name}</a> 
        
        
        `;
    catagoriesContainer.appendChild(p);
  });
};
//  fetch category news

const getCategoryNews = (category_id, category_name) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAllNews(data.data, category_name));
  // console.log(url);
};
const showAllNews = (data, category_name) => {
  // console.log(data,category_name);
  document.getElementById("category-name").innerText = category_name;
  document.getElementById("items").innerText = data.length;

  const container = document.getElementById('all-news-container');
  container.innerHTML = '';
  data.forEach((singleNews) => {
    // console.log(singleNews);
const div = document.createElement('div');
div.classList.add('card','mb-3' );

const{image_url,title,details,total_view,_id} = singleNews;
div.innerHTML = `



        <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 d-flex flex-column">
                      <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${details.slice(1,150)}....</p>
                      
                      </div>

                      <div  class="card-footer border-0 bg-body d-flex justify-content-between">
                      <div class="d-flex gap-2 ms-3">
                      <div>  <img src="${singleNews.author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40">
                      <div>  <p  class="m-0 p-0" >${singleNews.author.name}</p>
                      <p  class="m-0 p-0">${singleNews.author.published_date}</p> </div>
                      
                      
                      </div>


                      
                      <div  class="d-flex align-items-center "> 
                      <i class="fas fa-eye"></i>
                      <p>${total_view}</P>
                      
                      
                      
                      
                      </div>
                      <div> <i class="fa-solid fa-star"></i>  </div> 
                      <div> 

                      <div>  <i class="fa-solid fa-arrow-right" onclick="fetchNewsDetails('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      </i> </div>
                      
                      </div>
                      
                      </div>
                      
                      

                    </div>
                  </div>
                </div>
                
                
`;
container.appendChild(div);
 });
};

const fetchNewsDetails=(news_id)=>{
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>showNewsDetails(data.data[0]))
};

const showNewsDetails = (showAllNews) =>{
  // console.log(showAllNews);
  showAllNews.forEach(showSingleNews => {
    console.log(showSingleNews);
    
  });

}

// getCatagories();
