import React from 'react'

import './AppFooter.css'

export default function AppFooter(props) {
    console.log(props);
    // console.log(this.props);
    return (
        
        <div>
            <hr /> 
            <p className="app-footer">This is Footer</p>
            <hr/>
            <p className="app-footer"> 
                 WebSite: <a href={props.website}>Viteos.com</a>
                 CopyRight {props.copyright} 
                 Year {props.year} </p>
        </div>

    )
}