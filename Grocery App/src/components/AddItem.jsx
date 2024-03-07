import React from 'react'

export default function AddItem() {
  return (
    <div>
      <form  className="add-item">
        <div>
          <label >Item Name</label>
          <input type="text" />
        </div>
        <div>
          <label >Quantity</label>

          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input type="number" />
        </div>
        <div>
          <button className='btn'>Add Item</button>
        </div>
      </form>
    </div>
  )
}
