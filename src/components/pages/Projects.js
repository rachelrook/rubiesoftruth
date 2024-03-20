import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Projects() {
    return <><br></br><br></br><div className='center'>
      <Link to="/blog">
        <img className="i-size" src='/images/prayers.jpg' alt="prayers of the righteous"/>
        </Link>
      </div></>
}