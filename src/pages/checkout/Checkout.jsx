import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';
import { getDatabase, ref, set } from "firebase/database";
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';



const Checkout = () => {

  const user= useSelector(state=>{
    return state.auth
  })

  const date = Date()
  
  const uId = uuidv4();
  const [address,setAddress] = useState('')
  const [price,setPrice] = useState('')
  const [popup,setPopup] = useState(false)
  const [confirmation,setConfirmation] = useState(false)

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();

     const navigate =  useNavigate()

      const [cardNumber, setCardNumber] = useState('');
const totalAmount = items.reduce((acc,ele)=>{
    return(
       acc + ele.price * ele.quantity
    )
  },0)

 


function writeUserData(userId, name, email, items,address) {
  const db = getDatabase();
  set(ref(db, `users/${userId}/${uId}`), {
    username: name,
    email: email,
    allItems : items,
    price : totalAmount,
    //quantity : quantity,
    address : address,
    date : date
  });
}

useEffect(()=>{
  if(confirmation){
    toast.success("Your order confirmed")
    emptyCart()
    navigate('/')

      writeUserData(user.userID,user.userName,user.email,items,address)
    
    
}
})

      


  const handleCardNumberChange = (event) => {
    // Remove non-numeric characters and spaces
    const sanitizedValue = event.target.value.replace(/[^\d]/g, '');

    // Limit to 16 digits
    const formattedValue = sanitizedValue.slice(0, 16);

    // Add a space every 4 digits
    const formattedWithBreaks = formattedValue
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ');

    setCardNumber(formattedWithBreaks || '');
  
  };

  const handlePay=(e)=>{
    e.preventDefault()
    if(user.isLoggedIn){

      setPopup(true)
    }
    else{
      alert('please log in with your account ')
      navigate('/login')
      
    }

   

    
  }

  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
      <div className="text-center mb-4 ">
        <img src="https://www.chargebee.com/blog/wp-content/uploads/2021/07/Hosted-Payment-Page-Chargebee-Blog.png" alt="Payment" className="w-48 h-48 mx-auto" />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Payment Details</h1>
      <form onSubmit={handlePay}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-600">Credit Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Enter your card number"
            value={cardNumber}
        onChange={handleCardNumberChange}
        required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-600">Card Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="MM/YY"
            required
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600">Amount to be Paid in $</label>
          <input
            type="text"
            id="amount"
            className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Enter the amount"
            value={totalAmount}
            disabled
            onChange={(e)=>{
              setPrice(e.target.value)
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-600">Billing Address</label>
          <textarea
            id="address"
            className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Enter your billing address"
            rows="4"
            onChange={(e)=>{
              setAddress(e.target.value)
            }}
            required
          ></textarea>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          type="submit"
        
        >
          Pay
        </button>
      </form>
    </div>
    {
      popup ? (
        <div className='flex items-center justify-center z-100 '>
         <div className='absolute top-96 left-96 bg-black text-white bg-opacity-80  px-20 py-10'>
          
          <h1 className='my-5 text-xl'>Are you sure? You want to pay {totalAmount}</h1>
          <div className='flex items-center justify-evenly'>

          <button className='bg-blue-500 px-2 py-1 rounded-md' onClick={()=>{setConfirmation(true)}}>Confirm</button>
          <button className='bg-blue-500 px-2 py-1 rounded-md' onClick={()=>{
            setPopup(false)
          }}>Skip</button>
          </div>
        </div>
        </div>
      ): ""
    }
    
  </div>
  )
}

export default Checkout
