import React, { createContext, useState, useContext  } from 'react'


const stateContext = createContext();

const getFreshContext = () => {
    return {
        participantId: 0,
        timeTaken: 0,
        selectedOptions: []
    }
}

export function useStateContext() {
    const { context, setContext } = useContext(stateContext)
    return { context,
        setContext: obj => {  setContext ({...context, ...obj })}

    };

}

function ContextProvider({ children }) {
const [context, setContext] = useState(getFreshContext())


  return (
    <stateContext.Provider value={{context, setContext}}>
        {children}
    </stateContext.Provider>
  )
}

export default ContextProvider;
