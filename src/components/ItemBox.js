import React, {useState} from "react";
import ItemContainer from './Container.module.css'

const ItemBox = ({id, name, price, image, deleteClick, editClick, editButton, dispatch}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); 
    dispatch({ type: 'ORDERS', payload: {type: 'INCREMENT', id: id, quantity: count}})
  };

  const decrement = () =>{
    if(count > 0){
      setCount(count - 1);
    }  
    dispatch({ type: 'ORDERS', payload: {type: 'DECREMENT', id: id}})
  }

  return (
    <div className={ItemContainer.itemContainer}>
        <img className={ItemContainer.img} src={image} alt="item" /> 
      <div className="Details">
        <strong>{name}</strong>

        <p>
          <small>Php {price}</small>
        </p>
        <p>
          <button className={ItemContainer.quantityBtn} onClick={decrement}> - </button>
          <span className={ItemContainer.quantity}>{count}</span>
          <button className={ItemContainer.quantityBtn} onClick={increment}> + </button>
        </p>

        <p>
          <button className={ItemContainer.btn} onClick={() => deleteClick(id)}>Delete</button>
          <br />
          {editButton  ? "" : <button className={ItemContainer.btn} onClick={() => editClick(id)}>Edit</button> }
          <br />
        </p>

      </div>
    </div>
  );
};

export default ItemBox;