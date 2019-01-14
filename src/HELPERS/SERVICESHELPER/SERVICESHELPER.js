import { allServices } from "../../servicesMockData";

const SERVICESHELPER = pageNo => {
  const x = pageNo - 1;
  const slice = allServices.slice(x * 9, pageNo * 9);
  const lastPage = Math.ceil(allServices.length / 9);
  return [slice, lastPage];
};

export default SERVICESHELPER;
