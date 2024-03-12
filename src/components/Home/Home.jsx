import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h2>Welcome to the Learning Management System</h2>
        <div>
            <Link to='/admin' style={{marginRight: '10px'}}>Login as Admin</Link>
            <Link to='/student'>Login as Student</Link>
        </div>
    </div>
  )
}

export default Home;