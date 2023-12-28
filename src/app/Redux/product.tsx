import React, { useState } from 'react'

interface props {
    src: string;
    title: string;
}

function Product(props: props) {

    const { src, title } = props;
    const [quantity, setQuantity] = useState(0);
    return (
        <div className='col-sm-12 col-md-4'>
            <div className="card">
                <img src={src} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <div>
                    <a href="#" className="btn btn-primary">Add To Cart</a>
                    <button className="btn btn-primary" onClick={() => setQuantity(quantity + 1)}>+</button>
                    <button className="btn btn-primary" onClick={() => setQuantity(quantity - 1)}>-</button>
                </div>
                <p className='btn btn-primary'> Item Quantity
                    {quantity}
                </p>
            </div>
        </div>
    )
}

export default Product;
