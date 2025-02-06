import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById('root'))

function Header(){
   return (
      <header className='header'>
         <img src = ".\src\assets\logo.png" width="80px" alt="logo"/>
         <nav>
            <ul className="nav-list">
               <li><a className="nav-list-items">home</a></li>
               <li><a className="nav-list-items">about</a></li>
               <li><a className="nav-list-items">contact</a></li>
            </ul>
         </nav>
      </header>
   )
}
function MainBody(){
   return(
      <main>
         <h1>project</h1>
            <ol>
               <li>learing react.js as frontend</li>
               <li>will learing node.js as backend</li>
               <li>and postgres as database.</li>
            </ol>
      </main>
   )
}
function Footer(){
   return (
      <p> All rights reserved. </p>
   )
}

root.render(
  <main>
      <Header/>
      <MainBody/>
      <Footer/>
  </main>
)
