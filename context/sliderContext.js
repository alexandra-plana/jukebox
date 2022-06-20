import React from 'react';

const SliderContext = React.createContext({
  Popular: '0.5',
  Dance: '0.5',
  Instrument: '0.5',
  Energy: '0.5',
});
export const SliderProvider = ({ children }) => {
  return <SliderContext.Provider value={{}}>{children}</SliderContext.Provider>;
};
export const useSliderContext = () => React.useContext(SliderContext);
