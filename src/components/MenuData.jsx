import { ImHome3 } from 'react-icons/im';
import { BiMicrophone } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

export const MenuData = [

    {
        nombre: 'Home',
        cName: 'menu__link',
        icono: <ImHome3 />,
        ruta: '/',
    },

    {
        nombre: 'Artistas',
        cName: 'menu__link',
        icono: <BiMicrophone />,
        ruta: '/artistas',
    },

    {
        nombre: 'Contacto',
        cName: 'menu__link',
        icono: <HiOutlineMail />,
        ruta: '/contacto',
    }
]