import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div><h1>Custom App!!</h1></div>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const reactELement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<StrictMode>

    <App/>

    // <MyApp /> 
    // MyApp() //can use as function
    //anotherElement //can directly use component
    // reactELement  //using react component (with the help of react render)
  //</StrictMode>,
)
