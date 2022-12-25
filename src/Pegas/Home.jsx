import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../store/productSlice'
import { AddToCard } from '../store/productSlice'
const Home = () => {
    const dispatch =useDispatch()
    const {products,loading} =useSelector(state=>state.product)
    console.log(loading);



    useEffect(()=>{
   dispatch(getProduct())
    },[])
  return (
    <>
    <div className="container">
        <div className="col-md-12">
            <div className="row">
                <h1 className='text-center'>All Products</h1>
                {loading && <h2 className='text-center'>Loading...</h2>}
                {products && products.map((el)=>{
                    return (
                      <div key={el.id} className="card mx-auto my-4" style={{width:"18rem"}}>
                    <img src={el.image} className='card-img-top' alt="Card image cap" />
                    <div className='card-body'>
                        <p className='card-text'>{el.title}</p>
                        <p className='card-text'>{el.price}</p>
                        <button onClick={()=>dispatch(AddToCard(el.id))} className='
                        btn btn-info'> Add to Cart</button>
                    </div>
                </div>  
                    )
                })}
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Home