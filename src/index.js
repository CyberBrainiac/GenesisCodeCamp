
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DesktopHeaderComponent from './desktopHeaderComponent';

import CourseComponent from './courseComponent';
import testObj from './testObj';
import ListComponent from './listComponent';

import getAllCoursesAPI from './getAllCoursesAPI';
import sessionStoragePutData from './sessionStoragePutData.js';
import mainCourseDetails from './layer2/mainCourseDetails.js';

mainFunction();
function mainFunction() {
  let windowInnerWidth = document.documentElement.clientWidth;


  const userDevice = (function checkUserDevice() {
    let ua = navigator.userAgent;

    if (ua.match(/(tablet|ipad|playbook|mobile|iphone|ipod)|(android(?!.*mobile))/i)) {
      return "mobile";
    } else {
      return "desktop";
    }
  })();

  if (userDevice == 'desktop') {
    ReactDOM.createRoot(document.getElementById('header')).render(
      <React.StrictMode>
        <DesktopHeaderComponent />
      </React.StrictMode>
    );
    ReactDOM.createRoot(document.getElementById('main')).render(
      <React.StrictMode>
        <section id='section_0'></section>
        <section id='section_1'></section>
        <section id='section_2'></section>
        <section id='section_3'></section>
        <section id='section_4'></section>
        <section id='section_5'></section>
        <section id='section_6'></section>
        <section id='section_7'></section>
        <section id='section_8'></section>
        <section id='section_9'></section>
        <div id='testVideo'></div>
        <div id='testImage'></div>
      </React.StrictMode>
    );
  } else {
    alert("мобільна версія не реалізована(");
  }

  buildCourseList().catch((err) => console.log("buildCourseList", err))


  async function buildCourseList() {
    const allCourses = await getAllCoursesAPI(); //Під час тестування відключено
    // const allCourses = testObj();
    // await new Promise((resolve, reject) => { setTimeout(() => { resolve(true) }, 1000) });

    let firstPageCoursesArr = allCourses.slice(0, 10);
    let coursesJSXElement = firstPageCoursesArr.map((elem, index) => {
      let listOfScills = (elem.meta.skills.length > 1) ? <ListComponent liArr={elem.meta.skills} /> : <ul><li>{elem.meta.skills}</li></ul>;

      return (<CourseComponent
        id={elem.id}
        title={elem.title}
        tags={elem.tags}
        imgSrc={allCourses[index].previewImageLink}
        description={elem.description}
        lessonsCount={elem.lessonsCount}
        skills={listOfScills}
        rating={elem.rating}
      />)
    });

    coursesJSXElement.forEach((ElemJSX, index) => {
      let sectionID = document.getElementById(`section_${index}`);
      ReactDOM.createRoot(sectionID).render(ElemJSX);
    })

    /*create macrotask to render component. Set 50ms delay*/
    await new Promise((resolve, reject) => setTimeout(() => resolve(true), 50));

    /*Add HelpBlock*/
    createHelpBlock();


    /*Create Course Element handlers*/
    let allCourseImg = document.querySelectorAll(".CourseElem_media");
    allCourseImg.forEach((elem, index) => {
      elem.addEventListener("click", clickOnCourseMediaHandler);
    });

  }


  function clickOnCourseMediaHandler() {
    this.removeEventListener("click", clickOnCourseMediaHandler);
    sessionStoragePutData(this.getAttribute('course_id'));
    // window.open('./courseDetails.html', '_blank');
    // window.location.href = '../public/courseDetails.html';

    let helpBlock = document.getElementById('helpBlock');
    if (helpBlock) { helpBlock.style.display = "none" }

    mainCourseDetails();
  }


  function createHelpBlock() {

    setTimeout(() => {
      const body = document.getElementsByTagName('body')[0];
      const helpBlock = document.createElement('div');
      const helpMessage = document.createElement('p');


      helpBlock.id = 'helpBlock';
      helpBlock.classList.add('helpBlock');
      helpMessage.classList.add('helpMessage');
      helpBlock.appendChild(helpMessage);
      helpMessage.textContent = "Натисніть на малюнок курсу для більш детального ознайомлення";

      helpBlock.style.top = "10px";
      body.appendChild(helpBlock);

      /*Time to render block*/
      setTimeout(() => {
        let helpBlockWidth = helpBlock.clientWidth;
        helpBlock.style.left = windowInnerWidth / 2 - helpBlockWidth / 2 + "px";
        helpBlock.style.opacity = 1;
      }, 20);

      /*Remove Help block*/
      setTimeout(() => helpBlock.remove(), 20000);
    }, 6000);
  }


  // function ImageComponent(props) {
  //   return (
  //     <img className='ImageComponent' src={props.src + '/cover.webp'} alt={`Image of the course`} width="640" height="360"></img>
  //   );
  // }

}