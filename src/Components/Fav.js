import { useSelector } from 'react-redux/es/hooks/useSelector';
import "../Style/Fav.css";
let Fav = () => {
    const favlist = useSelector((state)=>state.Fav);
    return (
        <div className="Product_list">
      {
        favlist.map((item) => {
          return (
               <div className="card">
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
    )
}
export default Fav 