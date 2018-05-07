/*eslint-disable*/
import auth0 from 'auth0-js';
import Vue from 'vue';

let webAuth = new auth0.WebAuth({
  domain: 'infinite-robots.auth0.com',
  clientID: 'RQ21zJnaszCdskUEHjsundRVrn2xXZf1',
  redirectUri: 'http://localhost:8080/auth',
  // we will use the api/v2/ to access the user information as payload
  audience: 'https://infinite-robots.auth0.com/api/v2/',
  responseType: 'token id_token',
  scope: 'openid profile'
});

let auth = new Vue({
  computed: {
    token: {
      get: function () {
        return localStorage.getItem('id_token');
      },
      set: function (id_token) {
        localStorage.setItem('id_token', id_token);
      },
    },
    accessToken: {
      get: function () {
        return localStorage.getItem('access_token');
      },
      set: function (accessToken) {
        localStorage.setItem('access_token', accessToken);
      },
    },
    expiresAt: {
      get: function () {
        return localStorage.getItem('expires_at');
      },
      set: function (expiresIn) {
        let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('expires_at', expiresAt);
      },
    },
    user: {
      get: function () {
        return JSON.parse(localStorage.getItem('user'));
      },
      set: function (user) {
        localStorage.setItem('user', JSON.stringify(user));
      },
    }
  },
  methods: {
    login() {
      webAuth.authorize();
    },
    logout() {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user');
        webAuth.authorize();
      })
    },
    isAuthenticated() {
      return new Date().getTime() < this.expiresAt;
    },
    handleAuthentication() {
      return new Promise((resolve, reject) => {
        webAuth.parseHash((err, authResult) => {

          if (authResult && authResult.accessToken && authResult.idToken) {
            this.expiresAt = authResult.expiresIn;
            this.accessToken = authResult.accessToken;
            this.token = authResult.idToken;
            this.user = authResult.idTokenPayload;
            resolve();

          } else if (err) {
            this.logout();
            reject(err);
          }

        })
      })
    }
  }
});

export default {
  install: function (Vue) {
    Vue.prototype.$auth = auth;
  },
};
