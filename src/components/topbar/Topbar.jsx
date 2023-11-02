import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Topbar() {
  const { user ,dispatch} = useContext(Context); 
  const PF="http://localhost:5000/images/"
  const handleLogout=()=>{
     dispatch({type:"LOGOUT"});
  }
  return (

    <div className='top'>
        <div className="topLeft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistItem">
                <Link className="link" to="/">HOME</Link>
                </li>
                <li className="toplistItem">
                <Link className="link" to="/Destination">
              DESTINATIONS
                </Link>
                </li>
                <li className="toplistItem">
                <Link className="link" to="/ideas">
                 IDEAS
                 </Link>
                </li>
                <li className="toplistItem">
                <Link className="link" to="/Write">
              WRITE
          </Link> 
                </li>
                {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
            </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link className="link" to="/Settings">
            <img className="topimg"src="https://images.pexels.com/photos/4067768/pexels-photo-4067768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </Link>
          
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
            <Link className="link" to="/login">
              LOGIN
           </Link>         
            </li>
            <li className="toplistItem">
            <Link className="link" to="/Register">
              REGISTER
           </Link>           
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>

   </div>
  )
}
