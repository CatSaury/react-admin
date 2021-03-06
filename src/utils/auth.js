const TOKEN_NAME = 'login_token';

const getToken = () => localStorage.getItem(TOKEN_NAME);

const isAuth = () => !!getToken();

export { getToken, isAuth }