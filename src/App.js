import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material'; 
import CartCard from './component/CartCard';

export const UserContext = React.createContext();

function App() {
  const [product, setProduct] = useState([
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQGlUyuFnGjbTsandVB0Lj5zoO3xTypor4ZLgcMq3GWipS-wUO034iDryKv3neXOWgTKHk4x2PryqZO9rnwemXgxVbJnvdiVwe4o9DTg-1Bvp2tjEU5G0x9-g&usqp=CAE",
      "quantity": 0 
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "image": "https://vlebazaar.in/image/cache/catalog/apple%204s/apple-iphone-x%20white-550x550h.jpeg.webp",
      "quantity": 1 
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTeNLR03wPR3L1fKjXAp8e39tUWyxl_JJimMwtuUTwx33z6gUGG492FaQ9ruICKdMNAIKnD9KqHhcnn2XsSkGyCRr0Lsm31yhzku3udQdfDrRj9LXS6vDmjjA&usqp=CAE",
      "quantity": 0 
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "image": "https://assets.sangeethamobiles.com/product_img/4041_4.png",
      "quantity": 0 
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRXKgqTm3yuhp7t-HaxMZEyT_i3ZnS812bguOm3TAlowgTnnaQ56qTPXULScjB23m1B5lWsaLEmLg1ao8EYzOeL-FBBa7PxY7n58ObsVQc6SSltjdysPNl47Q&usqp=CAE",
      "quantity": 0 
    }
  ]);

  // Calculate total cart amount
  const totalCartAmount = product.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <AppBar position="static" style={{ marginBottom: '20px' }}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Shopping Cart</Typography>
        </Toolbar>
      </AppBar>
      <UserContext.Provider value={{ product, setProduct }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CartCard/>
            </div>
          </Grid>
          
        </Grid>
      </UserContext.Provider>
    </>
  );
}

export default App;
