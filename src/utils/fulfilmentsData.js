import {
  personOne,
  personTwo,
  personThree,
  personFour,
  personFive,
} from "../assets/images";
import { InfoProfile } from "../components";

export const infoHeaderFulfilmentsData = {
  colOne: "customers",
  colTwo: "price",
  colThree: "date",
  colFour: "vehicle model",
  colFive: "col. status",
};

export const infoDataFulfilments = [
  {
    id: 1,
    image: personOne,
    name: "Olivia Rhye",
    phone: "+234 803 0000",
    col1: (
      <InfoProfile name="Olivia Rhye" phone="+234 803 0000" image={personOne} />
    ),
    col2: "NGN 34,600",
    col3: "Jan 6, 2022",
    col4: "Mazda - Model Q",
    col5: "active",
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
    col4: "Toyota - Model A",
    col5: "successful",
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
    col4: "Lexus - Model R",
    col5: "failed",
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
    col4: "Toyota - Model Q",
    col5: "successful",
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
    col4: "BMW - Model S",
    col5: "successful",
  },
  {
    id: 6,
    image: personOne,
    name: "Olivia Rhye",
    phone: "+234 803 0000",
    col1: (
      <InfoProfile name="Olivia Rhye" phone="+234 803 0000" image={personOne} />
    ),
    col2: "NGN 34,600",
    col3: "Jan 6, 2022",
    col4: "Mazda - Model Q",
    col5: "active",
  },

  {
    id: 7,
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
    col4: "Toyota - Model A",
    col5: "successful",
  },
  {
    id: 8,
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
    col4: "Lexus - Model R",
    col5: "failed",
  },
  {
    id: 9,
    // image: personThree,
    // name: "James Warri",
    // phone: "+234 803 0000",
    // col1: (
    //   <InfoProfile
    //     name="James Warri"
    //     phone="+234 803 0000"
    //     image={personThree}
    //   />
    // ),
    // col2: "NGN 19,580",
    // col3: "Jan 6, 2022",
    // col4: "Lexus - Model R",
    // col5: "failed",
  },
];
