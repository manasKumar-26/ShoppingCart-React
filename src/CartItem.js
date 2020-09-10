import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super()
        this.state={
            title:'Phone',
            price:'999',
            qty:'1',
            img:'https://cdn.mos.cms.futurecdn.net/7TC7pcZvnFa9xPDgU6V6VQ.jpg'
        }
    }
    incQuan=()=>{
        console.log(this);
        console.log(this.state)
        this.state.qty++;
        document.getElementById('quant').innerText=this.state.qty;
    }
    render(){
        const {title,price,qty,img}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.image} alt="Cart-Image" />
                </div>
                <div className="right-block">
                    <div style={{fontFamily:"cursive",fontSize:22}}>{title}</div>
                    <div style={{color:'#7777'}}>{price} $</div>
                    <div style={{color:'#7777'}} id="quant">{qty}</div>
                    <div className="cart-item-actions">
                        <img alt="Add Item" src="https://image.flaticon.com/icons/svg/992/992651.svg" className="action-icons" onClick={this.incQuan}/>
                        <img alt="Remove Item" src="https://image.flaticon.com/icons/svg/992/992683.svg" className="action-icons"/>
                        <img alt="Delete Item" src="https://image.flaticon.com/icons/svg/3455/3455946.svg" className="action-icons"/>
                    </div>
                </div>
            </div>
        );
    }
}
let styles={
    image:{
        height:150,
        width:150,
        borderRadius:6,
        background:'#777'
    }
}
export default CartItem;