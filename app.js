let menuList = document.getElementById("menuList")

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
  </li>
  `

  menuList.insertAdjacentHTML('beforeend', menuItem)
}
