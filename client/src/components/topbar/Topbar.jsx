import { Link } from 'react-router-dom';
import './topbar.css'
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const Topbar = () => {
    const {user,dispatch}=useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    }
  return (
    <div className='top'>
        <div className="topLeft">
            <Link to='https://www.facebook.com/profile.php?id=100093691878037' target='x'>
                <i class="topIcon fa-brands fa-square-facebook"></i>
            </Link>
            <Link to='https://twitter.com/ShivamS73678624' target='x'>
                <i class="topIcon fa-brands fa-square-twitter"></i>
            </Link>
            <Link to='https://in.pinterest.com/ss6928228/' target='x'>
                <i class="topIcon fa-brands fa-square-pinterest"></i>
            </Link>
            <Link to='https://www.instagram.com/shivam_singh.2403/' target='x'>
                <i class="topIcon fa-brands fa-square-instagram"></i>
            </Link>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/about'>ABOUT</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/contact'>CONTACT</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className='topListItem' onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <Link to='/settings'>
                        <img className='topImg' src={PF+user.profilePic} alt="" />
                    </Link>
                ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link className='link' to='/login'>LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link className='link' to='/register'>REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
