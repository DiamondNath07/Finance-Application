import React, { useState, useEffect }  from 'react';
import { userTypes } from './dashboardData';
import { userChart } from './usersChart';
import { Fragment } from 'react';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="userDashboard">
      <section className="userTypes">
        {userTypes.map((item)=>(
          <Fragment>
        <h2 key={item.id}>{item.header}</h2>
        <div className="userCards">
          {item.children.map((types)=>(
            <div className='userAccounts'>
            <img src={types.icon} alt="icons" />
              <br />
              <p className='accountTypes'>{types.item}</p>
              <p className='accountCount'>{types.count}</p>
            </div>
          ))}
        </div>
        </Fragment>
        ))}
       
      </section>
      <section className='useChart'>
        {userChart.map((item)=>(

    <table>
      <thead style={{display: "flex"}}>
        <tr> {item.heading}</tr>
      </thead>
    </table>
        ))}
      
      </section>
    </div>
  );
}
