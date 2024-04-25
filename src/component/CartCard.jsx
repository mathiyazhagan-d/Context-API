import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function CartCard() {
  const { product } = useContext(UserContext);
  const [quantities, setQuantities] = useState(product.map(() => 1)); 
  const updateQuantity = (index, newQuantity) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = newQuantity;
      return newQuantities;
    });
  };

  
  const getTotalQuantity = () => {
    return quantities.reduce((total, qty) => total + qty, 0);
  };

  
  const getTotalAmount = () => {
    let totalAmount = 0;
    product.forEach((item, index) => {
      const discountPrice = Math.round(item.price * (item.discountPercentage / 100));
      const finalPrice = item.price - discountPrice;
      totalAmount += finalPrice * quantities[index];
    });
    return totalAmount;
  };

  return (
    <Grid container spacing={2}> 
      <Grid item xs={12} md={8}> 
        {product.map((e, i) => {
          const discountPrice = Math.round(e.price * (e.discountPercentage / 100));
          const quantity = quantities[i];

          const addQuantity = () => {
            updateQuantity(i, quantity + 1);
          };

          const removeQuantity = () => {
            if (quantity > 1) {
              updateQuantity(i, quantity - 1);
            }
          };

          return (
            <Card key={i} style={{ marginBottom: '20px', border: '1px solid #ccc', maxWidth: '1000px', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px' }}>
                <div style={{ flex: 1 }}>
                  <CardMedia
                    component="img"
                    image={e.image}
                    alt="Product Image"
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Brand: {e.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description: {e.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rating: {e.rating}/5
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px' }}>
                      <Button
                        variant="outlined"
                        onClick={removeQuantity}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <div style={{ padding: '0 10px' }}>{quantity}</div>
                      <Button variant="outlined" onClick={addQuantity}>
                        +
                      </Button>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Typography variant="body2">
                      Original Price (1 item): ${e.price}
                    </Typography>
                    <Typography variant="body2">
                      Discount Amount: -${discountPrice}
                    </Typography>
                    <Typography variant="body2">
                      Final Price (Price - Discount): ${e.price - discountPrice}
                    </Typography>
                    <Typography variant="body2">
                      Total Amount (Final price * Quantity): ${e.price * quantity}
                    </Typography>
                  </CardActions>
                </div>
              </div>
            </Card>
          );
        })}
      </Grid>
      <Grid item xs={12} md={4}> 
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Total Quantity: {getTotalQuantity()}</Typography>
          <Typography variant="h6">Total Amount: ${getTotalAmount()}</Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default CartCard;
