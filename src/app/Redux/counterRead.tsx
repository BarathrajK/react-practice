import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useAppSelector } from './store';
import './counter.css'
import Product from './product';

const productItems = [
  {
    src: "https://5.imimg.com/data5/BD/GR/MY-498697/spices-packaging-pouches-500x500.jpg",
    title: "Red Chill Powder",
  },
  {
    src: "https://i.pinimg.com/736x/f7/9c/19/f79c19d63b6da32de7040b13d1b6901b.jpg",
    title: "Turmeric Powder",
  },
  {
    src: "https://m.media-amazon.com/images/I/61t519wZO2S._SX522_.jpg",
    title: "Curry Powder",
  },
  {
    src: "https://m.media-amazon.com/images/I/717JTn8SDHL._SX466_.jpg",
    title: "Garam Masala",
  },
  {
    src: "https://www.ruchifoodline.com/img/products/extra/RUCHI-610261fa18dff-curry-50.jpg",
    title: "Curry Powder",
  },
  {
    src: "https://5.imimg.com/data5/BD/GR/MY-498697/spices-packaging-pouches-500x500.jpg",
    title: "Red Chill Powder",
  },

]

const CounterRead = () => {
  // const { count } = useAppSelector(state => state.counter);
  // const disPatch = useDispatch();
  const [searchInput , setSearchInput] = useState('');
  const [products , setProducts] = useState(productItems)


  const handelInputChange = (event:any) =>{
    setSearchInput(event.target.value);
  }

  const onClickSearch = (event:any) =>{
    event.preventDefault();
    console.log("searchItem:-",searchInput)

    const filterProducts = productItems.filter( (item) =>item.title.toLowerCase().includes(searchInput.toLowerCase()))
    setProducts(filterProducts)
  }
  return (
    <section className='product-list'>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Products</a>
          <form className="d-flex" role="search" onSubmit={onClickSearch}>
            <input className="form-control me-2"
             type="search" 
             placeholder="Search" 
             aria-label="Search"
             value={searchInput}
             onChange={handelInputChange}
             />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          {
            products.length > 0 ?  products.map((product) => {
              return <Product src={product.src} title={product.title} />
            }):<p>Products not found...:)</p>
          }
        </div>
      </div>
      <hr></hr>
      <p className='header'>Powder by Barathraj@2023</p>
    </section>
  )
}
export default CounterRead;
