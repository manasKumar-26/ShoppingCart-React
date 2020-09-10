import React from 'react';
class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontFamily:"cursive",fontSize:22}}>Phone</div>
                    <div style={{color:'#7777'}}>999 $</div>
                    <div style={{color:'#7777'}}>Qty:1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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
        borderRadius:6
    }
}
export default CartItem;