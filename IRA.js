let Data_IRA = 'IRA_Data.json'
async function IRA() {
  let response = await fetch(Data_IRA);
  let data = await response.json();
  // -----html Data -------- //
  let navSection = document.querySelector('.navbar');
  data.navbar.forEach( item => {
    navSection.innerHTML = `<div class="logo">
        <img src="${item.logo_IRA}" alt="">
      </div>
      <!------Top Navbar Details------->
      <ul class="navList">
        <li class="items">${item.navItem1}</li>
        <li class="items">${item.navItem2}</li>
        <li class="items">${item.navItem3}</li>
        <li class="items">${item.navItem4}</li>
        <li class="items">${item.navItem5}</li>
        <li class="items">${item.navItem6}</li>
        <i id="search" class="${item.searchIcon}"></i>
      </ul>
      <!-----Login Details----->
      <div class="login">
        <p class="log">${item.loginBtn}</p>
      </div>
      <div class="sideBar">
        <i class="${item.sideBar}"></i>
      </div>`
  });
}
IRA()