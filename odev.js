
window.mockApiUrl = "https://5ff38c3628c3980017b196ab.mockapi.io/pets/";
  
window.generateModal=(pet)=>{
return `<div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${pet.name}
        <p>${pet.description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
}

window.removePet = (id) => {
        fetch(`${window.mockApiUrl}${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(()=>window.location.reload())
};

window.openPetDetail = (id) => {
fetch(`${window.mockApiUrl}${id}`)
  .then(response => response.json())
  .then((data)=>{
    const petModalHtml=generateModal(data);
    document.querySelector("body").innerHTML+=petModalHtml;
    $(`#exampleModal${id}`).modal('show');
    document.querySelector(`.exampleModal${id}`)
    });
};
