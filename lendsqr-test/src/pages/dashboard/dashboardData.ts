import userIcon from "../../assets/images/userIcon.png";
import userActive from "../../assets/images/userActive.png";
import userLoans from "../../assets/images/userLoans.png";
import userSavings from "../../assets/images/userSavings.png"


export const userTypes = [
  {
    id: 1,
    header: 'Users',
    children: [
      {
        id: 1.1,
        icon: userIcon, 
        item: 'users',
        count: 2453,
      },
      {
        id: 1.2,
        icon: userActive,
        item: 'active users',
        count: 2453,
      },
      {
        id: 1.3,
        icon: userLoans,
        item: 'users with loans',
        count: 2453,
      },
      {
        id: 1.4,
        icon: userSavings,
        item: 'users with savings',
        count: 102453,
      },
    ],
  },
];
