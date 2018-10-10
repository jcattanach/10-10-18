let starterList = document.getElementById("starterList")
let entreeList = document.getElementById("entreeList")
let dessertList = document.getElementById("dessertList")

for(let i = 0;i < dishes.length; i++) {
  let dish = dishes[i]

  let menuItem = `
  <li class="listItem">
    <img src="${dish.imageURL}" />
    <div>
      <label><u>${dish.title}</u></label>
      <p>${dish.description}</p>
    </div>
    <label id="price">${dish.price}</label>
  </li>`
  
  if(dish.course == "Starters") {
    starterList.insertAdjacentHTML('beforeend', menuItem)
  } else if(dish.course == "Entrees"){
    entreeList.insertAdjacentHTML('beforeend', menuItem)
  } else if(dish.course == "Desserts"){
    dessertList.insertAdjacentHTML('beforeend', menuItem)
  }
}
