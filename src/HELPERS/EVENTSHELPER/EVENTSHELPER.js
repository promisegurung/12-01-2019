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
  return [finalArray, Math.ceil(array.length / 9)];
}

function initializeFilter(pageNo, filters, array) {
  const dublicatedArray = [];
  const x = pageNo - 1;
  filters.forEach(filter =>
    array.forEach(el => {
      el.categories.forEach(cat => {
        if (filter === cat) {
          dublicatedArray.push(el);
        }
      });
    })
  );
  const finalArray = Object.values(
    dublicatedArray.reduce(
      (acc, cur) => Object.assign(acc, { [cur.id]: cur }),
      {}
    )
  );
  return [
    finalArray.slice(x * 9, pageNo * 9),
    Math.ceil(finalArray.length / 9)
  ];
}

export default EVENTSHELPER;
