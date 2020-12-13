const express=require('express');
const app=express();
 const cors=require('cors');
 app.use(cors({
   origin:"http://localhost:4200"
 }));

    const middlewareFn=(req,res,next)=>{
      console.log('MiddleWare fun Called');
     
       // res.status(500).send("Invalid request");
           next();
    }
    app.use(middlewareFn);
app.get("/getproducts",(req,res)=>{
   res.send(
    [
    {
          "productId":1,
          "productName": "Leaf Rake",
          "productCode": "GDN-001",
          "releaseDate": "March 19,2016",
          "description": "Leaf rank with 48-inch wooden handle",
          "price": 500,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
    
        },
        {
          "productId":2,
          "productName": "Cooking",
          "productCode": "GDN-001",
          "releaseDate": "March 19,2016",
          "description": "Leaf rank with 48-inch wooden handle",
          "price": 500,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
    
        },
        {
          "productId":3,
          "productName": "Fooding",
          "productCode": "GDN-001",
          "releaseDate": "March 19,2016",
          "description": "Leaf rank with 48-inch wooden handle",
          "price": 500,
          
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
    
        },
        {
          "productId":4,
          "productName": "Hummer",
          "productCode": "GDN-001",
          "releaseDate": "March 19,2016",
          "description": "Leaf rank with 48-inch wooden handle",
          "price": 500,
         
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rank.png",
    
        }
      ]
   )
})

app.listen(3000,function(){
    console.log('server running @localhost:3000');
})