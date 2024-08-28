import React from 'react'
import {Link} from 'react-router-dom'

 const Header = ({isLoggedIn,userType,onLogout}) => {


  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        {
            isLoggedIn ? (
                <>
                {userType==='admin' ? (
                    <Link to='admin'>Admin DashBoard</Link>
                ):(
                    <Link to='products'>Products</Link>
                )}
                <button onClick={onLogout}>Logout</button>
                </>
            ):(
                <Link to='/login'>Login</Link>
            )
        }
      </nav>
    </header>
  )
}

export default Header