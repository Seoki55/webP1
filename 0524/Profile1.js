import React from 'react';
import { useParams } from 'react-router-dom';

const data ={
    Tencentimeters:{
        name: '권정열',
        description: '원맨 밴드 십센치의 멤버, 가성과 진성을 오가는 보컬 실력이 발군이다. 그리고 노래할 때와 평소 목소리과의 차이가 크다.'
    },
    Jdon:{
     name: '이승협',
     description: '엔플라잉의 리더, 보컬리스트, 래퍼, 프로듀서 겸 배우(최근 드라마 : 선재 업고 튀어의 류선재(변우석 분) 친구 백인혁 役)'
    },
    YooHweseung:{
      name: '유회승',
      description:'엔플라잉의 메인보컬 겸 뮤지컬 배우, 불후의 명곡에서의 우승 경력과 복면가왕의 가왕을 했을 정도의 엄청난 실력을 가지고 있다.'
    },
    SeoDonghyun:{
        name: 'Big Naughty(본명: 서동현)',
        description: '힙합 씬에서 미성을 사용하는 래퍼 겸 싱어송라이터, 싱잉 랩을 주로 사용한다.'
    },

};
const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    return (
    <div>
    <h1>사용자 프로필</h1>
    {profile ? (
    <div>
    <h2>{profile.name}</h2>
    <p>{profile.description}</p>
    </div>
    ) : (
    <p>존재하지 않는 프로필입니다.</p>
    )}
    </div>
    );
    };
export default Profile;
    