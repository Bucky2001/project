'use strict';

const overlay = document.querySelector('.backblur');
const createAccountPage = document.querySelector('#createAccountPage');
const loginAccountPage = document.querySelector('#loginAccountPage');
const navbar = document.querySelector('.highlight-text');
const loginClose = document.querySelector('.loginClose');
const loginClose2 = document.querySelector('.loginClose2');
const loginPageGo = document.querySelector('#loginPageGo');
const createAccountPageGo = document.querySelector('#createAccountPageGo');

function showCreateAccountPage() {
  createAccountPage.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hidePages() {
  createAccountPage.classList.add('hidden');
  overlay.classList.add('hidden');
  loginAccountPage.classList.add('hidden');
}

navbar.addEventListener('click', function (e) {
  e.preventDefault();
  showCreateAccountPage();
});

loginClose.addEventListener('click', function (e) {
  e.preventDefault();
  hidePages();
});

loginClose2.addEventListener('click', function (e) {
  e.preventDefault();
  hidePages();
});

loginPageGo.addEventListener('click', function (e) {
  e.preventDefault();
  createAccountPage.classList.add('hidden');
  loginAccountPage.classList.remove('hidden');
});

createAccountPageGo.addEventListener('click', function (e) {
  e.preventDefault();
  createAccountPage.classList.remove('hidden');
  loginAccountPage.classList.add('hidden');
});
