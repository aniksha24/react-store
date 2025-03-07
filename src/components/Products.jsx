
import "./Products.css";
export default function Products(){
    const products=[
        {id:1,name:"Product 1",price: 56},
        {id:2,name:"Product 2",price: 40},
        {id:3,name:"Product 3",price: 50},
        {id:4,name:"Product 4",price: 30},
        {id:5,name:"Product 5",price: 80},
        {id:6,name:"Product 6",price: 90}
    ];
   return <div className="App-Products-Row">
    {products.map((value,index)=>(
        <div key={index} className="App-Products-Box">
            <h3>{value.name}</h3>
            <h3>{value.price}</h3>
             <button>Add to Cart</button>

            </div>
    ))}
   </div>;
     
}