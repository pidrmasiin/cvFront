import React from 'react'

const Sarake = ({ kieli, db, glink, applink, appname }) => {
    var huom = ""
    if(appname === "Puhelinluettelo"){
        huom = " (kurssi kesken)"
    }

    return(
            <tr>
              <td>{kieli}</td>
              <td>{db}</td>
              <td><a href={glink}>{glink}</a></td>   
              <td><a href={applink}>{appname}</a><a>{huom}</a></td>            
            </tr>
    )
}

export default Sarake