"use strict"
import React from 'react';
import './desktopMComp.css';

export default class CourseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='CourseElem' id={this.props.id}>
        <h2 className='CourseElem_title'>{this.props.title}</h2>
        <div className='CourseElem_media' course_id={this.props.id}>
          <img className='CourseElem_image' src={this.props.imgSrc + '/cover.webp'} alt={`Image of the course`}></img>
        </div>
        <h3 className='CourseElem_tags'>Field of study: {this.props.tags}</h3>
        <p className='CourseElem_rating'><strong>Rating: {this.props.rating}</strong></p>
        <p className='CourseElem_description'><strong>Description: </strong>{this.props.description}</p>
        <p className='CourseElem_lessonsCount'><strong>Count of lessons: </strong>{this.props.lessonsCount}</p>
        <div className='CourseElem_skills'><strong>Your future skills: </strong>{this.props.skills}</div>
      </div>
    );
  }
}





