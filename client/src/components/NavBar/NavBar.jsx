import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"
import "./Navbar.scss"
import { useSelector } from 'react-redux';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const products = useSelector((state)=>state.cart.products)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className='left'></div>
                <div className="item">
                    <img src="img/en.png" alt="" />
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link to="/products/1" className='link'>Women</Link>
                </div>
                <div className="item">
                    <Link to="/products/2" className='link'>Men</Link>
                </div>
                <div className="item">
                    <Link to="/products/3" className='link'>Children</Link>
                </div>
                <div className='center'>
                    <Link className='link' to="/" >Clothes Store</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link to="/" className='link'>Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link to="/" className='link'>About</Link>
                    </div>
                    <div className='item'>
                        <Link to="/" className='link'>Contact</Link>
                    </div>
                    <div className='item'>
                        <Link to="/" className='link'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon" onClick={() => {
                            setOpen(!open)
                        }}>
                            <ShoppingCartIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>

                </div>
            </div>
            {open && <Cart></Cart>}
        </div>
    )
}

export default NavBar