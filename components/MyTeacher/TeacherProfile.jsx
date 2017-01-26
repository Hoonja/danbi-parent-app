import React from 'react';

const TeacherProfile = () => (
  <div className="teacher">
    <figure>
      <img src="./images/pic.jpg" alt="박푸름 선생님" />
      <figcaption>
        <strong>박푸름 선생님</strong>
        <span className="tag">
          <em className="kor">한글</em>
          <em className="math">수학</em>
        </span>
        <ul>
          <li>한글 (3레벨)  : 3주차 (총 30주)</li>
          <li>수학 (3레벨)  : 3주차 (총 32주)</li>
        </ul>
      </figcaption>
    </figure>
    <p>
      <em>현재 선생님에게 하시고 싶은 <br />
      말씀이 있을 경우, 메시지를 보내세요.</em>
      <a href="#">메시지 바로쓰기</a>
    </p>
  </div>
);

export default TeacherProfile;
