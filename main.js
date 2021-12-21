(function appendNode(){
  const btn = document.querySelector(".btn__primary")
  btn.addEventListener("click", () => {
  
  const expDescrip = document.getElementById("expense__name")
  const area = document.querySelector(".entry__name");
  const node = document.createElement("li");
  node.innerText = expDescrip.value;
  area.appendChild(node);
  expDescrip.value = ''; 
  //date
  const dateDescrip = document.getElementById("expense__date");
  const area2 = document.querySelector(".entry__date");
  const node2 = document.createElement("li");
  node2.innerText = dateDescrip.value;
  area2.appendChild(node2)
  dateDescrip.value = '';
  //amount
  const amountDescrip = document.getElementById("expense__amount");
  const area3 = document.querySelector(".entry__amount");
  const node3 = document.createElement("li");
  node3.innerText =amountDescrip.value;
  area3.appendChild(node3);
  amountDescrip.value = ''; 
  })
})()
