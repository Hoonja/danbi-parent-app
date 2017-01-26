import React from 'react';
import TeacherTabMenu from './TeacherTabMenu';
import TeacherProfile from './TeacherProfile';
import RequestCounselling from './RequestCounselling';
import GetNewTeacher from './GetNewTeacher';

const Content = () => (
  <div id="contents">
    <h2 className="blind">우리 선생님</h2>
		<TeacherTabMenu />
		<h3>현재 수업중인 선생님</h3>
		<TeacherProfile />
		<RequestCounselling />
    <GetNewTeacher />
	</div>
);

export default Content;
