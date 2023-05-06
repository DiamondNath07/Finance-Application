import React, { Fragment, useState } from "react";
import filter from "../../assets/images/filter.png";
import "../../pages/App.scss";
import Form from "./Form";
export default function Thead() {
  const [form, setForm] = useState(false);

  return (
    <>
      <tr className="tableRow">
        <th>
          <span className="orgHeader">
            <p> ORGANIZATION</p>
            <img src={filter} alt="filterIcon" onClick={() => setForm(!form)} />
          </span>
        </th>
        <th>
          USERNAME <img src={filter} alt="filterIcon" />
        </th>
        <th>
          EMAIL <img src={filter} alt="filterIcon" />
        </th>
        <th>
          PHONE NUMBER <img src={filter} alt="filterIcon" />
        </th>
        <th>
          DATE JOINED <img src={filter} alt="filterIcon" />
        </th>
        <th>
          STATUS <img src={filter} alt="filterIcon" />
        </th>
        <th></th>
      </tr>
      <section className="formModal">{form && <Form />}</section>
    </>
  );
}
