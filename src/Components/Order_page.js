import '../Style/Order.css';
let Order = () => {
    return (
        <div className="order_place ">
            <label>Phone No.</label>
            <input type="number" className="PhoneNo" required />
            <br />
            <br />
            <label>First Name</label>
            <input type="text" className="FName" required />
            <br />
            <br />
            <label>Last Name</label>
            <input type="text" className="LName" required />
            <br />
            <br />
            <label>Address</label>
            <input type="text" className="Address" required />
            <br />
            <br />
            <label>Email</label>
            <input type="email" className="Address" required />
            <br />
            <br />
            <button onClick={() => {
                alert('Your Order is Placed ! Thank You Happy Shopping!')
            }}>Buy Now</button>
        </div>
    )


}
export default Order