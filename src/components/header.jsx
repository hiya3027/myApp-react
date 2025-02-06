export default function Header(){
    return (
        <header className='header'>
           <img src = ".\src\assets\logo.png" width="80px" alt="logo"/>
           <nav>
              <ul className="nav-list">
                 <li className="nav-list-items"><a href ="#">home</a></li>
                 <li className="nav-list-items"><a href ="#" >about</a></li>
                 <li className="nav-list-items"><a href ="#">contact</a></li>
              </ul>
           </nav>
        </header>
     )
}