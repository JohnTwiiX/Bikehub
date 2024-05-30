import { HttpInterceptorFn } from '@angular/common/http';

export const httpXSRFInterceptor: HttpInterceptorFn = (req, next) => {
  const csrfToken = getCsrfToken();

  if (csrfToken) {
    const clonedReq = req.clone({
      withCredentials: true,
      setHeaders: {
        'X-CSRFToken': csrfToken
      }
    });
    return next(clonedReq)
  }
  return next(req);
};


function getCsrfToken() {
  if (!document) {
    throw new Error('This code must be executed in a browser environment');
  }

  let cookies = document.cookie.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf('=');
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    if (name === 'csrftoken') {
      return cookie.substr(eqPos + 1);
    }
  }
  return null;
}