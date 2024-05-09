// liste des produits
let list = [
  {
    id: 0,
    nom: "Rayonni Blanc",
    image: "img2.png",
    prix: "25000",
  },
  {
    id: 1,
    nom: "Rayonni Noir",
    image: "img5.png",
    prix: "25000",
  },
  {
    id: 2,
    nom: "Rayonni Rose",
    image: "img17.png",
    prix: "20000",
  },
  {
    id: 3,
    nom: "Rayonni Bleu",
    image: "img14.png",
    prix: "20000",
  },
  {
    id: 4,
    nom: "Rayonni BlancNoir",
    image: "img8.png",
    prix: "30000",
  },
];

let content = document.querySelector("#content");
let countPanier = document.getElementById("countPanier");
let toggle_shadow = document.querySelector(".toggle-shadow");
let modal = document.querySelector(".modal");
let modalUl = document.querySelector(".modal ul");
let istrue = false;
let total = 0;

list.forEach((element, index) => {
  content.innerHTML +=
    ` 
    
    <div style="padding: 2px; border: 1px solid gray; width: 300px; height: 250px; margin: 0 10px 10px 0 ; display: flex; flex-direction: column; justify-content: space-between; border-radius: 10px;">
                <div style="background-image:url('` +
    element.image +
    `'); background-position: center; width: 100%; height: 100%; background-size: contain;   background-repeat:no-repeat">
                    
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 10px 10px;">
                  <div>
                    <label for="">` +
    element.nom +
    `</label> : <span style="font-weight:bold;color:#111;">` +
    element.prix +
    ` Fcfa</span>
                  </div>
    <div style="display:flex;align-items:center;">
                    <svg xmlns="http://www.w3.org/2000/svg" onclick="likearticle(this)" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                    <button onclick="addPanier(` +
    index +
    `)" 
    style="font-size: 18px; font-weight: bold; border: none; box-shadow: 0 2px 5px 0 grey; cursor: pointer; margin-left:10px;" id=" ` +
    element.id +
    ` ">
                            +
                    </button>
    </div>
                </div>
           </div>`;
});

let index = 0;

function addPanier(idx) {
  index += 1;

  countPanier.innerHTML = index;
  total += parseInt(list[idx].prix);
  document.querySelector("#total").innerHTML = total;

  modalUl.innerHTML +=
    `
  <li style="display: flex; justify-content: space-between;align-items: center; background-color: rgb(249, 247, 247); padding: 3px;" id="ligne` +
    list[idx].id +
    `">
  <div style"display:flex;align-items:center;">
      <img src="` +
    list[idx].image +
    `" alt="" style="width:30px;height:30px;">
     <span style="font-weight: bold;">` +
    list[idx].nom +
    `</span> : 
    <span style="font-weight:bold;">` +
    list[idx].prix +
    ` Fcfa</span> 
  </div>
  <div>
      <button style="border: none;outline: none;padding: 5px;font-weight: bold;font-size: 14px;box-shadow: 0 2px 3px 0 gray;" onclick="removearcticle(` +
    list[idx].id +
    `)"
    ">-</button>
  </div>
</li>
    `;
}

function openPanier() {
  modal.classList.remove("modal_none");
  toggle_shadow.classList.remove("modal_none");
}

function closeModal() {
  modal.classList.add("modal_none");
  toggle_shadow.classList.add("modal_none");
}

function removearcticle(elmid) {
  document.querySelector("#ligne" + elmid + "").remove();
  index -= 1;
  total -= parseInt(list[elmid].prix);
  document.querySelector("#total").innerHTML = total;

  countPanier.innerHTML = index;
}
function likearticle(arg) {
  istrue = !istrue;
  if (istrue) {
    arg.style.color = "red";
  } else arg.style.color = "grey";
}
