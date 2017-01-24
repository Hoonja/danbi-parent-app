import React from 'react';

const Header = () => (
  <header>
    <h1 className="blind">Jello MOM</h1>
    <div className="wrapper">
      <div className="menu">
        <a href="#" className="toggle">전체메뉴</a>
      </div>
      <a href="#" className="name-title">김단비 5세</a>
      <a href="#" className="mypage">마이페이지</a>
    </div>

    <div className="gnb">
      <ul>
        <li><a href="#">Today</a></li>
        <li><a href="#">아이현황</a></li>
        <li className="active"><a href="#">우리 선생님</a></li>
        <li><a href="#">학부모 도구</a></li>
        <li><a href="#">육아·교육마당</a></li>
      </ul>
    </div>

  </header>
);

export default Header;
