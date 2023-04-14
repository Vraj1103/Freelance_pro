import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  
  const {pathname} = useLocation();

  const isActive = () => {
    if (window.scrollY >0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

    useEffect(()=>{
      window.addEventListener("scroll",isActive);
      return ()=>{
        window.removeEventListener("scroll",isActive)
      }

    },[]);

   const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
    // email: "hello@gmail.com",
    // phone: "1234567890",
    // address: "123, ABC Street, XYZ City",
    // pincode: "123456",
    // state: "Delhi",
    // country: "India",
   }



  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
          <span className="text">Effitto</span>
          </Link>
          <span className="dot">.</span>
          
        </div>
        <div className="Links">
          <span>Product</span>
          <span>Language</span>
          <span>Location</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Start Earning</span>}
          {!currentUser && <button>Join</button>}
          {currentUser &&(
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://images.pexels.com/photos/8088489/pexels-photo-8088489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
              {
                currentUser?.isSeller && (
                  <>
                  <Link className="link" to="/mygigs">Gigs</Link>
                  <Link className="link" to="/add">Add new Gig</Link>
                  </>
                  )}
                  <Link className="link" to="/orders">Orders</Link>
                  <Link className="link" to="/messages">Messages</Link>
                  <Link className="link" to="/">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
