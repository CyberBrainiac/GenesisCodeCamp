"use strict"

import React from "react";
import ListOfLessons from './listOfLessons';

export default class BuildLayer2Comp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render(props) {
		return (
			<div className="layer2_Container">
				<button id='layer2_backButton'>GO BACK</button>
				<h1>{this.props.title}</h1>
				{/* <div className='layer2_media' course_id={this.id}>
					<img className='CourseElem_image' src={this.props.previewImageLink + '/cover.webp'} alt={`Image of the course`}></img>
				</div> */}
				<h4 className="layer2_Description">Course description: {this.props.description}</h4>
				<div className="lessonsContainer">
					<ListOfLessons lessons={this.props.lessons} />
				</div>
			</div>
		)
	}
}