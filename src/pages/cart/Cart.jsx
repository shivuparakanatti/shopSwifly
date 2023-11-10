import React from 'react'
import { useCart } from 'react-use-cart';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { addItem } = useCart();
  const navigate = useNavigate()
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  const subTotal = items.reduce((acc,ele)=>{
    return(
       acc + ele.price * ele.quantity
    )
  },0)

  if (isEmpty) return <p className='text-xl flex items-center justify-center h-48'>Your cart is empty</p>;
  return (
    <div className=' mx-2 md:mx-10  my-10'>
       
      <h1 className='text-2xl font-semibold my-4'>Total Items in Cart - {totalUniqueItems}</h1>
      <div>
        <div>
          <table className=''>
            <thead>
              <tr className='flex gap-5 md:gap-20 text-xl my-4 border-b-2 border-black'>
                <th className='w-14 md:w-80 lg:w-96  flex items-start '>Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>

            </thead>
            <tbody className='flex  flex-col gap-4'>
             {
              items && items.map(ele=>{
                return (
                  <tr className='flex gap-5 md:gap-20  items-start'>
                    <td className='flex flex-row items-start justify-start w-14 md:w-80 lg:w-96 h-auto'>
                      <img src={ele.image} className='h-12 w-12' />
                      <p className='mx-2 hidden md:flex'>{ele.title}</p>
                    </td>
                    <td className='w-12'>
                      {ele.price}$
                    </td>
                    <td className='flex items-center justify-between w-24 border-2 border-black rounded-lg'>
                      <button onClick={()=>updateItemQuantity(ele.id , ele.quantity+1)} className='text-2xl border-r-2 mx-1 border-black'>+</button>
                      {ele.quantity}
                      <button onClick={()=>{updateItemQuantity(ele.id,ele.quantity-1)}} className='text-2xl border-l-2 mx-2 border-black'>-</button>
                      </td>
                    <td className='flex items-center justify-start w-15'>{ele.price * ele.quantity}$ <span className='mx-8 cursor-pointer' onClick={()=>{removeItem(ele.id)}}><MdDelete color='red' size={20}/></span></td>
                  </tr>
                )
              })
             }

            </tbody>
          </table>
        </div>
        <div className='flex items-center justify-start md:justify-end mr-10 md:mr-80 mt-8 md:mt-24 '>
          <div className='flex flex-col gap-1  px-10 py-10'>
            <h1 className='text-xl flex justify-between items-center  border-b-2 border-black py-1'>Sub Total : <span className='mx-0 md:mx-4'>{subTotal.toFixed(2)}$</span></h1>
            <h1 className='text-xl  border-b-2 border-black py-1'>Delivery    :    <span className='mx-4'>{0}$</span></h1>
            <h1 className='text-2xl'>Total <span className='mx-4'>{subTotal.toFixed(2)}$</span></h1>
            <button className='bg-blue-700 my-4 rounded-md text-white py-1' onClick={()=>{
              navigate('/checkout')
            }}>Check out</button>
            
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default Cart