import React, {useState} from 'react'

 const FilterCartItem = ({categories, filterCategory}) => {
  const [category, setCategory] = useState("");

  const handleSelect = (event) => {
    setCategory(filterCategory(event.target.value))
  }

  const options = categories.map(category => {
    return <option key = {category} value={category}>{category}</option>
  })
  
  return (
   <div>
    <select value = {category} onChange = {handleSelect}>
        <option value="">All</option>
        {options}
    </select>
   </div>
  )
}
export default FilterCartItem
