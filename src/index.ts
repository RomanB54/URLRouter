import { initPage } from './initPage';
import { Router } from './router';
import './style.css';

const app = document.querySelector('.app') as HTMLDivElement;
if (app) {
  initPage(app);
}

const router = new Router();

if (PRODUCTION) {
  document
    .querySelectorAll('nav a')
    .forEach((link: HTMLAnchorElement): void => {
      link.href = '/URLRouter' + link.pathname;
    });
}

router.addRoute({
  path: '/home',
  render: () => `<h1>Главная страница</h1><p>Главная!</p>`,
  onBeforeEnter: async () => {
    console.log('Before entering Home');
  },
  onEnter: async () => {
    console.log('Entered Home');
  },
  onLeave: async () => {
    console.log('Leaving Home');
  },
});

router.addRoute({
  path: '/contacts',
  render: () => `<h1>Контакты</h1><p>Наши контакты.</p>`,
  onBeforeEnter: async () => {
    console.log('Before entering Contacts');
  },
  onEnter: async () => {
    console.log('Entered Contacts');
  },
  onLeave: async () => {
    console.log('Leaving Contacts');
  },
});

router.addRoute({
  path: '/about',
  render: () => `<h1>О нас</h1><p>Это о нас.</p>`,
  onBeforeEnter: async () => {
    console.log('Before entering About');
  },
  onEnter: async () => {
    console.log('Entered About');
  },
  onLeave: async () => {
    console.log('Leaving About');
  },
});

router.addRoute({
  path: '/about/us',
  render: () => `<h1>О нас2</h1><p>Это о нас2.</p>`,
  onBeforeEnter: async () => {
    console.log('Before entering About / Us');
  },
  onEnter: async () => {
    console.log('Entered About / Us');
  },
  onLeave: async () => {
    console.log('Leaving About / Us');
  },
});

router.addRoute({
  path: '/login',
  render: () => `<h1>Авторизация</h1><p>Авторизация</p>`,
  onBeforeEnter: async () => {
    console.log('Before entering Login');
  },
  onEnter: async () => {
    console.log('Entered Login');
  },
  onLeave: async () => {
    console.log('Leaving Login');
  },
});

const links = document.querySelectorAll('nav a');
links.forEach((link) => {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();
    const path = link.getAttribute('href') || '';
    router.navigate(path);
  });
});
