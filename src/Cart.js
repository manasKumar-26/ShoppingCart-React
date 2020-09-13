import React from 'react';
import CartItem from './CartItem';
import NavBar from './Navbar';
import * as firebase from 'firebase';
class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            product:[],
            loading:true,
            count:0
        }
        this.db=firebase.firestore()
    }
    componentDidMount(){
        // firebase
        // .firestore()
        // .collection('product')
        // .get()
        // .then((snapshot)=>{
        //     let product=snapshot.docs.map((product)=>{
        //         let item=product.data();
        //         item.key=product.id;
        //         return item;
        //     });
        //     this.setState({
        //         product,
        //         count:product.length,
        //         loading:false
        //     })
        // })
        
        firebase
        .firestore()
        .collection('product')
        .onSnapshot((snapshot)=>{
            let count=0;
            let product=snapshot.docs.map((product)=>{
                let item=product.data();
                count+=item.qty
                item.key=product.id;
                return item;
            });
            this.setState({
                product,
                count,
                loading:false
            });
        })
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
        console.log(this.state)
    }

    increaseQuantity=(item)=>{
        const { product }=this.state;
        let index=product.indexOf(item);
        // product[index].qty+=1;
        // this.setState({
        //     product:product,
        //     count:this.state.count+1
        // })
        let docref=this.db.collection('product').doc(product[index].key);
        docref.update({
            qty:product[index].qty+1,
        })
        .then(()=>{
            console.log('Updated')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    decreaseQuantity=(item)=>{
        const { product }=this.state;
        let index=product.indexOf(item);
        if(product[index].qty<=0){
            return;
        }
        let docref=this.db.collection('product').doc(product[index].key);
        docref.update({
            qty:product[index].qty-1,
        })
        .then(()=>{
            console.log('Dec');
        })
        .catch((err)=>{
            console.log(err);
        })
        // product[index].qty-=1;
        // this.setState({
        //     product,
        //     count:this.state.count-1
        // })
    }
    deleteItem=async (id)=>{
        // const { product }=this.state;
        // let item=await product.filter((item)=>item.key !== id);
        // let deleteItem=await product.find((item)=> item.key === id);
        // this.setState({
        //     product:item,
        //     count:this.state.count-deleteItem.qty
        // })
        let docref=this.db.collection('product').doc(id);
        docref
        .delete()
        .then(()=>{
            console.log('Deleted');
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    totalAmount=()=>{
        const {product}=this.state;
        let totalAmount=0;
        product.forEach((item)=>{
            totalAmount+=(item.qty*item.price);
        });
        return totalAmount;
    }
    // addProduct=()=>{
    //     this.db
    //     .collection('product')
    //     .add({
    //         title:'Series',
    //         qty:1,
    //         price:'456',
    //         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_u5IjVt8L0lLW9Ser46YhPjES0usGEeZHQQ&usqp=CAU',
    //     })
    //     .then((newDoc)=>{
    //         console.log(newDoc)
    //     })
    // }
    render(){
        const { product,loading }=this.state
        return(
            <React.Fragment>
            <NavBar count={this.state.count}/>
            {/* <button onClick={this.addProduct} style={style.button}>Add A Product</button> */}
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
            {loading && <div className="loading"><img src="https://faviconer.net/img/ajax-loader-preview.png" alt="login"/><h1>Fetching Your Cart Items....</h1></div>}
            <hr/>
            <div className="checkout">Total Payable Amount : {this.totalAmount()}</div>
            </React.Fragment>
        );
    }
}
// const style={
//     button:{
//         padding:20,
//         background:'transparent',
//     }
// }
export default Cart;