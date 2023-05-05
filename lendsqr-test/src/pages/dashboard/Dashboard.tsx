import React  from 'react';
import { userTypes } from './dashboardData';
import { Fragment } from 'react';

export default function Dashboard() {
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
      <section>

      </section>
    </div>
  );
}
