import React from 'react'
import "../Style/Loading.css"
import { SiBitcoinsv } from "react-icons/si";



function Loading() {
  return (
    <>
        <div className="loadingmain"><div className="bitlogo"><SiBitcoinsv style={{height:'50px',width:'50px'}} color='#3861fb'/></div></div>
    </>
  )
}

export default Loading
