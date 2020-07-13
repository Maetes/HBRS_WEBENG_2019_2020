import cookie from 'js-cookie';

export const setCookie = (key: string, value: any, next: any) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
  next();
};

export const removeCookie = (key: string, next: any) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
  next();
};

export const getCookie = (key: string, next: any) => {
  if (process.browser) {
    return cookie.get(key);
  }
  next();
};
