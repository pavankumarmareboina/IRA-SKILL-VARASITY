let Data_IRA = 'IRA_Data.json'
async function IRA() {
  let response = await fetch(Data_IRA);
  let data = await response.json();
  // -----html Data -------- //
  let navSection = document.querySelector('.navbar');
  let listIRA = document.querySelector('.CoursesList');
  let learProcessIRA = document.querySelector('.learnProcess');
  let AchieveIRA = document.querySelector('.cards');
  let location_IRA = document.querySelector('.location');
  let opportunity = document.querySelector('.opportunity');
  let fotter = document.querySelector('.fot')
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
  data.listNav.forEach( item => {
    listIRA.innerHTML = `<div class="overView">
        <ul class="IRA_Focuses">
          <li class="viewMain">${item.overView}</li>
          <li id="course">${item.courses}</li>
          <li>${item.overView2}</li>
          <li>${item.overView3}</li>
        </ul>
      </div>
      <div class="overView_IRA">
        <p class="ov1">
          ${item.platformName}
        </p>
        <article class="ira_about">${item.abutPlatform}</article>
        <div class="explore">
          <p>${item.exploreIRA}</p>
        </div>`
  });
  data.IRA_learning.forEach( item => {
    learProcessIRA.innerHTML += `<div class="cardPro">
          <div class="lpng">
            <img src="${item.learn1PNG}" alt="###" />
          </div>
          <p>${item.step1}</p>
          <h3 class="learn">${item.learn}</h3>
          <article>${item.ProcessLearn}</article>
          <p class="lmore">${item.learnMore}></p>
        </div>`
  });
  data.achievements.forEach( item => {
    AchieveIRA.innerHTML += `
     <h1 class="achive">${item.achieveImpacts}</h1>
        <div class="card1">
          <img
            src="${item.aImage}"
            alt="******"
          />
          <p>${item.achieveAbout}</p>
           </div>
        <div class="card1">
          <p>${item.achieveAbout2}</p>
          <img
            src="${item.aImage2}"
            alt="******"
          />
        </div>`
  });
   data.IRA_Location.forEach( item => {
    location_IRA.innerHTML = `<iframe
        id="ira_location"
        src="${item.location}"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>`
  });
  data.opportunity_IRA.forEach( item => {
    opportunity.innerHTML = `
    <div class="ou">
          <h1>${item.heading}</h1>
        </div>
        <div class="ou_about">
          <article>${item.optAbout}</article>
        </div>
        <div class="ou_level">
          <p>${item.stag1}</p>
          <p>${item.stag2}</p>
          <p>${item.stag3}</p>
        </div>
        <div class="ou_about_levels">
          <p>${item.stagAbout1}</p>
          <p>${item.stagAbout2}</p>
          <p>${item.stagAbout3}</p>
        </div>
      </div>`
  });
  data.IRA_Fotter.forEach( item => {
    fotter.innerHTML = `
    <div class="message">
        <p class="sign">SIGN UP FOR IRA SKILL VARASITY</p>
        <p class="ll">Get exclusive updates on the collection's launch,</p>
        <p class="ll">
          personalized communication and the House's latest news.
        </p>
      </div>
      <div class="content">
        <div class="box1">
          <p class="s-head">MAYWE HELP YOU</p>
          <p>Contact Us</p>
          <p>My Order</p>
          <p>FAQs</p>
          <p>Email Unsubcribe</p>
          <p>site map</p>
        </div>
        <div class="box2">
          <p class="s-head">THE COMPANY</p>
          <p>About IRA</p>
          <p>IRA Ethics</p>
          <p>legal</p>
          <p>privacy & cookies policy</p>
          <p>Cookies settings</p>
          <p>corparate information</p>
          <p>Accesibility state statement</p>
        </div>
        <div class="box3">
          <p class="s-head">IRA SERVICE</p>
          <p>Discover our service</p>
          <p>Book an appointment</p>
          <p>Collect in store</p>
        </div>
      </div>
      <div class="f-logo">
        <p class="f-logo1">IRA <br />INSTITUTION</p>
      </div>
      <div class="fot-i">
        <p>
          © 2016 - 2025 IRA SKILL VARASITY S.p.A. - All rights reserved. SIAE
          LICENCE
        </p>
      </div>`
  });
}
IRA()