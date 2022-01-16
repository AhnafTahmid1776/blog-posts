import React from "react";
import ReactDOM from "react-dom";
import profile1 from './images/saad.jpg';
import profile2 from './images/nafisa.jpg';
import profile3 from './images/rizwan.jpg';
import profile4 from './images/abbu.jpg';
import UserCard from './UserCard';

import SingleComment from './SingleComment';

const App = () => {
    return(
<div className="ui comments">
    <UserCard>
    <SingleComment name='Tasmia Nafisa' date='Today at 8:10PM'text="How?!" picture={profile2}/> 
     
  </UserCard>
  <SingleComment name='Ahnaf Tahmid Saad' date='Today at 6:40PM' text="Thanks >3" picture={profile1}/> 
  <SingleComment name='Rizwan Islam' date='Today at 5:00PM' text="U did it Dost!" picture={profile3}/> 
  <SingleComment name='Ahmed Mohiuddin' date='Today at 8:54PM'text="Amazing?!" picture={profile4}/> 
</div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
//when we are going to show a component we are not using curly brace,we are using jsx symbol />