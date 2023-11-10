import React, { useEffect } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios'


const AddProducts = () => {
  const options = [
    "Laptop",
    'Electronics',
    'Fashion',
    'Phone'
  ];
  const defaultOption = 'All';


  useEffect(()=>{
    

  //   axios.post("http://localhost:1337/api/products",{
  //     data : {
  //       title: "dress",
  //                 desc: "ipad",
  //                 date: "2023-10-24T19:15:00.000Z",
  //               //  image : "https://media.istockphoto.com/id/1453715348/photo/nishikawa-gorge-a-beautiful-canyon-in-japan.webp?b=1&s=612x612&w=0&k=20&c=gauWLVszVr4-FbHCtBRJ_KEAtZMUxY6CDadVplSN6Y4="
  //     },
        
  //      authorization : "bearer "+"94ecd5fd83b4d603b2211929cf79d023a1919557905f1cb062f691ebde5688888a890c551d763642d842962fc80634aeaa4856a71d9c3f529d42dc9fc10b23ecbf1df148ee52402825d1d7606e6f478c0ed3812d586fedcd28d70ddc762d6b2db24e2e53c32b62efabe63db427239ddc590c21b3d7596882d556b6173e1637fc"
  
  //   }).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
   })
  return (
    <div>
      <form>
        <div>
        <label>Title</label> <br/>
        <input type='text' placeholder='Title' />
        </div>
        
        <div>
        <label>Description</label> <br/>
        <input type='text' placeholder='Description' />
        </div>
        <div>
        <label>Price</label> <br/>
        <input type='number' placeholder='Price' />
        </div>
        <div>
        <label>Upload image</label> <br/>
        <input type='file' />
        </div>
        <div>
          <h2>Select the category</h2>
          <Dropdown options={options}  value={defaultOption} placeholder="Select an option" className='w-32 h-10'   />

        </div>

      </form>
    </div>
  )
}

export default AddProducts