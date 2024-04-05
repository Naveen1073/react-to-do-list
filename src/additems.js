import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const Additems = ({newItems,setnewitem,handlesubmit}) => {

    const inputref = useRef()
    return (

        <form onSubmit={(e)=>handlesubmit(e)} className="form-div">
            <label>Add Items</label>
            <input autoFocus
                type="text"
                ref={inputref}
                placeholder='ADD ITEMS'
                required
                value={newItems}
                onChange={(e) => setnewitem(e.target.value)} />
            <button type="submit" onClick={()=>inputref.current.focus()} > ADD <FaPlus /></button>


        </form>

    )
}
export default Additems