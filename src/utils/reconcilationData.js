import { crown, dollarBlack } from "../assets/icons";
import { InfoProfile } from "../components";
import { gtIcon, mPesa } from "../assets/images";

export const infoHeaderReconData = {
  colOne: "DATE ",
  colTwo: "account",
  colThree: "INVOICE TOTAL",
  colFour: "AMOUNT RECEIVED",
  colFive: "PERCENTAGE RECONCILED",
};

export const floatingReconCardData = [
  {
    id: 1,
    image: crown,
    text: "Total order transactions",
    number: "6,708,321",
  },
  {
    id: 2,
    image: dollarBlack,
    text: "Total collections",
    number: "2,240,059",
  },
  {
    id: 3,
    circle: true,
    text: "Reconcile",
    number: "53",
  },
];

export const infoConstReconData = [
  {
    id: 1,
    image: mPesa,

    col1: "Aug 6, 2022",
    col2: <InfoProfile name="Account Name" phone="0293848323" image={mPesa} />,
    col3: "KES 110,950.00",
    col4: "KES 90,069.00",
    col5: "82%",
  },

  {
    id: 2,
    image: mPesa,

    col1: "Aug 5, 2022",
    col2: (
      <InfoProfile name="MPesa-ImaliPay" phone="81 000 0000" image={mPesa} />
    ),
    col3: "KES 110,950.00",
    col4: "KES 65,100.00",
    col5: "62%",
  },
  {
    id: 3,
    image: gtIcon,

    col1: "Aug 4, 2022",
    col2: (
      <InfoProfile name="ImaliPay Limited" phone="010239521" image={gtIcon} />
    ),
    col3: "KES 110,950.00",
    col4: "KES 79,506.00",
    col5: "92%",
  },
  {
    id: 4,
    image: mPesa,

    col1: "Aug 5, 2022",
    col2: <InfoProfile name="Account Name" phone="Account No" image={mPesa} />,
    col3: "KES 110,950.00",
    col4: "KES 100,035.00",
    col5: "85%",
  },
  {
    id: 5,
    image: gtIcon,

    col1: "Jan 3, 2022",
    col2: <InfoProfile name="Bank Account" phone="0293848323" image={gtIcon} />,
    col3: "KES 110,950.00",
    col4: "KES 56,890.00",
    col5: "72%",
  },
  {
    id: 6,
    image: mPesa,

    col1: "Jan 6, 2022",
    col2: <InfoProfile name="Account Name" phone="91 000 0000" image={mPesa} />,
    col3: "KES 110,950.00",
    col4: "KES 91,481.00",
    col5: "52%",
  },
];
