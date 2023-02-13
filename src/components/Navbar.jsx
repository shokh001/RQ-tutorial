import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container d-flex justify-between">
                <Link to={'/'} className="navbar-brand">Navbar</Link>
            
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>

                    <ul className="dropdown-menu p-3">
                        <li className='fit-content'><Link className='text-decoration-none' to={'/'}>Home</Link></li>
                        <li className='fit-content'><Link className='text-decoration-none' to='/super-heroes'>Super Heroes</Link></li>
                        <li className='fit-content'><Link className='text-decoration-none' to='/rq-super-heroes'>RQ Super Heroes</Link></li>
                        <li className='fit-content'><Link className='text-decoration-none' to='/rq-parallel'>RQ Parallel</Link></li>
                        <li className='fit-content'><Link className='text-decoration-none' to='/rq-dynamic-parallel'>RQ_Dynamic_Parallel</Link></li>
                        <li className='fit-content'><Link className='text-decoration-none' to='/rq-dependent'>RQ Dependent</Link></li>
                        <li className='fit-content'><Link className='text-decoration-none' to='/rq-paginated'>RQ Paginated</Link></li>
                        <li className='fit-content'><Link className='text-decoration-none' to='/rq-infinite'>RQ Infinite</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar