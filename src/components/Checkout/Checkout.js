import React, { useState, useContext } from 'react'
import CartSummary from '../CartSummary/CartSummary'
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom'
import './Check-out.css'

export default function Checkout() {

  const { cart, setCart } = useContext(CartContext);
  const priceArr = [0]
  cart && cart.forEach(cartItem => {
    priceArr.push(cartItem.price * cartItem.quantity)
  })
  const totalPrice = priceArr.reduce((acc, cv) => acc + cv)

  const [customerDetails, setCustomerDetails] = useState({
    name: ' ',
    phone: ' ',
    pin: ' ',
    locality: ' ',
    address: '',
    city: ' ',
    state: ' ',
  })
  const [cardNumber, setCardnumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [date, setDate] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false)

  const customerDetailsCopy = { ...customerDetails }

  let modalClass = 'hide-modal'

  isModalVisible ? modalClass = 'modal' : modalClass = 'hide-modal';

  let addressClass = 'disabled'

  !!(customerDetails.name === '' || customerDetails.phone === '' || customerDetails.pin === '' || customerDetails.locality === '' || customerDetails.address === '' || customerDetails.city === '' || customerDetails.state === '') ? addressClass = 'disabled' : addressClass = 'add-address-btn'

  let payClass = 'disabled'

  !!(cvv === '' || cardNumber === '' || date === '') ? payClass = 'disabled' : payClass = 'pay'

  return (
    <>
      <h1 className='checkout-page-heading'>place order</h1>

      <div className='checkout-page-container'>

        <div className={modalClass}>

          <div className='modal-container' >

            <img alt='payment successful' src='https://image.flaticon.com/icons/png/512/190/190411.png' className='modal-img' />

            <p className='payment-success'>Payment Successful !</p>

            <Link to='/'><button className='pay' onClick={() => {
              setCart([])
            }}>Okay</button></Link>

          </div>
        </div>

        <div className='checkout-details-payment'>


          <div className='checkout-customer-details'>
            <h3 className='add-address'>Add Address</h3>

            <div>
              <input type='text' placeholder='Name' className='customer-details-input' onChange={(e) => {
                customerDetailsCopy.name = e.target.value
              }} />

              <input type='number' placeholder='Phone Number' className='customer-details-input' onChange={(e) => {
                customerDetailsCopy.phone = e.target.value
              }} />
            </div>

            <div>
              <input type='number' placeholder='Pincode' className='customer-details-input' onChange={(e) => {
                customerDetailsCopy.pin = e.target.value
              }} />

              <input type='text' placeholder='Locality' className='customer-details-input' onChange={(e) => {
                customerDetailsCopy.locality = e.target.value + " "
              }} />
            </div>
            <div className='textarea-input'>
              <textarea type='text' placeholder='Address(Area and Street)' className='customer-details-textarea' onChange={(e) => {
                customerDetailsCopy.address = " " + e.target.value + " "
              }} />
            </div>
            <div>
              <input type='text' placeholder='City/District/Town' className='customer-details-input' onChange={(e) => {
                customerDetailsCopy.city = e.target.value + " "
              }} />

              <select name="state" id="state" defaultValue='State' className="form-control" className='customer-details-input-dropdown' onChange={(e) => {
                customerDetailsCopy.state = e.target.value + " "
              }}>
                <option value="State" disabled>State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>

            <button className='customer-details-submit' type='submit' className={addressClass} onClick={() => {
              setCustomerDetails(customerDetailsCopy)
              // console.log(customerDetails)
            }}>Add Address</button>
          </div>

          <div className='checkout-address-summary'>
            <div>
              <h3 className='add-address'>Address to deliver</h3>
              <p className='checkout-address-name'>Name: <span>{customerDetails.name}</span></p>
              <p className='checkout-address-phone'>Phone Number: <span>{customerDetails.phone}</span></p>
              <p className='checkout-address'>Address: <span>{customerDetails.address + customerDetails.locality + customerDetails.city + customerDetails.state + customerDetails.pin}</span></p>
            </div>
          </div>


          <div className='checkout-customer-payment'>
            <h3 className='add-address'>Payment</h3>
            <input type='number' placeholder='Enter card number' className='customer-details-input' value={cardNumber} onChange={(e) => {
              if (e.target.value <= 9999999999999999) {
                setCardnumber(e.target.value)
              }
            }} />
            <input type='month' className='customer-details-expdate' onChange={(e) => {
              setDate(e.target.value)
            }} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
              <input type='number' placeholder='CVV' className='customer-details-cvv' value={cvv} onChange={(e) => {
                if (e.target.value <= 999) {
                  setCvv(e.target.value)
                }
              }} />
              <button className={payClass} disabled={cardNumber === '' && cvv === ''} onClick={() => {
                setIsModalVisible(true)
              }}>PAY ₹{totalPrice}</button>
            </div>
          </div>
        </div>

        <div className='cart-summary-sec'>
          <CartSummary />
        </div>
      </div>
    </>
  )
}

