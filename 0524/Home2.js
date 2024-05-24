import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
return (
<div>
<h1>홈</h1>
<p>가장 먼저 보여지는 페이지입니다.</p>
<ul>
<li>
<Link to="/about">소개</Link>
</li>
<li>
<Link to="/profiles/Tencentimeters">권정열의 프로필</Link>
</li>
<li>
<Link to="/profiles/Jdon">이승협의 프로필</Link>
</li>
<li>
<Link to="/profiles/YooHweseung">유회승의 프로필</Link>
</li>
<li>
<Link to="/profiles/SeoDonghyun">서동현(빅나티)의 프로필</Link>
</li>
<li>
<Link to="/profiles/void">존재하지 않는 프로필</Link>
</li>
</ul>
</div>
);
};
export default Home;
