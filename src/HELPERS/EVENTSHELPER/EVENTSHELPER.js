import { allEvents } from "../../eventsMockData";

const EVENTSHELPER = (pageNo, filters) => {
  console.log(filters);
  let slice = [];
  let lastPage = null;
  if (filters.includes("All")) {
    [slice, lastPage] = nineEvents(pageNo, allEvents);
  } else {
    [slice, lastPage] = initializeFilter(pageNo, filters, allEvents);
  }
  return [slice, lastPage];
};

function nineEvents(pageNo, array) {
  let finalArray = [];
  const x = pageNo - 1;
  finalArray = array.slice(x * 9, pageNo * 9);
  return [finalArray, Math.ceil(allEvents.length / 9)];
}

function initializeFilter(pageNo, filters, array) {
  const finalArray = [];
  const x = pageNo - 1;
  filters.forEach(filter =>
    array.forEach(el => {
      el.categories.forEach(cat => {
        if (filter === cat) {
          finalArray.push(el);
        }
      });
    })
  );
  return [
    finalArray.slice(x * 9, pageNo * 9),
    Math.ceil(finalArray.length / 9)
  ];
}

export default EVENTSHELPER;
