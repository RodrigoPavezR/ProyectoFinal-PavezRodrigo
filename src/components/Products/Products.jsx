import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box, Typography } from "@mui/material";
import { useContext, useEffect,  } from "react";
import { CartContext } from "../../context/CartContext";
import { CardItem } from "../CardItem/CardItem";
import { FirebaseContext } from "../../context/FirebaseContext";

export const Products = () => {

  const { product, products, isLoading,getProductsDB, getProductById } = useContext(FirebaseContext);
 const { totalQuantity } = useContext(CartContext);
 


  useEffect(() => {
 
    getProductsDB();
    getProductById("LhENn0A3B18UKCMf6HkQ")

    console.log(product)
    
  }, []);


  
  return (
    <>
   
        <Box display="flex">
          <ShoppingCartSharpIcon color="action" />
          <Typography> {totalQuantity} </Typography>
        </Box>
     
      <Typography fontSize={25} marginBottom={3}>
        Productos
      </Typography>
     
      <Box component="div" display="flex" flexWrap="wrap">
        {isLoading ? <h2>Cargando productos ...</h2> : products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};
