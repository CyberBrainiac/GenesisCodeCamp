"use strict"

export default function sessionStorageGetData() {
	const siteKey = (() => {
		return navigator.userAgent + "_sessionStorage_GenesisCodeCamp";
	})();

	let courseId = sessionStorage.getItem(siteKey);
	return courseId;
}