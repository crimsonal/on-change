import React, {useState} from 'react'
import "typeface-roboto"
function MyComponent() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return (
        <div className="card">
            <h2>Order form for motorcycles</h2>
            <input value={name} onChange={handleNameChange} />
            {/* onChange attribute fires the moment value is changed. Passes event object into
            the first parameter of the function we use in the attribute. */}
            <p> Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Gift Card">Gift Card</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                {/* Checked, a boolean attribute, specifies an element should be pre-selected when the 
                page loads.  */}
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}
                />
                Pick Up
            </label> <br></br>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                    onChange={handleShippingChange}
                />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent