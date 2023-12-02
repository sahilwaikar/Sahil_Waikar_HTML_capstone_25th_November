import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { removeFromMyCart } from "../Redux/addToCart";
import { Link } from "react-router-dom";
import { useState } from 'react';
import '../Style/cart.css';
let Cart = () => {
    const dispatch = useDispatch();
    const favlist = useSelector((state) => state.Cart);
    const [removeData, setRemoveData] = useState({});
    // const [totalProduct, setTotalProduct] = useState(1);
    function removeProduct() {
        let productdata = {
            id: removeData.id,
            image: removeData.image,
            title: removeData.title,
            description: removeData.des,
            price: removeData.price,
            quantity: removeData.quantity
        }
        dispatch(removeFromMyCart(productdata));
    }
    return (
        <div className='Cart_container'>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {
                    favlist.map((item) => {

                        return (
                            <tr>
                                <td className='item_des'>
                                    <button onClick={() => {
                                        let data = {
                                            id: item.id,
                                            image: item.image,
                                            title: item.title,
                                            des: item.description,
                                            price: item.price,
                                            quantity: item.quantity
                                        }
                                        setRemoveData(data);
                                        removeProduct();
                                    }} ><i className="bi bi-x"></i></button>
                                    <img src={item.image} />
                                    <h4>{item.title}</h4>
                                </td>
                                <td>{item.price}</td>

                                <td> <button>-</button><input value={item.quantity} /><button>+</button> </td>
                                <td>{(item.price) * (item.quantity)}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <div className='buynow_div'>
                <Link className='BuyNow' to={'/order'}>Buy Now</Link>
            </div>

        </div>
    )
}
export default Cart