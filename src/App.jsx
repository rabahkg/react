
// import './App.css'
// import Basic from './Basic'
// import Conditional from './embedding-expression/Conditional'
// // import Welcome from './embedding-expression/Welcome'

import {  Link, Route, Router, Routes } from "react-router-dom"
// import Home from "./functional-components/hooks/useContext/theme/Home"
import { ThemeProvider } from "./functional-components/hooks/useContext/theme/ThemeContext"
import { UserApiContext, UserApiProvider } from "./functional-components/hooks/useContext/user-list/UserApiContext"
import UserList from "./functional-components/hooks/useContext/user-list/UserList"
import Home from "./React-Router-Dom/Home"
import About from "./React-Router-Dom/About"
import Products from "./dynamic-routing/Products"
import ProductDetail from "./dynamic-routing/ProductDetail"
import Indexxx from "../task/Indexxx"
import SimpleForm from "./form/SimpleForm"
import Form from "./form/Form"

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
{/* <UserApiProvider>
  <UserList/>
</UserApiProvider> */}


{/* ----react-router-dom----- */}
{/* 1.basic  */}
{/* <div>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/About'>About</Link>
  </nav>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
  </Routes>

</div> */}



{/* -----dynamic routing--- 
<Routes>
  <Route path='/' element={<Products/>}/>
  <Route path='/products/:id' element={<ProductDetail/>}/>
</Routes>
  */}

{/* 
 <Indexxx/> */}

{/* 
 <SimpleForm/> */}

 <Form/>
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
