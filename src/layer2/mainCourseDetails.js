"use strict"

import React from 'react';
import ReactDOM from 'react-dom/client';
import getCourse from './getCourse';
import sessionStorageGetData from './sessionStorageGetData';
import BuildLayer2Comp from './buildLayer2Comp';
import './layer2.css';


export default async function mainCourseDetails() {
	let layer2 = document.getElementById("layer2");
	layer2.style.display = "flex";
	layer2.style.height = document.documentElement.scrollHeight + "px";
	let courseId = sessionStorageGetData();
	let course = await getCourse(courseId);

	ReactDOM.createRoot(layer2).render(<BuildLayer2Comp
		title={course.title}
		description={course.description}
		previewImageLink={course.previewImageLink}
		lessons={course.lessons}
	/>);

	await new Promise((resolve, reject) => { setTimeout(() => { resolve(true) }, 50) });
	let layer2_ContainerWidth = document.querySelector(".layer2_Container").clientWidth;
	let windowInnerWidth = document.documentElement.clientWidth;
	document.querySelector(".layer2_Container").style.left = windowInnerWidth / 2 - layer2_ContainerWidth / 2 + "px";

	document.getElementById('layer2_backButton').onclick = () => {
		document.getElementById('layer2_backButton').onclick = '';
		layer2.style.display = "none";
	}
}