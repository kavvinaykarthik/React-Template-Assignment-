import React from 'react'
import ReactDOM from 'react-dom'
import Personal from './components/Personal'
import About from'./components/About'
import Interest from './components/Interests'
import Footer from './components/Footer'
const Body=()=>{
  return(
    <div className='bodya'>
      <Personal/>
      <About/>
      <Interest/>
      <Footer/>
      </div>  
  )
}

ReactDOM.render(<Body/>,document.getElementById('root'));