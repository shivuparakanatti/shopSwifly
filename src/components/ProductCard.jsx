import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';

const ProductCard = ({data}) => {
  const { addItem, totalUniqueItems } = useCart();
 const navigate =  useNavigate()
  const addToCart = (ele) =>{
    addItem(ele)
    toast.success('Item added to cart')
  }
  return (
    <div>
      {
        data && data.length<1 ? <h1 className='flex items-center justify-center my-10 font-bold text-4xl'>No Data found</h1> : ""
      }
        <div className="mx-5 my-5 grid grid-cols-3 md:grid-cols-4 gap-8">
        {data && data.map((ele) => {
                return (
                  <div className="flex flex-col gap-2 items-center justify-center bg-slate-50 px-2 py-4">
                    <img
                      src={ele.image}
                      className="h-32"
                      onClick={() => navigate(`/${ele.id}`)}
                    />
                    <h1
                      className="text-orange-700"
                      onClick={() => navigate(`/${ele.id}`)}
                    >
                      {ele.price}$
                    </h1>
                    <h1
                      className="text-bold text-lg h-14 overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/${ele.id}`)}
                    >
                      {ele.title}
                    </h1>
                    <button
                      className="bg-orange-700 px-2 py-1 rounded-md text-white w-full"
                      onClick={() => addToCart(ele)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  
                  );
                })
                
            }
            </div>
    </div>
  )
}

export default ProductCard