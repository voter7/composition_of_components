import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from './Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Game />
//   </React.StrictMode>
// );
