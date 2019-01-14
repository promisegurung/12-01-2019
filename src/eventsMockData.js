// imports image source

import Event1 from "./assets/eventsView/event-1.png";
import Event2 from "./assets/eventsView/event-2.png";
import Event3 from "./assets/eventsView/event-3.png";
import Event4 from "./assets/eventsView/event-4.png";
import Event5 from "./assets/eventsView/event-5.png";
import Event6 from "./assets/eventsView/event-6.png";
import Event7 from "./assets/eventsView/event-3.png";
import Event8 from "./assets/eventsView/event-4.png";
import Event9 from "./assets/eventsView/event-2.png";

// Events Categories

export const eventsCategory = [
  "All",
  "Parties",
  "Concerts",
  "Social Events",
  "Live Music",
  "Free",
  "Movies",
  "Outdoor",
  "Conference",
  "Festivals"
];

// Default Events************************************************************************************************************
export const sixEvents = [
  {
    id: "event-1",
    title: "Halloween Special: 90's EDITION",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event1,
    date: { date: "11/01/2019", day: "Fri", time: "18:00" },
    location: "Camden, London",
    price: "21.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£21.00 - £36.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  },
  {
    id: "event-2",
    title: "Play For Fun",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event2,
    date: { date: "19/10/2019", day: "Sat", time: "19:00" },
    location: "Harrow, London",
    price: "15.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£15.00 - £20.00",
    refundPolicy: "No refunds",
    categories: ["Parties", "Live Music"]
  },
  {
    id: "event-3",
    title: "SWEET SWEET: Live Music",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event3,
    date: { date: "9/02/2019", day: "Thurs", time: "18:00" },
    location: "Aldershot, UK",
    price: "18.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£18.00 - £32.00",
    refundPolicy: "No refunds",
    categories: ["Parties", "Live Music", "Concerts"]
  },
  {
    id: "event-4",
    title: "LEAF DownTown ft. Ms Jackson",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event4,
    date: { date: "22/03/2019", day: "Fri", time: "21:00" },
    location: "Tottenham, London",
    price: "25.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£25.00 - £98.00",
    refundPolicy: "No refunds",
    categories: ["Concerts", "Live Music", "Outdoor", "Festivals"]
  },
  {
    id: "event-5",
    title: "Cosmic Mirage: Space Jazz",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event5,
    date: { date: "27/05/2019", day: "Sat", time: "19:00" },
    location: "Vauxhall, London",
    price: "20.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£20.00 - £30.00",
    refundPolicy: "No refunds",
    categories: ["Social Events", "Movies"]
  },
  {
    id: "event-6",
    title: "NEW YEAR 2018 PARTY",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event6,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "Waterloo, London",
    price: "29.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£29.00 - £45.00",
    refundPolicy: "No refunds",
    categories: ["Parties", "Social Events"]
  }
];

// Months
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const allEvents = [
  {
    id: "event-1",
    title: "Halloween Special: 90's EDITION",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event1,
    date: { date: "11/01/2019", day: "Fri", time: "18:00" },
    location: "Camden, London",
    price: "21.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£21.00 - £36.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  },
  {
    id: "event-2",
    title: "Play For Fun",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event2,
    date: { date: "19/10/2019", day: "Sat", time: "19:00" },
    location: "Harrow, London",
    price: "15.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£15.00 - £20.00",
    refundPolicy: "No refunds",
    categories: ["Parties", "Live Music"]
  },
  {
    id: "event-3",
    title: "SWEET SWEET: Live Music",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event3,
    date: { date: "9/02/2019", day: "Thurs", time: "18:00" },
    location: "Aldershot, UK",
    price: "18.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£18.00 - £32.00",
    refundPolicy: "No refunds",
    categories: ["Parties", "Live Music", "Concerts"]
  },
  {
    id: "event-4",
    title: "LEAF DownTown ft. Ms Jackson",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event4,
    date: { date: "22/03/2019", day: "Fri", time: "21:00" },
    location: "Tottenham, London",
    price: "25.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£25.00 - £98.00",
    refundPolicy: "No refunds",
    categories: ["Concerts", "Live Music", "Outdoor", "Festivals"]
  },
  {
    id: "event-5",
    title: "Cosmic Mirage: Space Jazz",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event5,
    date: { date: "27/05/2019", day: "Sat", time: "19:00" },
    location: "Vauxhall, London",
    price: "20.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£20.00 - £30.00",
    refundPolicy: "No refunds",
    categories: ["Social Events", "Movies"]
  },
  {
    id: "event-6",
    title: "NEW YEAR 2018 PARTY",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event6,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "Waterloo, London",
    price: "29.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£29.00 - £45.00",
    refundPolicy: "No refunds",
    categories: ["Parties", "Social Events"]
  },
  {
    id: "event-7",
    title: "Lovely Mirage: Space Jazz",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event7,
    date: { date: "27/05/2019", day: "Sat", time: "19:00" },
    location: "Vauxhall, London",
    price: "FREE",
    organiser: "The Lorem Ipsum",
    fullPrice: "FREE",
    refundPolicy: "No refunds",
    categories: ["Free"]
  },
  {
    id: "event-8",
    title: "Build your Empire: Beast Mode",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event8,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "Waterloo, London",
    price: "29.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£29.00 - £45.00",
    refundPolicy: "No refunds",
    categories: ["Conference"]
  },
  {
    id: "event-9",
    title: "Play and Bleed: ActionCut",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event9,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "Waterloo, London",
    price: "29.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£29.00 - £45.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  },
  {
    id: "event-10",
    title: "The calling of Brogues",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event1,
    date: { date: "15/09/2019", day: "Sun", time: "18:00" },
    location: "SOHO, London",
    price: "100.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£100.00 - £450.00",
    refundPolicy: "No refunds",
    categories: ["Movies"]
  },
  {
    id: "event-11",
    title: "NEW YEAR 2098 PARTY",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event2,
    date: { date: "55/09/2019", day: "Sun", time: "18:00" },
    location: "Waterloo, France",
    price: "FREE",
    organiser: "The Lorem Ipsum",
    fullPrice: "FREE",
    refundPolicy: "No refunds",
    categories: ["Conference", "Free"]
  },
  {
    id: "event-12",
    title: "Summer Something Fest",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event9,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "SOHO, London",
    price: "209.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£209.00 - £745.00",
    refundPolicy: "No refunds",
    categories: ["Outdoor"]
  },
  {
    id: "event-13",
    title: "NEW YacthY",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event9,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "Waterloo, London",
    price: "900.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£900.00 - £4950.00",
    refundPolicy: "No refunds",
    categories: ["Social Events"]
  },
  {
    id: "event-14",
    title: "Cello mello",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event9,
    date: { date: "5/10/2019", day: "Mon", time: "18:00" },
    location: "Pilot, London",
    price: "300.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£300.00 - £450.00",
    refundPolicy: "No refunds",
    categories: ["Live Music", "Concerts"]
  },
  {
    id: "event-15",
    title: "The 15th PooooRTY",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event9,
    date: { date: "15/09/2019", day: "Sun", time: "15:00" },
    location: "Waterloo, London",
    price: "150.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£150.00 - £415.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  },
  {
    id: "event-16",
    title: "LuckyChucky make a bucky",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event5,
    date: { date: "27/05/2019", day: "Sat", time: "19:00" },
    location: "Aldershot",
    price: "20.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£20.00 - £30.00",
    refundPolicy: "No refunds",
    categories: ["Conference"]
  },
  {
    id: "event-17",
    title: "OLD YEAR 2016 PARTY",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event6,
    date: { date: "5/09/2019", day: "Sun", time: "18:00" },
    location: "Farnborough",
    price: "29.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£29.00 - £45.00",
    refundPolicy: "No refunds",
    categories: ["Parties"]
  },
  {
    id: "event-18",
    title: "Monkey Space Jazz",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event7,
    date: { date: "27/05/2019", day: "Sat", time: "19:00" },
    location: "Vauxhall, London",
    price: "20.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£20.00 - £30.00",
    refundPolicy: "No refunds",
    categories: ["Live Music"]
  },
  {
    id: "event-19",
    title: "Me ALONE",
    description:
      "Lorem ipsum dolor sit amet, dicit deterruisset in est, no atqui viderer deterruisset sea. Albucius accusata no vim, ne per epicuri interpretaris, id placerat conceptam eam. Nam id stet atqui, vel an duis tollit convenire. Quo ut denique recteque. No iudico animal constituto vim, ius te verear accusamus. Per cu causae apeirian. Pri ei ubique electram, ei est vidit porro mundi. Cu eum causae alienum, sed ad dico velit.Tation omittam salutandi eos id, vis odio dicit ex, natum modus lorem cum ei. Ius te blandit fabellas volutpat. Id sea nihil labitur sensibus, tota idque ceteros at nam. Sea verterem moderatius ex, mei at deleniti imperdiet theophrastus. Veritus salutatus no eos, no usu viris offendit.",
    src: Event7,
    date: { date: "27/05/2019", day: "Sat", time: "19:00" },
    location: "Wembley, London",
    price: "20.00",
    organiser: "The Lorem Ipsum",
    fullPrice: "£20.00 - £30.00",
    refundPolicy: "No refunds",
    categories: ["Movies"]
  }
];
