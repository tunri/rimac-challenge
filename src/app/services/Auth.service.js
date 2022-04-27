import http from 'app/helpers/http';

// se puede aplicar Singleton, pero es mas sencillo tambien declarar de esta forma
// tambien se puede abstraer en una clase con typescript los verbos (get, post, etc..)
// para que se 'hereden'(extend o implements) en las clases servicios e implementarlos

export const LoginService = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000, { token: 'abc' }));
};

export const GetUserService = (userId) => {
  return http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};