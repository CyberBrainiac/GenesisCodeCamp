"use strict"

export default function sessionStoragePutData(courseId) {
	const siteKey = (() => {
		return navigator.userAgent + "_sessionStorage_GenesisCodeCamp";
	})();

	sessionStorage.setItem(siteKey, courseId);
	return true;
}