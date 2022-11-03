import React, {useState} from 'react'
import ItemContainer from './Container.module.css'

const EditItemForm = ({submit, id, cancel, name, price, category, image}) => {

  const [item,setItem] = useState({
    id: id,
    name: name,
    price: price,
    category: category,
    image: image,
  })

  const [valueName, setValueName] = useState(name);
  const [valuePrice, setValuePrice] = useState(price);
  const [valueCategory, setValueCategory] = useState(category);
  const [valueImage, setValueImage] = useState(image);
  
  const onChange = (e) => {
    const inputName = e.target.name;

    switch (inputName) {
      case "name":
        setValueName(e.target.value);
        setItem({
          ...item,
          name: e.target.value,
        });
        break;

      case "price":
        setValuePrice(e.target.value);
        setItem({
          ...item,
          price: e.target.value,
        });
        break;

      case "category":
        setValueCategory(e.target.value);
        setItem({
          ...item,
          category: e.target.value,
        });
        break;

      case "image":
        setValueImage(e.target.value);
        setItem({
          ...item,
          image: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const onEditItem = (e) => {
    e.preventDefault();
    submit(item);
  };

  const onCancelEdit = (e) => {
    e.preventDefault();
    cancel(false);
  };
 
  return (
    <div className={ItemContainer.form}>
      <p className={ItemContainer.editItem}>Edit Item</p>
      <form>
        <label>Item Name: </label>
        <input name="name" type="text" value={valueName} onChange={onChange} />
        <br />
            
        <label>Item Price: </label>
        <input name="price" type="number" value={valuePrice} onChange={onChange} />
        <br />

        <label>Item Category: </label>
        <input name="category" type="text" value={valueCategory} onChange={onChange} />
        <br />

        <label>Item Image: </label>
        <input name="image" type="text" value={valueImage} onChange={onChange}/>
        <br />

        <div>
          <button className={ItemContainer.submitBtn} onClick={onEditItem}>Save</button>
          <button className={ItemContainer.submitBtn} onClick={onCancelEdit}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditItemForm