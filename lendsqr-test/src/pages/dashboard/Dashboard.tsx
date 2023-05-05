import React  from 'react';
import { userTypes } from './dashboardData';
import { Fragment } from 'react';

export default function Dashboard() {
  return (
    <div className="userDashboard">
      <section className="userTypes">
        <h2>users</h2>
        <div className="userCards">
          {userTypes.map((userType) => (
            <Fragment key={userType.id}>

              <div >{userType.description}</div>
            </Fragment>
          ))}
          
        </div>
      </section>
      <section></section>
    </div>
  );
}
