import React from "react";

const footer = ({Items}) => {

const listcount  = Items.length

return(
    <div className="footer-div">
    <h1>Total list {listcount}</h1>
    </div>
)
}

export default footer