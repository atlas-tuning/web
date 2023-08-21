import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Vehicle Setup',
    children: [
      {
        title: 'Engine',
        icon: 'cube',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Sensors',
        icon: 'bar-chart',
        link: '/pages/layout/stepper',
      },
    ]
  },
  {
    title: 'TABLES',
    group: true,
  },
  {
    title: 'Fueling',
    icon: 'droplet',
    children: [
      {
        title: 'Injection Timing',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Injector Hold Time',
        link: '/pages/layout/stepper',
      },
    ],
  },
  {
    title: 'Ignition',
    icon: 'flash',
    children: [
      
    ],
  }
];
