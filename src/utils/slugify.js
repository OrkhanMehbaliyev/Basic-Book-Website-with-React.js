/**
 * Function for trimming sequential spaces in a string
 * @param {string} str
 * @returns {string}
 */
function trimAll(str) {
  let strArr = str.split("");
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== " ") {
      newArr.push(strArr[i]);
    } else {
      if (
        i != 0 &&
        i <= strArr.length - 1 &&
        strArr[i + 1] !== " " &&
        newArr.length > 0
      ) {
        newArr.push(strArr[i]);
      }
    }
  }

  if (newArr[newArr.length - 1] == " ") newArr.pop();
  return newArr.join("");
}

/**
 * It return slugified version of a string (e.g: "Hello world!" => "hello-world")
 * @param {string} str
 * @returns {string}
 */
function slugify(str) {
  const slugifiedStr = trimAll(str.replace(/[^\w\s]+/g, " "))
    .toLowerCase()
    .split(" ")
    .join("-");
  return slugifiedStr;
}

const test = "Heart of Darkness by Joseph Conrad (Illustrated)";
console.log(slugify(test));
