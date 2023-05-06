import React from 'react';
import filter from '../../assets/images/filter.png';
import '../../pages/App.scss';
export default function Thead() {
  
  return (
    <>
      <tr className="tableRow">
        <th>
          ORGANIZATION <img src={filter} alt="filterIcon"  />
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
    </>
  );
}
