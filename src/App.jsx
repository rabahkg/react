
// import './App.css'
// import Basic from './Basic'
// import Conditional from './embedding-expression/Conditional'
// // import Welcome from './embedding-expression/Welcome'

import Home from "./functional-components/hooks/useContext/theme/Home"
import { ThemeProvider } from "./functional-components/hooks/useContext/theme/ThemeContext"
import { UserApiContext, UserApiProvider } from "./functional-components/hooks/useContext/user-list/UserApiContext"
import UserList from "./functional-components/hooks/useContext/user-list/UserList"

// import Basic from "./functional-components/Basic"
// import Home from "./functional-components/hooks/useContext/theme/Home"
// import Counter from "./functional-components/hooks/useState/Counter"
// import UseEff from "./functional-components/hooks/useState/useEffect/UseEff"
// import UserList from "./functional-components/hooks/useState/useEffect/UserList"
// import Props from "./functional-components/Props"
// import State from "./functional-components/State"

function App() {

  return (
    <>
   {/* -----------------embedding expression---------------- */}
  {/* <Basic/> */}
  {/* <Welcome/> */}
  {/* <CallingFunction/> */}
  {/* <Conditional/> */}

  {/* -------------functional-compomemts------------ */}
  {/* <Basic/> */}
  {/* <State/> */}
  {/* <Props/> */}
  {/* <Counter/>
  <UseEff/> */}
  {/* <UserList/> */}

  {/* ---useContext---- */}
  {/* ---1.theme--- */}
  {/* <ThemeProvider>
  <Home/>
  </ThemeProvider>
    </> */}


 {/* 2.user List */}
<UserApiProvider>
  <UserList/>
</UserApiProvider>
 
 </>
  )
}

export default App


// ---------------class - components----------------
// import React, { Component } from 'react'
// import BasicClass from './class-component/BasicClass'
// import Counter from './class-component/Counter'
// import Mounting from './class-component/life-cycle-methods/Mounting'
// import Update from './class-component/life-cycle-methods/Update'
// import UnMounting from './class-component/life-cycle-methods/UnMounting'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <BasicClass/>
//         <Counter/>
// <Mounting/>
// <Update/> */}

// <UnMounting/>

//         {/* ---------life-cycle-method -------- */}
        
//       </div>
//     )
//   }
// }
