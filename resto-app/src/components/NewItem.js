import React, {useState} from 'react'
import ItemContainer from './Container.module.css'

const NewItem = (props) => {
  const [item,setItem] = useState({
    name:'',
    price: 0,
    category: '',
    image:''
  })

  const onChange = (e) => {
    const inputName = e.target.name

    switch(inputName){
      case 'name':
        setItem({
          ...item, 
          name: e.target.value
        })
        break;

      case 'price':
        setItem({
          ...item, 
          price: e.target.value
        })
        break;

      case 'category':
        setItem({
          ...item, 
          category: e.target.value
        })
        break;

      case 'image':
        setItem({
          ...item, 
          image: e.target.value
        })
        break;

      default:
        break;
    }
  }

  const onSubmitItem = (e) => {
    e.preventDefault()
    props.submit(item)
  }

  const onCancelEdit = (e) => {
    e.preventDefault();
    props.cancel();
  };
  return (
    <div className={ItemContainer.form}>
      <p className={ItemContainer.addItem}>Add Item</p>
      <form>
          <label>Item Name:</label>
          <input name = "name" type = "text" onChange = {onChange}/>
           <br />

          <label>Item Price:</label>
          <input name = "price" type = "text" onChange = {onChange}/>
          <br />

          <label>Item Category:</label>
          <input name = "category" type = "text" onChange = {onChange}/>
          <br />

          <label>Item Image:</label>
          <input name = "image" type = "text" onChange = {onChange}/>
          <br />
          <button className={ItemContainer.submitBtn} onClick={onSubmitItem}>Submit</button>
          <button className={ItemContainer.submitBtn} onClick={onCancelEdit}>Cancel</button>
        </form>
    </div>
  )
}

export default NewItem