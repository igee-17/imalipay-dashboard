import {
  defaultersAccount,
  defaultersShield,
  defaultersMoney,
  arrowUpRed,
  arrowUp,
} from "../assets/icons";
import {
  personOne,
  personTwo,
  personThree,
  personFour,
  personFive,
} from "../assets/images";
import { InfoProfile, Verified } from "../components";

export const floatingDefaultersCardData = [
  {
    id: 1,
    image: defaultersMoney,
    text: "Total default amount (NGN)",
    number: "3,160,010",
    icon: null,
    info: null,
  },
  {
    id: 2,
    image: defaultersShield,
    text: "Total default (NGN)",
    number: "890,100",
    icon: arrowUpRed,
    info: "10%",
  },
  {
    id: 3,
    image: defaultersAccount,
    text: "Total number of defaulters",
    number: "316",
    icon: arrowUp,
    info: "100%",
  },
];

export const infoHeaderDefaultsData = {
  colOne: "DRIVER",
  colTwo: "LOAN AMOUNT",
  colThree: "DATE REQUESTED",
  colFour: "LOAN STATUS",
  colFive: "",
};

export const infoDataDefaults = [
  {
    id: 1,
    image: personOne,
    name: "Olivia Rhye",
    phone: "+234 803 0000",

    col1: (
      <InfoProfile name="Olivia Rhye" phone="+234 803 0000" image={personTwo} />
    ),
    col2: "NGN 34,600",
    col3: "Jan 6, 2022",
    col4: <Verified text="active" />,
    col5: "view",
  },
  {
    id: 2,
    image: personTwo,
    name: "Phoenix Baker",
    phone: "+234 803 0000",

    col1: (
      <InfoProfile
        name="Phoenix Baker"
        phone="+234 803 0000"
        image={personTwo}
      />
    ),
    col2: "NGN 27,800",
    col3: "Jan 6, 2022",
    col4: <Verified text="active" />,
    col5: "view",
  },
  {
    id: 3,
    image: personThree,
    name: "James Warri",
    phone: "+234 803 0000",
    col1: (
      <InfoProfile
        name="James Warri"
        phone="+234 803 0000"
        image={personThree}
      />
    ),
    col2: "NGN 19,580",
    col3: "Jan 6, 2022",
    col4: <Verified text="active" />,
    col5: "view",
  },
  {
    id: 4,
    image: personFour,
    name: "Demi Wilkinson",
    phone: "+234 803 0000",
    col1: (
      <InfoProfile
        name="Demi Wilkinson"
        phone="+234 803 0000"
        image={personFour}
      />
    ),
    col2: "NGN 46,700",
    col3: "Jan 6, 2022",
    col4: <Verified text="active" />,
    col5: "view",
  },
  {
    id: 5,
    image: personFive,
    name: "Candice Wu",
    phone: "+234 803 0000",
    col1: (
      <InfoProfile name="Candice Wu" phone="+234 803 0000" image={personFive} />
    ),
    col2: "NGN 51,830",
    col3: "Jan 6, 2022",
    col4: <Verified text="active" />,
    col5: "view",
  },
];
