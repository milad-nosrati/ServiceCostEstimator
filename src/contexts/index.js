import { createContext } from "react";


const FormContext = createContext(
    {
        StateClok: 0,
        WomanCunt: 0,
        ManCount: 0,
        handelPlusWoman: () => { },
        handelminesWoman: () => { },
        handelPusMan: () => { },
        handelMinesMan: () => { },
        handelClock: () => { }
    }
)
export default FormContext