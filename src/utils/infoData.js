import {
  personOne,
  personTwo,
  personThree,
  personFour,
  personFive,
} from "../assets/images";
import { InfoProfile, Verified } from "../components";

export const infoData = [
  {
    id: 1,
    image: personOne,
    name: "Olivia Rhye",
    phone: "+234 803 0000",
    col2: "NGN 34,600",
    col3: "Jan 6, 2022 • 09:21",
    col4: "00437E",
    col5: "successful",
  },

  {
    id: 2,
    image: personTwo,
    name: "Phoenix Baker",
    phone: "+234 803 0000",
    col2: "NGN 27,800",
    col3: "Jan 6, 2022 • 09:21",
    col4: "60921V",
    col5: "successful",
  },
  {
    id: 3,
    image: personThree,
    name: "James Warri",
    phone: "+234 803 0000",
    col2: "NGN 19,580",
    col3: "Jan 6, 2022 • 09:21",
    col4: "69942Z",
    col5: "failed",
  },
  {
    id: 4,
    image: personFour,
    name: "Demi Wilkinson",
    phone: "+234 803 0000",
    col2: "NGN 46,700",
    col3: "Jan 6, 2022 • 09:21",
    col4: "23821Q",
    col5: "successful",
  },
  {
    id: 5,
    image: personFive,
    name: "Candice Wu",
    phone: "+234 803 0000",
    col2: "NGN 51,830",
    col3: "Jan 6, 2022 • 09:21",
    col4: "80795W",
    col5: "successful",
  },
];

export const infoDataCustomer = [
  {
    id: 1,
    image: personTwo,
    name: "Phoenix Baker",
    phone: "+234 803 0000",
    col1: "#3066",
    col2: (
      <InfoProfile
        name="Phoenix Baker"
        phone="+234 803 0000"
        image={personTwo}
      />
    ),
    col3: "06 Jan, 2022",
    col4: <Verified text="verified" />,
    col5: "view",
  },
  {
    id: 2,
    image: personTwo,
    name: "Phoenix Baker",
    phone: "+234 803 0000",
    col1: "#3066",
    col2: (
      <InfoProfile
        name="Phoenix Baker"
        phone="+234 803 0000"
        image={personTwo}
      />
    ),
    col3: "06 Jan, 2022",
    col4: <Verified text="verified" />,
    col5: "view",
  },
  {
    id: 3,
    image: personTwo,
    name: "Phoenix Baker",
    phone: "+234 803 0000",
    col1: "#3066",
    col2: (
      <InfoProfile
        name="Phoenix Baker"
        phone="+234 803 0000"
        image={personTwo}
      />
    ),
    col3: "06 Jan, 2022",
    col4: <Verified text="verified" />,
    col5: "view",
  },
];
