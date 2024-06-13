import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  {
    label: 'Tableau de bords',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Envoie sms',
    icon: 'mail',
    link: '/send-sms'
  },
  {
    label: 'Configuration',
    icon: 'settings',
    subItems: [
      {
        label: 'Sous menu',
        link: '/default'
      }
    ]
  },
  {
    label: 'Gestion utilisateurs',
    icon: 'users',
    subItems: [
      {
        label: 'Profils',
        link: '/default'
      },
      {
        label: 'Utilisateurs',
        link: '/default'
      }
    ]
  },
];
