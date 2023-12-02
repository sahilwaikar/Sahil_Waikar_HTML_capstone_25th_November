import { useEffect, useState } from "react";
import '../Style/Home.css';
import { useDispatch } from 'react-redux';
import { addToMyCart } from "../Redux/addToCart";
import { addToMyfav } from "../Redux/addToFav";
let Home = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [popUpData, setPopUpData] = useState({});
    const [popupactive, setPopupactive] = useState('');
    const [totalProduct, setTotalProduct] = useState(1);
    const dispatch = useDispatch();
    let callApi = async () => {
        let res = await fetch("https://fakestoreapi.com/products");
        let jsonResponse = await res.json();
        setProducts(jsonResponse);
        setTimeout(() => {
            setProducts(jsonResponse);
            setIsLoading(false);
            console.log(jsonResponse);
        }, 2000);
    };
    useEffect(() => {
        callApi();
    }, [])
    function addToCart() {
        let cartdata = {
            id: popUpData.id,
            image: popUpData.image,
            title: popUpData.title,
            description: popUpData.des,
            price: popUpData.price,
            quantity: totalProduct
        }
        dispatch(addToMyCart(cartdata));
    }
    function addToFav() {
        let cartdata = {
            id: popUpData.id,
            image: popUpData.image,
            title: popUpData.title,
            description: popUpData.des,
            price: popUpData.price,
            quantity: totalProduct
        }
        dispatch(addToMyfav(cartdata));
    }
    return isLoading ? (
        <div>
            <h2>Products loading....</h2>
        </div>
    ) : (
        <div className="displayproducts">
            <div className="Product_list">
                {
                    products.map((item) => {
                        return (
                            <div className="card" onClick={() => {
                                let popupdata = {
                                    id: item.id,
                                    title: item.title,
                                    price: item.price,
                                    image: item.image,
                                    des: item.description,
                                    quantity: totalProduct
                                }
                                setPopUpData(popupdata)
                                // console.log(popUpData);
                                setPopupactive('active');
                            }}>
                                <img src={item.image} className="card-img-top card-img" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">${item.price} USD</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={`popupdiv ` + popupactive}>
                <div className="popup">
                    <div className="row">
                        <div className="col-md-6 left-pop">
                            <img className="product-img" src={popUpData.image} />
                        </div>
                        <div className="col-md-6 right-pop">
                            <button className="cross" onClick={() => {
                                setPopupactive('')
                            }}><i className="bi bi-x"></i></button>
                            <div className="right-pop-inner">
                                <h3>{popUpData.title}</h3>
                                <p>{popUpData.des}</p>
                                <h4>$ {popUpData.price} USD</h4>
                                <input type="text" placeholder="1" onChange={(e) => {
                                    setTotalProduct(e.target.value);
                                }} />
                                <button className="star_btn"><i class="bi bi-star-fill"
                                    onClick={() => {
                                        addToFav();
                                    }}
                                ></i></button>
                                <button className="add_cart_btn" onClick={() => {
                                    addToCart();
                                }}><i className="bi bi-bag-dash"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};
export default Home;