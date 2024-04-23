import React from 'react'
import Image from '../images/logo512.png'
import '../index.css'
const Personal=()=>{
    return(
        <div className='personal'>
            <img id='image' src={Image} alt='Good' />
            <h2>Vinay Karthik</h2>
            <h3>Frontend Developer</h3>
            <p>vinaykarthik.website</p>
            <div className='boxpersonal'>
                <a href='www.gmail.com'>Gmail</a>
                <a href='www.twitter.com'>Twitter</a>
            </div>
        </div>
    )
}
export default Personal;