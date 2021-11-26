import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import LogoDark from '../../Assets/LogoDark.png';
import Logo from '../../Assets/LOGO.png';


import './Header.scss';

const Header = () =>{
    let navigate  = useNavigate();
    const location = useLocation();
    console.log(location.pathname);
    return(
        <div className="Header">
            <nav>
                <div className="HeaderRoot">
                    <Link to={"/"}>
                        <img
                            src={location.pathname=="/"? Logo : LogoDark}
                            alt='Cosmpawliton Logo'
                            className='brand-logo'
                            onClick={() => navigate('/')}
                            width={300}
                        />
                    </Link>
                    {location.pathname=="/" &&
                        <div className="HeaderSections">
                            <h2 className={"HeaderItem" }>Locate an animal</h2>
                            <h2 className={"HeaderItem"}>Adoption</h2>
                            <Link to={"/ngos"}>
                                <h2 className={"HeaderItem"}>Find NGOs</h2>
                            </Link>
                            <h2 className={"HeaderItem"}>Contact us</h2>
                        </div>
                    }
                    {location.pathname!="/" &&
                        <div className="HeaderSections">
                            <h2 className={"HeaderItem Dark" }>Locate an animal</h2>
                            <h2 className={"HeaderItem Dark"}>Adoption</h2>
                            <Link to={"/ngos"}>
                                <h2 onClick={() => navigate('/ngos')} className={"HeaderItem Dark"}>Find NGOs</h2>
                            </Link>
                            <h2 className={"HeaderItem Dark"}>Contact us</h2>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header;