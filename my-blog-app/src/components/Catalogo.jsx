import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../styles/catalogo.css"
import { Cards } from './Cards'
import {REACT_APP_DB_URL} from '../config';

// 
export const Catalogo = ({title,categoric,allProducts,setAllProducts,total,setTotal,countProducts,setCountProducts,allPedido, setAllPedido}) => {
    
    const [product,setProduct] = useState([])
    //Peticion al servidor
    const loadProduct = async () => {
        const response = await fetch(`${REACT_APP_DB_URL}/productos/${categoric}`);
        const data = await response.json();
        setProduct(data)
        

    }
useEffect(()=>{
    loadProduct()
},[])

    return (
        <div>
            <div className="w-full">
                <header className='header-catalogo'>
                    <div className='text-6xl font-bold'>
                        <h1>
                          {title}
                        </h1>
                    </div>
                </header>
                <div className="container-catalogo">
                    {product.map((singleProduct,index) => (
                        <div key={index}>
                           <Cards title={singleProduct.nombre_producto}
                           price={`Antes: $${singleProduct.precio_producto}`} priceNow={`Ahora: $${singleProduct.precio_descuento}`} description={`Descripción: ${singleProduct.descripcion_producto}`} stars={singleProduct.valoracion_producto} image={singleProduct.imagen_producto}
                           
                           object={singleProduct}  
                            allProducts={allProducts}
                           setAllProducts={setAllProducts}
                           total={total}
                           setTotal={setTotal}
                           countProducts={countProducts}
                           setCountProducts={setCountProducts}
                           allPedido={allPedido}
                           setAllPedido={setAllPedido}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
