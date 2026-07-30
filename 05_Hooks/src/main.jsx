import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import useEffect  from './useEffect.jsx'
import Clock from './clock.jsx'

createRoot(document.getElementById('root')).render(
  
    
    <App/>,
    <useEffect/>,
    <Clock/>

  
)


// Most Important Hooks

// You should master these in order:

// useState 
// useEffect 
// useRef
// useContext 
// useReducer
// useMemo
// useCallback 
// Custom Hooks