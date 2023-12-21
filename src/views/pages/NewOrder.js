import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userRoles } from "src/services/api";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  //CInputGroup,
  // CInputGroupText,
  CRow,
  CFormLabel
} from "@coreui/react";
//import CIcon from "@coreui/icons-react";
//import { cilLockLocked, cilUser } from "@coreui/icons";

// ... (imports remain the same)

// ... (imports remain the same)

const Add = () => {
  //  const navigate = useNavigate();

  const [orderForm, setOrderForm] = useState({
    date: "",
    first_name: "",
    last_name: "",
    uom: "",
    pickUpDate: "",
    pickUpTime: "",
    totalPrice: "",
    discountAmount: "",
    discountReason: "",
    quantity: "",
    service: "",
    phone_number: "",
    address: "",
  });

  const [cost, setCost] = useState();


  const [phoneData, setPhoneData] = useState({ phone_number: "" });

 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCost(orderForm.totalPrice - orderForm.discountAmount)
    
      setOrderForm({ ...orderForm, [name]: value });
    
  };

  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleFind = async (e) => {
    try {
      console.log(phoneData);
      const response = await axios.post(`${apiUrl}/customers/phone`, phoneData);

      if (response.status === 200) {
      

        // Use navigate to programmatically navigate to the specified route
        navigate(`/admin/existing_customer/${response.data.id}`);
        console.log('loc', window.location);
      } else {
        console.error("Failed to fetch customers:", response.data.error);
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      console.log('order',orderForm);
      console.log('cost',cost);
     

      // Use orderForm state to send data to the server
      const response = await axios.post(`${apiUrl}/orders/add`, orderForm);
console.log('order',orderForm)
      if (response.status === 201) {
        // Order added successfully
        // You can navigate to another page or show a success message
        // navigate('/success-page');
        console.log(response);
      } else {
        console.error("Order creation failed:", response.data.error);
        // Handle error scenario
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const handleInputChange = (e) => {
    setPhoneData({
      ...phoneData,
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value, 10) : parseInt(e.target.value),
    });
  };
  
  
 
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1 className="mb-4">New Order</h1>
                  <CRow className="mb-4">
  <CCol md={4}>
  <CFormInput
  placeholder="Phone"
  name="phone_number"  // Use the same name as the key in the state object
  value={phoneData.phone_number}
  onChange={handleInputChange}
  className="mb-3"
/>
  </CCol>
  <CCol md={4}>
    <CButton
      onClick={handleFind}
      type="submit"
      color="success"
      className="px-4 "
    >
      Find if Existing Customer
    </CButton>
  </CCol>
</CRow>

                  <CForm onSubmit={handleSubmit}>
                    <CRow>
                      {/* Order form fields (first column) */}
                      <CCol md={4}>
                        {/* <CFormLabel>Date</CFormLabel>
                        <CFormInput
                          placeholder="Date"
                          name="date"
                          value={orderForm.date}
                          onChange={handleChange}
                          className="mb-3"
                        /> */}
                        <CFormLabel>First Name</CFormLabel>
                        <CFormInput
                          placeholder="First Name"
                          name="first_name"
                          value={orderForm.first_name}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Last Name</CFormLabel>
                        <CFormInput
                          placeholder="Last Name"
                          name="last_name"
                          value={orderForm.last_name}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Unit of Measure</CFormLabel>
                        <CFormSelect
                          aria-label=" uom"
                          name="uom"
                          value={orderForm.uom}
                          onChange={handleChange}
                          className="mb-3"
                        >
                          <option value="">Select UoM</option>
                          <option value="kgs">Kilograms (kgs)</option>
                          <option value="bags">Bags</option>
                        </CFormSelect>

                        {/* <CFormSelect
                            aria-label="Service uom"
                            name="uom"
                            value={orderForm.service}
                            onChange={handleChange}
                            className="mb-3"
                          >
                            <option value="">Select UoM</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.id}>
                                {service.name}
                              </option>
                            ))}
                          </CFormSelect> */}
                        <CFormLabel>Service</CFormLabel>
                        <CFormSelect
                          aria-label="Service"
                          name="service"
                          value={orderForm.service}
                          onChange={handleChange}
                          className="mb-3"
                        >
                          <option value="">Select Service</option>
                          <option value="kgs">Laundry </option>
                          <option value="bags">Carpet</option>
                        </CFormSelect>
                        {/* <CFormSelect
                            aria-label="Service select"
                            name="service"
                            value={orderForm.service}
                            onChange={handleChange}
                            className="mb-3"
                          >
                            <option value="">Select Service</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.id}>
                                {service.name}
                              </option>
                            ))}
                          </CFormSelect> */}
                      </CCol>

                      {/* Order form fields (second column) */}
                      <CCol md={4}>
                        <CFormLabel>Pick Up Date</CFormLabel>
                        <CFormInput
                          placeholder="Pick Up Date"
                          name="pickUpDate"
                          type="date"
                          value={orderForm.pickUpDate}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Pick Up Time</CFormLabel>
                        <CFormInput
                          placeholder="Pick Up Time"
                          name="pickUpTime"
                          type="time"
                          value={orderForm.pickUpTime}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>phonenumber</CFormLabel>
                        <CFormInput
                          placeholder="phone_number"
                          name="phone_number"
                          value={orderForm.phone_number}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Discount</CFormLabel>
                        <CFormInput
                          placeholder="Discount"
                          name="discountAmount"
                          value={orderForm.discountAmount}
                          onChange={handleChange}
                          className="mb-3"
                        />
                      </CCol>

                      {/* Order form fields (third column) */}
                      <CCol md={4}>
                        <CFormLabel>Discount Reason</CFormLabel>
                        <CFormInput
                          placeholder="Discount Reason"
                          name="discountReason"
                          value={orderForm.discountReason}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Quantity</CFormLabel>
                        <CFormInput
                          placeholder="Quantity"
                          name="quantity"
                          value={orderForm.quantity}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Address</CFormLabel>
                        <CFormInput
                          placeholder="Address"
                          name="address"
                          value={orderForm.address}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Total Price</CFormLabel>
                        <CFormInput
                          placeholder="Total Price"
                          name="totalPrice"
                          value={cost}  // Typo in the property name, should be "totalPrice"
                          onChange={handleChange}
                          className="mb-3"
                        />

                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          onClick={handleSubmit}
                          type="submit"
                          color="primary"
                          className="px-4 my-4"
                        >
                          Submit
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        {/* Add any additional elements or buttons */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Add;

