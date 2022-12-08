// Write Cookie function
export const writeCookie = (key, value, days) => {
  let date = new Date();
  days = days || 7;

  date.setDate(date.getDate() + days);

  let cookie = (document.cookie =
    key +
    "=" +
    value +
    "; expires=" +
    date.toGMTString() +
    "; path=/");

  return cookie;
};

// Get Cookie function
export const getCookie = (cookieName) => {
  // Construct a RegExp object as to include the variable name
  const re = new RegExp(
    `(?<=${cookieName}=)[^;]*`
  );
  try {
    let cookie = document.cookie.match(re)[0]; // Will raise TypeError if cookie is not found
    console.log(cookie);
    return cookie;
  } catch {
    console.log("this-cookie-doesn't-exist");
    return false;
  }
};
