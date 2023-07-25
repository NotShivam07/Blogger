import { useEffect, useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Sidebar() {
    const [cats,setCats]=useState([]);
    useEffect(()=>{
        const getCats=async ()=>{
            const res=await axios.get('/categories');
            console.log(res);
            setCats(res.data);
        }
        getCats();
    },[])

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='sidebarImg' src="http://localhost:5000/images/pp.png" alt=""/>

            <p>I'm Shivam Pawar, Web Developer. I have expertise in the field of MERN and love to make real life projects. This is a blog app developed using Nodejs as Backend and React as front end. MongoDB is used as database in this project.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarList'>
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className='link' style={{margin:"1px"}}>
                    <li className='sidebarListItem'>{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
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
        </div>
    </div>
  )
}
