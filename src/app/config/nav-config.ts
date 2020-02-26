import {SpaNavItems} from "../spa-nav-list/spa-nav-item";

export const ITEMS: SpaNavItems = {
    top: [
      {url: '/dashboard/', name: 'Dashboard', icon: 'fas fa-table'},
      {url: '/driver-updater/', name: 'Update My Drivers', icon: 'fas fa-redo'},
      {url: '/experiments/', name: 'Experiments', icon: 'fas fa-table'},
    ],
    bottom: [
      {url: '/help/', name: 'Help', icon: 'fas fa-table"'},
      {url: '/settings/', name: 'Settings', icon: 'fas fa-table"'},
      {url: '/winapi/', name: 'Windows API', icon: 'fab fa-windows'}
    ]
  };
