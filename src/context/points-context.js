import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const PointsContext = createContext();

export default function PointsContextProvider({ children }) {
  const [points, setPoints] = useState(0);

  return (
    <PointsContext.Provider value={[points, setPoints]}>
      { children }
    </PointsContext.Provider>
  );
}

PointsContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
