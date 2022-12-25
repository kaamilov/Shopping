import React from 'react'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Header = () => {
    const dispatch =useDispatch()
    const {cart} =useSelector(state=>state.product)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand mx-3" href="#">
          CodeWithViju's Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto"></ul>
          <div className="div-inline my-2 my-lg-0">
            <Link to={"/cart"}>
              <button
                className="btn btn-primary my-2 my-sm-0  mx-3"
                type="submit"
              >
                Cart: {cart.length}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Header