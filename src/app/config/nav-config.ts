import {SpaNavItems} from "../spa-nav-list/spa-nav-item";
import { faTable,faRedo,faCog,faQuestionCircle,faWindowRestore,faBrain } from '@fortawesome/free-solid-svg-icons';

export const ITEMS: SpaNavItems = {
    top: [
      {url: '/dashboard/', name: 'Dashboard', icon: faTable},
      {url: '/driver-updater/', name: 'Update My Drivers', icon: faRedo},
      {url: '/experiments/', name: 'Experiments', icon: faBrain},
    ],
    bottom: [
      {url: '/help/', name: 'Help', icon: faQuestionCircle},
      {url: '/settings/', name: 'Settings', icon: faCog},
      {url: '/winapi/', name: 'Windows API', icon: faWindowRestore}
    ]
  };
