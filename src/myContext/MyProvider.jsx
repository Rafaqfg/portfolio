import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [isPortuguese, setIsPortuguese] = useState(false);

  const ContextObject = {
    isPortuguese,
    setIsPortuguese,
  };

  return (
    <MyContext.Provider value={ ContextObject }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
