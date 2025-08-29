let Data_IRA = location.pathname.includes("/pages/")
  ? "../data.json"
  : "./data.json";
async function IRA() {
  try {
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

    data.navbar.map((item) => {
      navSection.innerHTML = `<div class="logo">
        <img src="${item.logo_IRA}" alt="">
      </div>
      <!------Top Navbar Details------->
      <ul class="navList">
      <li><a href="/pages/academic.html">${item.navItem1}</a></li>
      <li><a href="/pages/addmission.html">${item.navItem2}</a></li>
      <li><a href="/pages/studentLife.html">${item.navItem3}</a></li>
      <li><a href="/pages/tuition.html">${item.navItem4}</a></li>
      <li><a href="/pages/about.html">${item.navItem5}</a></li>
      <li><a href="/pages/faculty.html">${item.navItem6}</a></li>
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
      if (EachTap.id === "search") {
        navSearch.style.display = "block";
      }
      let sideNav = document.querySelector("#sideMenu");
      let phoneNav = document.querySelector(".navList");
      let closeNav = document.querySelector("#navClose");
      sideNav.addEventListener("click", () => {
        phoneNav.style.display = "block";
      });
      closeNav.addEventListener("click", () => {
        phoneNav.style.display = "none";
      });
    });
    data.search.forEach((item) => {
      navSearch.innerHTML = `
    <div class="ipt">
    <i id="sBar" class="${item.sIcon}"></i>
    <input class="ser" type="text" name=""    placeholder="Search for Course...">
    <i id="sClose" class="${item.closeIcon}"></i>
  </div>`;
    });
    navSearch.addEventListener("click", (e) => {
      let tap = e.target;
      if (tap.id === "sClose") {
        navSearch.style.display = "none";
      }
    });
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
          <p class="lmore">${item.learnMore}</p>
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
          <p class="${item.ans}</p>
        </div>`;
    });
    data.whatsappCantact.forEach((item) => {
      contact.innerHTML = `
    <a href="${item.contactNumber}"><img src="${item.whatsapp}" alt=""></a>`;
    });
  } catch (error) {
    console.error("AcademicData error:", error);
  }
}
IRA();

//---academic----//
async function AcademicData() {
  try {
    let response = await fetch(Data_IRA);
    let data = await response.json();

    let aca = document.querySelector(".academicIRA");
    data.academic.forEach((item) => {
      aca.innerHTML += `
    <div class="aca">
        <h1>${item.AcademicInfo}</h1>
      </div>
      <div class="AboutAca">
        <article>${item.acaAbout}</article>
      </div>
      <div class="programsAca">
        <p>${item.programList}</p>
      </div>
    `;
    });
    let coursesAcademic = document.querySelector(".courseList");
    data.programAcademic.map((item) => {
      coursesAcademic.innerHTML += `
    <div class="coursesP">
        <div class="courseImg">
          <img
            src="${item.programIMG}"
            alt="$$$$"
          />
        </div>
        <div class="coureInfo">
          <p class='pName'>${item.programName}</p>
          <p class='pAbout'>${item.programDetail}</p>
          <p class='pExplore'>${item.ProgramExplore}</p>
        </div>
      </div>`;
    });
    let termsCourse = document.querySelector(".courseTerms");
    data.courseTerms.map((item) => {
      termsCourse.innerHTML = `
    <p>${item.terms}</p>`;
    });
  } catch (error) {
    console.error("server Down!!!!");
  }
}
AcademicData();