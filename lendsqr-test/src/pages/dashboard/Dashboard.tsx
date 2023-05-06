import React from "react";
import { userTypes } from "./dashboardData";
import { Fragment } from "react";
import { GetUserDataService } from "../../features/mockapi";
import Thead from "./Thead";
import Tbody from "./Tbody";

export default function Dashboard() {
  const { data } = GetUserDataService();
  const allUsers = data?.flatMap((user) => user);

  return (
    <div className="userDashboard">
      <section className="userTypes">
        {userTypes.map((item) => (
          <Fragment>
            <h2 key={item.id}>{item.header}</h2>
            <div className="userCards">
              {item.children.map((types) => (
                <div className="userAccounts">
                  <img src={types.icon} alt="icons" />
                  <br />
                  <p className="accountTypes">{types.item}</p>
                  <p className="accountCount">{allUsers?.length}</p>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </section>
      <section className="useChart">
        <table>
          <thead>
            <Thead />
          </thead>
          <tbody>
            {data?.map((user) => (
              <Fragment key={user.id}>
                <Tbody user={user} />
              </Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
