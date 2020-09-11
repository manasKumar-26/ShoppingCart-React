import React from 'react';
import CartItem from './CartItem';
import NavBar from './Navbar';
class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            product:[
                {
                    title:'Iphone 11 Pro',
                    price:'999',
                    qty:1,
                    img:'https://cdn.mos.cms.futurecdn.net/7TC7pcZvnFa9xPDgU6V6VQ.jpg',
                    key:Math.floor(Math.random()*99)
                },
                {
                    title:'Apple Watch Series 5',
                    price:'199',
                    qty:1,
                    img:'https://wallpaperaccess.com/full/1568237.jpg',
                    key:Math.floor(Math.random()*99)
                },
                {
                    title:'Apple Macbook Pro',
                    price:'1999',
                    qty:1,
                    img:'https://images-na.ssl-images-amazon.com/images/I/71IQiviMzWL._AC_SL1500_.jpg',
                    key:Math.floor(Math.random()*99)
                },
                {
                    title:'Sony Play-Station 4',
                    price:'899',
                    qty:1,
                    img:'https://cdn.wallpapersafari.com/81/10/oniJ0P.png',
                    key:Math.floor(Math.random()*99)
                }
            ],
            count:4
        }
    }
    increaseQuantity=(item)=>{
        const { product }=this.state;
        let index=product.indexOf(item);
        product[index].qty+=1;
        this.setState({
            product:product,
            count:this.state.count+1
        })
    }
    decreaseQuantity=(item)=>{
        const { product }=this.state;
        let index=product.indexOf(item);
        if(product[index].qty<=0){
            return;
        }
        product[index].qty-=1;
        this.setState({
            product,
            count:this.state.count-1
        })
    }
    deleteItem=async (id)=>{
        const { product }=this.state;
        let item=await product.filter((item)=>item.key !== id);
        let deleteItem=await product.find((item)=> item.key === id);
        this.setState({
            product:item,
            count:this.state.count-deleteItem.qty
        })
    }
    render(){
        const { product }=this.state
        return(
            <React.Fragment>
            <NavBar count={this.state.count}/>
            <div className="cartBox">
                {product.map((item)=>{
                    return <CartItem 
                        product={item} 
                        key={item.key} 
                        inc={this.increaseQuantity}
                        dec={this.decreaseQuantity}
                        del={this.deleteItem}
                    />
                })}
            </div>
            </React.Fragment>
        );
    }
}
export default Cart;