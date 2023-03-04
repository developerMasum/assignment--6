const loadAllAiUniverse = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAll(data.data.tools.slice(0, 6)));
};

const displayAll = (universes) => {
  console.log(universes[0].published_in);




  

  const containerDiv = document.getElementById("card-container");
  containerDiv.innerHTML = "";
  universes.forEach((universe) => {
    // console.log(universe.features[0]);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");


    

    const { image, name, published_in, id } = universe;

    cardDiv.innerHTML = `
        <div class="col">
                  <div class="card h-100">
                    <img src="${image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">Features</h2>
                      <p class="card-text">
                      <ol>
                      <li>${universe.features[0]}</li>
                      <li>${universe.features[1]}</li>
                      <li>${universe.features[2]} </li>
                  </ol>
                  </p>
                    </div>
                    <div class="card-footer">
                     
                    <h2 class="">${name}</h2>
             <div class="d-flex justify-content-between">
               <div>
                 <p> <i class="fa-solid fa-calendar-days"></i> ${published_in} </p>
            </div>
                 <div>
            <i class="fa-solid fa-arrow-right" onclick="fetchDataDetail('${id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

         </div>
                 </div>

                    </div>
                  </div>
                </div>
        `;

    containerDiv.appendChild(cardDiv);
  });
};

// show all bepar separ and  button for all data 

const showAllUniverses = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayAll(data.data.tools);
 
  const button = document.getElementById("button-all");
  toggleLoader(true);
  

  button.classList.add("d-none");
};
//  toggle loader ---

const toggleLoader = isLoading =>{
  const loader = document.getElementById('loader');
  if (isLoading) {
    loader.classList.remove('d-none')
    
  }

}

loadAllAiUniverse();
//  hide this spinner ----


// modal started from here **-------------

const fetchDataDetail = (ai_id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${ai_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDataDetails(data.data));
  //    console.log(url);
};
const displayDataDetails = (details) => {
  console.log(details);
  // const title = document.getElementById('description');
  // title.innerText = details.description;

  const fullContainer = document.getElementById("container-all");
  const score = details.accuracy.score;
  const number =score * 100;
  

  // console.log(number);
  // const div = document.createElement('div');
  // div.classList.add('d-flex text-center')
  fullContainer.innerHTML = `
  
  
  <div class="d-flex gap-2 justify-content-between  ">
  <div class="col-col h-100 w-100 border border-danger  ">
    <div class="card">
      <div class="card-body">
       <div> <p> ${details.description}</p> </div>

       <div class="d-flex">
       <div class=" bg-light me-3 text-danger ">
         <p>${details.pricing[0].price==='no cost'|| '0' ? "Free Of Costs": details.pricing[0].price}</p>
        </div> 
       <div class=" bg-light me-3 text-success ">
       <p>${details.pricing[1].price==='no cost' || '0' ? "Free Of Costs": details.pricing[0].price}</p>
        </div> 
       <div class=" bg-light me-3 text-warning  ">
       <p>${details.pricing[2].price ? details.pricing[2].price : "Free Of Costs"}</p>
        </div> 

     </div>


     <div class="d-flex align-items-center justify-content-between">
     <div>
         <h3>Feature </h3>
         <ul>
             <li>${details.features['1'].feature_name}</li>
             <li>${details.features['2'].feature_name}</li>
             <li>${details.features['3'].feature_name}</li>
         </ul>
     </div>
     <div>
         <h3>Integration</h3>
         <ul>
             <li>${ details.integrations[0]}</li>
             <li>${details.integrations[1] ? details.integrations[1]:'No data found'}</li>
             <li>${details.integrations[2] ? details.integrations[2]:'No data found'}</li>
         </ul>
     </div>
 
 
 
 </div>
       
      </div>
    </div>
  </div>
  <div class="col-col h-100 w-100">
    <div class="card">
      <img src="${
        details.image_link ? details.image_link[0] : "No image found"
      }"  class="img-fluid "  alt="...">  
      
      <div id="accuracy" class="text-end ">
     <span class="badge text-bg-warning">${number? number+'% accuracy': ''}</span>

      </div>
      <div class="card-body">
        <h5 class="card-title">${details.input_output_examples[0].input} </h5>
        <p class="card-text">${details.input_output_examples[0].output}</p>
      </div>
    </div>
  </div>
  
 

  
  
  `;
};




fetchDataDetail();



//  sort ar kaj baj === 



