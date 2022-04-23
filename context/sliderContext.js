import React from "react";

const SliderContext=React.createContext({Popular:'',Dance:'',Instrument:'',Energy:''});
export const SliderProvider =({children}) =>{
    const [Slider, setSlider] = React.useState('');
    return (
        <SliderContext.Provider value={{}}>
            {children}
        </SliderContext.Provider>
    )
    
}
export const useSliderContext = () => React.useContext(SliderContext);