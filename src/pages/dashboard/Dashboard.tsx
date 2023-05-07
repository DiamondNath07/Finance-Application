import React, { useState } from "react";
import { userTypes } from "./components/dashboardData";
import { Fragment } from "react";
import { GetUserDataService } from "../../features/mockapi";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody";
import Pagination from "./components/Pagination";

export default function Dashboard() {
  const { data } = GetUserDataService();
  const [currPage, setCurrPage] = useState<number>(1);
  const [userPerPage] = useState(10);
  const allUsers = data?.flatMap((user) => user);

  const indexOfLastUser = currPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const usersPerPage = data?.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrPage(pageNumber);

  return (
    <div className="userDashboard">
      <section className="userTypes">
        {userTypes.map((item) => (
          <Fragment key={item.id}>
            <h2>{item.header}</h2>
            <div className="userCards">
              {item.children.map((types) => (
                <div key={types.id} className="userAccounts">
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
      <section className="useChart" >
        <table className="userTable">
          <thead>
            <Thead />
          </thead>
          <tbody>
            {usersPerPage?.map((user) => (
              <Fragment key={user.id}>
                <Tbody user={user} />
              </Fragment>
            ))}
          </tbody>
        </table>
        <Pagination
          userPerPage={userPerPage}
          totalUsers={allUsers?.length}
          paginate={paginate}
          currPage={currPage}
        />
      </section>
    </div>
  );
}
