import React from 'react';

const UserCard = (props) => {

    return(
<div className="ui card">
  <div className="content">
     <div className="header">
     Tasmia Nafisa
    </div>
<div className='description'>
{props.children}
</div>   
</div>
<div className='ui bottom button'>
    <i className='add icon'></i>
        Request Sent   
</div>
</div>
    )
}
export default UserCard;