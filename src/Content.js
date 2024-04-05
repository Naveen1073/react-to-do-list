import React from "react";
import Footer from "./footer";
import { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import Additems from "./additems";
// import Search from "./search";


const Content = () => {
  const API_URL = 'http://localhost:3500/Items';
  const [Items, setItems] = useState([])
  console.log(Items)
  const [newItems, setnewitem] = useState('');

  useEffect(() => {
    const db = async()=>{
      try{
      const response = await fetch(API_URL);
      console.log(response)
      const listitems = await response.json();
      console.log(listitems)
      setItems(listitems)
      }catch(err){
        console.log(err)
      }
    }

    (async()=> await db())()
  }, [])


  const addnewitems = (newvalue) => {
    console.log(newvalue)
    const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
    const finalitems = { id: id, box: false, task: newvalue }
    const listitems = [...Items, finalitems]
    setItems(listitems)
    localStorage.setItem("todo-list", JSON.stringify(listitems))
  }
 
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    console.log(newItems)
    addnewitems(newItems)
    setnewitem('')
  }


  // const [serach,setsearch] = useState('')

  // / Task complete function   / 
  const handlecheck = (id) => {

    const listitems = Items.map((item) =>
      item.id === id ? { ...item, box: !item.box } : item)
    setItems(listitems)
    localStorage.setItem("todo-list", JSON.stringify(listitems))
  }
  // / delete complete function   / 
  const handledelete = (id) => {
    const listitems = Items.filter((item) =>
      item.id !== id)
    setItems(listitems)
    localStorage.setItem("todo-list", JSON.stringify(listitems))
  }

  return (

    <div className="full-div">
      <div className="container-div">
      <Additems
        newItems={newItems}
        setnewitem={setnewitem}
        handlesubmit={handlesubmit}
      />
      {/* < Search 
             search ={serach}
             setsearch = {setsearch}
             /> */}
      <div className="div-details">
      {(Items.length) ? (
        <ul >
          {/* {Items.filter(item=>(item.item).includes(serach))} */}
          {Items.map((value) => (
            <li className="do-list" key={value.id}>
              < input type="checkbox"
                checked={value.box}
                onChange={() => handlecheck(value.id)}
              />
              <label
                style={(value.box) ? { textDecoration: "line-through" } : null}
                onClick={() => handlecheck(value.id)}>
                {value.task}
              </label>
              <MdCancel role="button"a className="icons-deleted" onClick={() => handledelete(value.id)} />
            </li>
          ))}
        </ul>
      ) : <p className="empty">Your List is Empty</p>
      }
      </div>
      <Footer
        Items={Items} />
        </div>
    </div>
  )
}

export default Content