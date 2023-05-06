
import userFriends from "../../assets/images/user-friends 1.png";
import users1 from "../../assets/images/users 1.png";
import sack1 from "../../assets/images/sack 1.png";
import handShake from "../../assets/images/Vector.png";
import piggyBank from "../../assets/images/piggy-bank 1.png";
import group104 from "../../assets/images/Group 104.png";
import userCheck from "../../assets/images/user-check 1.png";
import userTimes from "../../assets/images/user-times 1.png";
import briefacase from "../../assets/images/briefcase.png";
import bank from "../../assets/images/Group.png";
import coins from "../../assets/images/coins-solid 1.png";
import mobileTransfer from "../../assets/images/icon.png";
import services from "../../assets/images/Vector (1).png";
import userCog from "../../assets/images/user-cog 1.png";
import scroll from "../../assets/images/scroll 1.png";
import chartbar from "../../assets/images/chart-bar 2.png";


export const sideNavData = [
  {
    id: 1,
    name: "customer",
    children: [
      {
        id: 1.1,
        icon: userFriends,
        item: "user",
        link: "/details",
      },
      {
        id: 1.2,
        icon: users1,
        item: "guarantor",
        link: "/details",
      },
      {
        id: 1.3,
        icon: sack1,
        item: "loan",
        link: "/details",
      },
      {
        id: 1.4,
        icon: handShake,
        item: "decision model",
        link: "/details",
      },
      {
        id: 1.5,
        icon: piggyBank,
        item: "savings",
        link: "/details",
      },
      {
        id: 1.6,
        icon: group104,
        item: "loan request",
        link: "/details",
      },
      {
        id: 1.7,
        icon: userCheck,
        item: "white list",
        link: "/details",
      },
      {
        id: 1.8,
        icon: userTimes,
        item: "karma",
        link: "/details",
      },
    ],
  },
  {
    id: 2,
    name: "Businesses",
    children: [
      {
        id: 2.1,
        icon: briefacase,
        item: "Organization",
        link: "/details",
      },
      {
        id: 2.2,
        icon: group104,
        item: "Loan Product",
        link: "/details",
      },
      {
        id: 2.3,
        icon: bank,
        item: "Savings Product",
        link: "/details",
      },
      {
        id: 2.4,
        icon: coins,
        item: "Fees and Charges",
        link: "/details",
      },
      {
        id: 2.5,
        icon: mobileTransfer,
        item: "Transaction",
        link: "/details",
      },
      {
        id: 2.6,
        icon: services,
        item: "Services",
        link: "/details",
      },
      {
        id: 2.7,
        icon: userCog,
        item: "Service Account",
        link: "/details",
      },
      {
        id: 2.8,
        icon: scroll,
        item: "Settlements",
        link: "/details",
      },
      {
        id: 2.9,
        icon: chartbar,
        item: "Reports",
        link: "/details",
      },
    ],
  },
];
