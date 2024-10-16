import React, { useState } from 'react'
import "../Style/Navbar.css"
import { Link, Route, Routes } from 'react-router-dom'
import { LuMoon } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import HeroSec from './HeroSec';




function Navbar() {
    const [mood,setmood]=useState(true)

    

    function changemood() {
        setmood(!mood); 
    }
    
    return (
        <>
            <div className='main' style={mood ? { backgroundColor: '#FFFF'} : { backgroundColor: '#0d1421',color:'white'  }}>

                <div className="fy" >
                    <h4 style={mood ? {color:'black'} : { color:'white'  }}>Sampatti</h4>

                </div>

                <div className="sy" style={mood ? {color:'black'} : { color:'white'  }}>
                    <Link className='navlink' to="/"            style={mood ? {color:'black'} : { color:'white',fontWeight:'300'  }}>Home</Link>
                    <Link className='navlink' to="/Dashboard"  style={mood ? {color:'black'} : { color:'white',fontWeight:'300'  }}>My Dashboard</Link>
                    <Link className='navlink' to="/Dashboard"  style={mood ? {color:'black'} : { color:'white',fontWeight:'300'  }}>My Portfolio</Link>
                    <Link className='navlink' to="/Efficiency"     style={mood ? {color:'black'} : { color:'white',fontWeight:'300'  }}>Products</Link>
                </div>

                <div className="ty">
                <Link className='navlink' to="/t"  style={mood ? {color:'black'} : { color:'white',fontWeight:'300'  }}><FaStar style={{height:'12px',color:'gray',marginRight:'8px',marginBottom:'4px'}} />WatchList</Link>
                <span style={mood ? {color:'black'} : { color:'white'  }} className='moodicon' onClick={changemood}>{mood ? <LuMoon style={{height:'20px'}}/>:<IoSunny style={{height:'20px'}}/>}</span>
                <Link className='navlink' to="/t"     style={mood ? {color:'white'} : { color:'black',fontWeight:'350'  }}>  <button type="button" className="btn btn-primary">Login</button></Link>
                </div>
            
            </div>
            

            <div>
                <Routes>
                     <Route path='/' element={<HeroSec />}> </Route>
                </Routes>
            </div>

        </>
    )
}

export default Navbar
