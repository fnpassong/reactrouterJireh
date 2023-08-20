import { ImHome3 } from 'react-icons/im';
import { BiMicrophone } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

const iconStyles = {color: 'hsl(25 85% 0% /0.5) '}

export const MenuData = [

    {
        nombre: 'Home',
        cName: 'menu__link',
        icono: <ImHome3 style={iconStyles} />,
        ruta: '/',
    },

    {
        nombre: 'Artistas',
        cName: 'menu__link',
        icono: <BiMicrophone style={iconStyles} />,
        ruta: '/artistas',
    },

    {
        nombre: 'Contacto',
        cName: 'menu__link',
        icono: <HiOutlineMail style={iconStyles} />,
        ruta: '/contacto',
    }
]