import { wallet, currency, receipt } from "../assets/icons";

export const cardData = [
  {
    id: 1,
    text: "Total outstanding balance",
    image: wallet,
    info: "6,709,288",
  },
  {
    id: 2,
    text: "Total repayment pending ",
    image: currency,
    info: "72,864",
  },
  {
    id: 3,
    text: "Total trasaction counts",
    image: receipt,
    info: "3,062",
  },
];

export const infoHeaderData = {
  colOne: "customers",
  colTwo: "deposit",
  colThree: "date",
  colFour: "voucher no.",
  colFive: "trans. status",
};
