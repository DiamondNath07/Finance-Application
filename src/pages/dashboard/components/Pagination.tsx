import React from "react";
import "../../../pages/App.scss";
import nextBtn from "../../../assets/images/nextBtn.png";

export default function Pagination({
  userPerPage,
  totalUsers,
  paginate,
  currPage,
}: {
  userPerPage: number;
  totalUsers: number | undefined;
  paginate: (pageNumber: number) => void;
  currPage: number;
}) {
  const pageNumber = [];
  if (totalUsers) {
    for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
      pageNumber.push(i);
    }
  }

  return (
    <section className="pagination">
      <div
        className="dataLoadCount"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Showing</p>
        <select>
          <option value="currentPage">{userPerPage}</option>
        </select>
        <p>out of {totalUsers}</p>
      </div>
      <div className="pagesNo">
        <button
          onClick={() => paginate(currPage <= 1 ? currPage : currPage - 1)}
        >
          <img src={nextBtn} alt="prevBtn" className="prevBtn" />
        </button>
        <ul className="numbers">
          {pageNumber.map((val: number) => (
            <li key={val}>
              <span onClick={() => paginate(val)} className="pageLink">
                {currPage === val ? <button>{val}</button> : val}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => paginate(currPage >= 10 ? currPage : currPage + 1)}
        >
          <img src={nextBtn} alt="nextBtn" />
        </button>
      </div>
    </section>
  );
}
