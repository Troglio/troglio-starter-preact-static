import React from 'react'
import {Link} from 'react-static'
//

export default () => (
  <div style={{display: "flex", flexDirection:"column", height: "100%", justifyContent:"space-around", alignItems:"center"}}>
    <div className="wrapper" style={{display:"flex", fontSize:"24vw", alignItems:"baseline", justifyContent:"center", paddingTop:"65px"}}>
      <div>404</div>
    </div>
    <div style={{display: "flex", justifyContent:"center"}}>
      <Link to="/" style={{border:"1px solid", padding:"10px 20px", borderRadius:"5px"}}>{"<< Go back home"}</Link>
    </div>
  </div>
)
