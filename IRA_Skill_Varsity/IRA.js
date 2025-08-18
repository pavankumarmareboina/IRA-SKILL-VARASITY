let course = document.querySelector("#course");
course.addEventListener("click", () => {
  let openCourse = document.querySelector(".course_detail");
  openCourse.style.display = "block";
});
async function IRA() {
  try {
    let IRA_Data = await fetch("IRA_Data.json");
    let comeData = await IRA_Data.json();
    let liveData = "";
    comeData.map((value) => {
      liveData = `<h4 class="IRA_program">${value.id}</h4>
        <article class="course_About">
          ${value.about}
        </article>
        <ul class="courseItem">
          <li>${value.course1}</li>
          <li>${value.course2}</li>
          <li>${value.course3}</li>
          <li>${value.course4}</li>
          <li>${value.course5}</li>
          <li>${value.course6}</li>
          <li>${value.course7}</li>
        </ul>`;
    });
    document.querySelector(".course_detail").innerHTML = liveData;
  } catch (error) {
    console.error("server Down!!!!", error);
  }
}
IRA();
