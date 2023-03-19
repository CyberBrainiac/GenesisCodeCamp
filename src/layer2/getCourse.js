"use strict"
import React from 'react';
import ReactDOM from 'react-dom/client';


export default async function getCourse(courseId = null) {
  if (!courseId) {
    console.log("Empty ID field detected");
    return null
  }
  const tokenRouteUrl = "https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions";
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      Authorization: '',
    },
  };

  let course = null;
  let token = null;
  let response = null;

  try {
    response = await fetch(tokenRouteUrl);
    token = await response.json();
    requestOptions.headers.Authorization = `Bearer ${token.token}`;

    response = await fetch(`https://api.wisey.app/api/v1/core/preview-courses/${courseId}`, requestOptions);
    course = await response.json();


    // ReactDOM.createRoot(document.getElementById(`testVideo`)).render(<VideoComponent src={course.lessons[0].link} />);
    // ReactDOM.createRoot(document.getElementById(`testVideo`)).render(<VideoComponent src={"https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8"} />);


    // ReactDOM.createRoot(document.getElementById(`testImage`)).render(<ImageComponent src={course.previewImageLink} />);

  } catch (error) {
    console.log(error);
  }

  return course;
}


