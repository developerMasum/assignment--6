const loadPhone = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAll(data.data.tools.slice(0,6)));
}

const displayAll = (universes) => {
    const ContainerDiv = document.getElementById('card-container');
    ContainerDiv.innerHTML = '';
    universes.forEach(universe => {
        //   console.log(universe);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');

      const{image,name,published_in} = universe;

        cardDiv.innerHTML = `
        <div class="col">
                  <div class="card h-100">
                    <img src="${image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">Features</h2>
                      <p class="card-text"><ul>
                      <li>1.Natural language processing</li>
                      <li>2.Contextual understanding</li>
                      <li>3.Text generation</li>
                  </ul>
                  </p>
                    </div>
                    <div class="card-footer">
                     
                    <h2 class="">${name}</h2>
             <div class="d-flex justify-content-between">
               <div>
                 <p> <i class="fa-solid fa-calendar-days"></i> ${published_in} </p>
            </div>
                 <div>
            <i class="fa-solid fa-arrow-right" onclick="showAllUniverses()"></i>

         </div>
                 </div>

                    </div>
                  </div>
                </div>
        `;


        ContainerDiv.appendChild(cardDiv);
    });
};


const showAllUniverses = async()=>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);  
    const data = await res.json();
    displayAll(data.data.tools)
 };


loadPhone();


// modal started from here **-------------

const fetchDataDetail = (ai_id)=>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${ai_id}`;
    fetch(url);
    console.log(url);
};

