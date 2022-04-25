import http from 'app/helpers/http';
export const LoginService = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000, { token: 'abc' }));
};

export const GetUserService = (userId) => {
  return http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};