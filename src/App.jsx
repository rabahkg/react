
// import './App.css'
// import Basic from './Basic'
// import Conditional from './embedding-expression/Conditional'
// import Welcome from './embedding-expression/Welcome'

// function App() {

//   return (
//     <>
//    {/* -----------------embedding expression---------------- */}
//   {/* <Basic/> */}
//   {/* <Welcome/> */}
//   {/* <CallingFunction/> */}
//   <Conditional/>
//     </>
//   )
// }

// export default App



import React, { Component } from 'react'
import BasicClass from './class-component/BasicClass'
import Counter from './class-component/Counter'
import Mounting from './class-component/life-cycle-methods/Mounting'
import Update from './class-component/life-cycle-methods/Update'

export default class App extends Component {
  render() {
    return (
      <div>
        <BasicClass/>
        <Counter/>
<Mounting/>
<Update/>

        {/* ---------life-cycle-method -------- */}
        
      </div>
    )
  }
}
