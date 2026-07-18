// @project
import branding from '@/branding.json';
import { DynamicComponentType } from '@/enum';

export const clientele = {
  title: 'Clientes que confiam no nosso trabalho',
  clienteleList: [
    { name: 'Empresa 1' },
    { name: 'Empresa 2' },
    { name: 'Empresa 3' },
    { name: 'Empresa 4' },
    { name: 'Empresa 5' },
    { name: 'Empresa 6' },
    { name: 'Empresa 7' },
    { name: 'Empresa 8' }
  ]
};

export const clientele2 = {
  title: '4,000+ companies already growing',
  clienteleList: [
    { image: { component: 'clientele/Techlify', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Marketly', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Realtor', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Financely', type: DynamicComponentType.IMAGE } },
    { image: { component: 'clientele/Realtor', type: DynamicComponentType.IMAGE } }
  ]
};
