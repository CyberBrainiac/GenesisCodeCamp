"use strict"

export default async function getAllCoursesAPI() {
  const tokenRouteUrl = "https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions";

  let allExistCoursesJSON = null;
  let token = null;
  let response = null;

  try {
    response = await fetch(tokenRouteUrl);
    token = await response.json();

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: { Authorization: `Bearer ${token.token}` },
    };

    response = await fetch("https://api.wisey.app/api/v1/core/preview-courses", requestOptions);
    allExistCoursesJSON = await response.json();
  } catch (error) {
    console.log(error);
  }

  return allExistCoursesJSON.courses;
} 