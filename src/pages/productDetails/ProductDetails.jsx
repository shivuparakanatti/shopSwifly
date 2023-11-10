import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../customHooks/useFetch'
import Loading from '../../components/Loading'
import ReactStars from "react-rating-stars-component";
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';


const ProductDetails = () => {
    const {id} = useParams()
    const { addItem,totalUniqueItems } = useCart();




    const {data,loading,error} = useFetch(`https://fakestoreapi.com/products/${id}`)

    const addToCart = ()=>{
      addItem(data)
      toast.success("Item added to cart")

    }
   
  return (
    <div >
      {loading ? <Loading/> : ""}
      <div className='flex flex-col md:flex-row gap-5 md:gap-10 mx-4  md:mx-10 my-5 md:my-10 '>
        <div className=' w-auto md:w-96 h-auto '>
          <img src={data && data.image}/>
          
        </div>{
          data && (
            <div className='flex flex-col mx-10 gap-4 my-5 md:my-10'>
          
            
              <h1 className='text-xl font-bold'>{data.title}</h1>
              <h1 className='mr-4 md:mr-96'>{data.description}</h1>
              <div className='flex items-center justify-start gap-5'>
                <ReactStars
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#0174BE"
    value={data.rating.rate}
    edit={false}
  />
  <h1 className='text-sm border-b-2 border-black'>Count : {data.rating.count}</h1>
                </div>
                <h1 className='font-bold'>Price : {data.price}$</h1>
                <button className=' flex items-start justify-center rounded-md bg-blue-700 w-32 text-white px-2 py-1' onClick={addToCart}>Add to Cart</button>

              
            
          
        </div>
          )
        }
        

      </div>
    </div>
  )
}

export default ProductDetails