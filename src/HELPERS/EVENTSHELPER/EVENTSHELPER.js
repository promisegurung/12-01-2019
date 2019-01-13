import { allEvents } from "../../eventsMockData";

const EVENTSHELPER = pageNo => {
  const x = pageNo - 1;
  const slice = allEvents.slice(x * 9, pageNo * 9);
  const lastPage = Math.ceil(allEvents.length / 9);
  return [slice, lastPage];
};

export default EVENTSHELPER;
