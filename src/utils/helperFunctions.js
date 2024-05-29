import { CART_LSKEY } from "./enums";

/**
 * Throttling is used to execute the first call to a function in a given time interval
 * @param {Function} func
 * @param {number} limit
 * @returns {Function}
 */
export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    }
  };
}

export class CartModel {
  constructor(body, count) {
    this.body = body;
    this.count = count;
  }
}

//LocalStorage operations
export function addToLS(key, data) {
  const prevData = getFromLS(key) ?? [];
  const prevItem = prevData.find((item) => item.body.id === data.body.id);

  if (prevItem) {
    const newData = prevData?.map((item) => {
      if (item?.body?.id == prevItem?.body?.id) {
        return new CartModel(
          prevItem?.body,
          Number(prevItem?.count) + Number(data?.count)
        );
      } else {
        return item;
      }
    });
    localStorage.setItem(key, JSON.stringify(newData));
  } else {
    localStorage.setItem(
      key,
      JSON.stringify([...(getFromLS(key) || []), data])
    );
  }
}

export function updateInLS(key, data) {
  const prevData = getFromLS(key);
  const prevItem = prevData?.find((x) => x?.body?.id == data?.body?.id);

  if (prevItem) {
    const newData = prevData?.map((x) => {
      if (x?.body?.id == prevItem?.body?.id) {
        return data;
      } else {
        return x;
      }
    });
    localStorage.setItem(key, JSON.stringify(newData));
  }
}

export function deleteFromLS(key, data) {
  localStorage.setItem(
    key,
    JSON.stringify(
      getFromLS(key).filter((item) => item?.body?.id != data?.body?.id)
    )
  );
}

export function getFromLS(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}
