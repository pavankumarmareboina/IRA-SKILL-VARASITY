let Data_IRA = "IRA_Data.json";
async function IRA() {
  let response = await fetch(Data_IRA);
  let data = await response.json();
  // -----html Data -------- //
   let contact = document.querySelector(".contacts");
  let navSection = document.querySelector(".navbar");
  let navSearch = document.querySelector(".dSearch");
  let listIRA = document.querySelector(".CoursesList");
  let learProcessIRA = document.querySelector(".learnProcess");
  let AchieveIRA = document.querySelector(".cards");
  let location_IRA = document.querySelector(".location");
  let opportunity = document.querySelector(".opportunity");
  let fotter = document.querySelector(".fot");
  let question_Answer = document.querySelector(".qName");
  let QueAns = document.querySelector(".qAns");


  data.whatsappCantact.forEach((item)=>{
    contact.innerHTML = `
    <a href="${item.contactNumber}"><img src="${item.whatsapp}" alt=""></a>`
  })
  data.navbar.forEach((item) => {
    navSection.innerHTML = `<div class="logo">
        <img src="${item.logo_IRA}" alt="">
      </div>
      <!------Top Navbar Details------->
      <ul class="navList">
        <li id="academy">${item.navItem1}</li>
        <li id="addmission">${item.navItem2}</li>
        <li id="slife">${item.navItem3}</li>
        <li id="tFee">${item.navItem4}</li>
        <li id="about">${item.navItem5}</li>
        <li id="fSearch">${item.navItem6}</li>
        <i id="navClose" class="${item.navClose}"></i>
      </ul>
      <div class="sideBar">
        <i id="search" class="${item.searchIcon}"></i>
        <i id="" class="${item.loginAccount}"></i>
        <i id="sideMenu" class="${item.sideBar}"></i>
      </div>`;
  });
  navSection.addEventListener("click", (e) => {
    let EachTap = e.target;
    if (EachTap.id === "academy") {
      alert("page a");
    }
    if (EachTap.id === "addmission") {
      alert("page b");
    }
    if (EachTap.id === "slife") {
      alert("page c");
    }
    if (EachTap.id === "tFee") {
      alert("page d");
    }
    if (EachTap.id === "about") {
      alert("page e");
    }
    if (EachTap.id === "fSearch") {
      alert("page f");
    }
    if (EachTap.id === "search") {
      navSearch.style.display = "block";
    }
    let sideNav = document.querySelector('#sideMenu');
    let phoneNav = document.querySelector('.navList')
    let closeNav = document.querySelector('#navClose')
    sideNav.addEventListener('click',()=>{
      phoneNav.style.display = 'block'
    })
    closeNav.addEventListener('click',()=>{
      phoneNav.style.display = 'none'
    })
  });
   data.search.forEach((item) => {
    navSearch.innerHTML = `
    <div class="ipt">
    <i id="sBar" class="${item.sIcon}"></i>
    <input class="ser" type="text" name=""    placeholder="Search for Course...">
    <i id="sClose" class="${item.closeIcon}"></i>
  </div>`;
  });
  navSearch.addEventListener('click',(e)=>{
    let tap = e.target;
    if(tap.id === 'sClose'){
      navSearch.style.display = "none";
    }
  })
  data.listNav.forEach((item) => {
    listIRA.innerHTML = `<div class="overView">
        <ul class="IRA_Focuses">
          <li id="ov">${item.overView}</li>
          <li id="ov2" id="course">${item.courses}</li>
          <li id="ov3">${item.overView2}</li>
          <li class="qw" id="ov4">${item.overView3}</li>
        </ul>
      </div>
       <div class="banner">
      <img src="${item.iraBanner}" alt="">
     </div>
      <div class="overView_IRA">
        <p class="ov1">
          ${item.platformName}
        </p>
        <article class="ira_about">${item.abutPlatform}</article>
        <div class="explore">
          <p>${item.exploreIRA}</p>
        </div>`;
  });
  listIRA.addEventListener("click", (list) => {
    const listTargert = list.target;
    if (listTargert.id === "ov") {
      alert("listView");
    }
    if (listTargert.id === "ov2") {
      alert("listView");
    }
    if (listTargert.id === "ov3") {
      alert("listView");
    }
    if (listTargert.id === "ov4") {
      alert("listView");
    }
  });
  data.IRA_learning.forEach((item) => {
    learProcessIRA.innerHTML += `<div class="cardPro">
          <div class="lpng">
            <img src="${item.learn1PNG}" alt="###" />
          </div>
          <div class="sc"> 
          <p>${item.step1}</p>
          <h3 class="learn">${item.learn}</h3>
           <article>${item.ProcessLearn}</article>
          <p class="lmore">${item.learnMore}></p>
          </div>
        </div>`;
  });
  data.achievements.forEach((item) => {
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
        </div>`;
  });
  data.IRA_Location.forEach((item) => {
    location_IRA.innerHTML = `<iframe
        id="ira_location"
        src="${item.location}"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>`;
  });
  data.opportunity_IRA.forEach((item) => {
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
      </div>`;
  });
  data.fq.forEach((item) => {
    question_Answer.innerHTML = `<h1>${item.qLogo}</h1>`;
  });
  data.queAns.map((item) => {
    QueAns.innerHTML += `<div class="q1">
          <div class="qMain">
            <h4>${item.q1}</h4>
            <i id="close" class="fa-solid fa-plus"></i>
          </div>
          <p class="${item.qAns}</p>
        </div>`;
  });
  QueAns.addEventListener("click", (event) => {
    const main = event.target.closest(".qMain");
    if (!main) return;

    const allAnswers = QueAns.querySelectorAll(".qAnswer");
    allAnswers.forEach((ans) => (ans.style.display = "none"));

    const container = main.parentElement;
    const answer = container.querySelector(".qAnswer");
    if (answer) {
      answer.style.display = "block";
    }
  });

  // data.IRA_Fotter.forEach((item) => {
  //   fotter.innerHTML = `
  //   <div class="message">
  //       <p class="sign">SIGN UP FOR IRA SKILL VARASITY</p>
  //       <p class="ll">Get exclusive updates on the collection's launch,</p>
  //       <p class="ll">
  //         personalized communication and the House's latest news.
  //       </p>
  //     </div>
  //     <div class="content">
  //       <div class="box1">
  //         <p class="s-head">MAYWE HELP YOU</p>
  //         <p>Contact Us</p>
  //         <p>My Order</p>
  //         <p>FAQs</p>
  //         <p>Email Unsubcribe</p>
  //         <p>site map</p>
  //       </div>
  //       <div class="box2">
  //         <p class="s-head">THE COMPANY</p>
  //         <p>About IRA</p>
  //         <p>IRA Ethics</p>
  //         <p>legal</p>
  //         <p>privacy & cookies policy</p>
  //         <p>Cookies settings</p>
  //         <p>corparate information</p>
  //         <p>Accesibility state statement</p>
  //       </div>
  //       <div class="box3">
  //         <p class="s-head">IRA SERVICE</p>
  //         <p>Discover our service</p>
  //         <p>Book an appointment</p>
  //         <p>Collect in store</p>
  //       </div>
  //     </div>
  //     <div class="f-logo">
  //       <p class="f-logo1">IRA <br />INSTITUTION</p>
  //     </div>
  //     <div class="fot-i">
  //       <p>
  //         © 2016 - 2025 IRA SKILL VARASITY S.p.A. - All rights reserved. SIAE
  //         LICENCE
  //       </p>
  //     </div>`;
  // });
}
IRA();
