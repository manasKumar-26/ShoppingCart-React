import React from 'react';
class CartItem extends React.Component{
    incQuan=()=>{
        // this.setState((pervState)=>{
        //     return {
        //         title:'Apple Iphone',
        //         qty:pervState.qty+1,
        //     }
        // });
        this.props.inc(this.props.product)

    }
    // decQuan=()=>{
    //     // if(this.state.qty==0){
    //     //     return;
    //     // }

    //     // this.setState({
    //     //     qty:this.state.qty-1,
    //     // });
    //     this.props.dec(this.props.product);
    // }
    render(){
        const {title,price,qty,img}=this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.image} alt="Cart-Image" />
                </div>
                <div className="right-block">
                    <div style={{fontFamily:"cursive",fontSize:22}}>{title}</div>
                    <div style={{color:'#7777'}}>{price} $</div>
                    <div style={{color:'#7777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        <img alt="Add Item" src="https://image.flaticon.com/icons/svg/992/992651.svg" className="action-icons" onClick={this.incQuan}/>
                        <img alt="Remove Item" src="https://image.flaticon.com/icons/svg/992/992683.svg" className="action-icons" onClick={()=>this.props.dec(this.props.product)}/>
                        <img alt="Delete Item" src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" className="action-icons" onClick={()=>this.props.del(this.props.product.key)}/>
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