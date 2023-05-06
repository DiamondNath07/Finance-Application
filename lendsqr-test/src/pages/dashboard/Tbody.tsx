import React from 'react';
import { IUserData } from '../../components/interface';
import '../../pages/App.scss';
import elipsis from '../../assets/images/elipsis.png';
import moment from 'moment';

export default function Tbody({ user }: { user: IUserData }) {
  return (
    <tr className="tBody">
      <td className='orgName'>{user.orgName}</td>
      <td>{user.userName}</td>
      <td className='email'>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss A')}</td>
      <td>{user.education.employmentStatus}</td>
      <td className='optionBar'>
        <img src={elipsis} alt="" />
      </td>
    </tr>
  );
}
