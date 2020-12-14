'Componente que permite reutilizar el Header en todas las vistas';

import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
