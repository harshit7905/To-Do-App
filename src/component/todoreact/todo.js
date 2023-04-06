import   React, { useState ,useEffect} from "react"
import "./style.css"
const getLocalData=()=>{
  const list=localStorage.getItem("mylist");
  if(list){
    return  JSON.parse(list);
  }
  else {
    return [];
  }
}
const Todo = () => {
  const[inputdata,setinputdata]=useState("");
  const[items,setItems]=useState(getLocalData());

  //add the item
  const addItem=()=>{
    if(!inputdata){
      alert("PEHLE LIKH TO");
    }
    else{
      const myNewInputData={
        id:new Date().getTime().toString(),name:inputdata

      }
      setItems([...items,myNewInputData]);
      setinputdata("");
    }
  }

  //DELETE
  const deleteItem=(index)=>{
    const updatedItem=items.filter((currItem)=>{
      return currItem.id!==index
    })
    setItems(updatedItem);
  }

  //REMOVEALL
  const removeAll=()=>{
    setItems([]);
  }

  //LOCALSTORAGE
  useEffect(()=>{
    localStorage.setItem("mylist",JSON.stringify(items))
  },[items]);
  return ( 
    
    <div className='main-div'>
      
        <div className="child-div">
        <div className="titlebody">
        <h1>To do List...</h1>
      </div>
        <figure>
            <img src="./images/todo.png" alt="todologo"  className='imge'/>
            <figcaption>Add Your Task Here ✌</figcaption>
          </figure>
                <div className="addItems">
                    <input type="text" placeholder='📝 Add Items' className='form-control' 
                    value={inputdata} onChange={(event)=>setinputdata(event.target.value)}
                    />
                    <i className="fa fa-plus add-btn" onClick={addItem} 
                    ></i>
                    <div>
                      <div className="showItems">
                        {items.map((currItem,index)=>{
                          return(
                            <div className="eachItem" key={currItem.id}>
                            <h3>{currItem.name}</h3>
                            <div className="todo-btn">
                      <i className="far fa-edit add-btn"></i>
                      <i class="far  fa-trash-alt add-btn" onClick={()=>deleteItem(currItem.id)}></i>
  
                            </div>
                          </div>
                          )
                        })}
                       
                      </div>
                    </div>
                    <div className="showItems">
                      <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span> CHECKLIST</span>
                       
                      </button>
                    </div>
                </div>
        </div>
    </div>

  )
}

export default Todo