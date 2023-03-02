const searchAllData = ()=>{
    const inputFieldValue = document.getElementById('inpur-field').value ;
    // console.log(inputField);
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputFieldValue}`;
    console.log(url);
    // const res = await fetch(url);
    // const data = await res.json();
    // console.log(data);

    fetch(url)
    .then((res) => res.json())
    .then((data)=>displayPlayers(data.player));
};

const displayPlayers =(players)=>{
    const playerContainer = document.getElementById('palyer-container');
    // console.log(players[0]);

    // player will be no repeat by (playerContainer.innerHTML).....=>
    playerContainer.innerHTML = '';

    // input field will be blank by using it **-*-*-* 
    document.getElementById('inpur-field').value = '';
    
    players.forEach(player => {
        console.log(player);
        //  dynamic value passing : sob aktar moddhe likhle bar bar korte hbe nah-- ${player.strPlayer} amon type..
        // in shorthand--
        const {strThumb , strPlayer,strNationality,idPlayer} = player;

        const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`
    <div class="card">
    <img src="${strThumb ?strThumb : "https://picsum.photos/200/300" }" class="card-img-top" alt="No photo found">
    <div class="card-body">
      <h5 class="card-title"> ${strPlayer}</h5>
      <p class="card-text">Nationality: ${strNationality}</p>

      <button onclick="singlePlayer('${idPlayer}')" type="button" class="btn btn-info">Details</button>
      <button type="button" class="btn btn-warning">Delete</button>
    </div>
  </div>
    
    
    
    
    `;

    playerContainer.appendChild(div);
    
 });
   

};

const singlePlayer = (id) =>{
  // console.log(id);
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;

  fetch(url)
  .then(res=>res.json())
  .then (data=>showSinglePlayerDetails(data.players[0]));


};

const showSinglePlayerDetails = (data)=>{
  console.log(data);
  const container = document.getElementById('single-player-details');
  const div = document.createElement('div');

  const {strThumb,strDescriptionEN,strPlayer,strWeight
  } = data;
  div.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb ? strThumb : "https://picsum.photos/200"}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <h6> Weight :${strWeight}</h6>
        <p class="card-text">${strDescriptionEN.slice(0,100)}..... </p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  
  
  
  `;
  container.appendChild(div);
}






// searchAllData(messi);