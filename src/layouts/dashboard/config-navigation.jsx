import SvgColor from '../../components/svg-color';



// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Usuario',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Adopta',
    path: '/dashboard/products',
    icon: icon('ic_paw'),
  },
  {
    title: 'registra una mascota',
    path: '/dashboard/blog',
    icon: icon('register_pet'),
  },
 
];

export default navConfig;
