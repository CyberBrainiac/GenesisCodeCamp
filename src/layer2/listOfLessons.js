export default function ListOfLessons(props) {

	return (
		<div>
			{props.lessons.map((lesson, i) => { return <ListComponent key={i} lesson={lesson} /> })}
		</div>
	);
}

function ListComponent(props) {
	return (
		<div id={props.lesson.id}>
			<h2>{props.lesson.title}</h2>
			<VideoComponent src={props.lesson.link} />
		</div>
	);
}

function VideoComponent(props) {
	return (
		<video src={props.src} className="videoComponent" autoPlay controls width="640" height="360">
			{/* <source src={props.src} type="application/x-mpegURL" /> */}
			Sorry, your browser doesn't support embedded videos,
			but don't worry, you can <a href={props.src}>download it</a>
			and watch it with your favorite video player!
		</video>
	);
}

// let a = {
// 	"lessons": [
// 		{
// 			"id": "278e5a0e-8df1-4646-9984-10289d52dc2d",
// 			"title": "Why we lack motivation",
// 			"duration": 255,
// 			"order": 1,
// 			"type": "video",
// 			"status": "unlocked",
// 			"link": "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8",
// 			"previewImageLink": "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1",
// 			"meta": null
// 		},
// 	]
// }