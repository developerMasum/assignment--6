const loadCountries = async () => {
  const url = `https://restcountries.com/v3.1/all`;
  const res = await fetch(url); 
  const data = await res.json();
  // data.slice(0,9) used for to show 9 data , for showmore button --

  displayCountries(data.slice(0,9));
};
const displayCountries = (countries) => {
  const container = document.getElementById("container");
  // console.log(countries);
  // just make this blank for reagin show data in showAll data
  container.innerHTML = '';
  countries.forEach((country) => {
    console.log(country);
    const countryDiv = document.createElement("div");
    
    
    countryDiv.innerHTML = `
        
        <div class="card w-full bg-base-100 shadow-xl">
                <figure><img src="${country.flags.png}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title"> Country:
                   ${country.name.common}
                    <div class="badge badge-secondary">country </div>
                  </h2>
                  <p> Population: ${country.population}</p>
                  
                  <button  onclick="showDetails('${country.cca2}')" id="btn-details" class="btn gap-2">
                  Details
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                 </button>
                </div>
              </div>
              
        
        `;
    container.appendChild(countryDiv);
  });
};

// const showDetails =async (id)=>{
//     const url = `https://restcountries.com/v3.1/alpha/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data) 
// }
loadCountries();

//  show all data or countries for this ** --------- 

const showAllCountries = async()=>{
  const url = `https://restcountries.com/v3.1/all`;
  const res = await fetch(url);  
  const data = await res.json();
displayCountries(data);
  

}



