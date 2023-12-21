import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';

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

  CRow,
  CFormLabel
} from "@coreui/react";


const ExistingCustomers = () => {
    const navigate = useNavigate();
  const { id } = useParams();

  const [customer, setCustomer] = useState([]);
  const [orderForm, setOrderForm] = useState({

    uom: "",
    pickUpDate: "",
    pickUpTime: "",
    totalPrice: "",
    discountAmount: "",
    discountReason: "",
    quantity: "",
    service: "",

  });

  const [cost, setCost] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {

    async function fetchCustomer() {

      try {
        const response = await axios.get(`${apiUrl}/customers/${id}`);

        if (response.status === 200) {
          console.log('res', response);
          setCustomer(response.data);
        } else {
          console.error("Failed to fetch customers:", response.data.error);
        }
      } catch (error) {
        console.error("API request error:", error);
      }
    }

    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newCost = orderForm.totalPrice - orderForm.discountAmount;
    setCost(newCost)
    setOrderForm({
      ...orderForm,
      ...customer,
      [name]: value,

    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('order', orderForm);

      // Use orderForm state to send data to the server
      const response = await axios.post(`${apiUrl}/orders/add`, orderForm);
      console.log('order', orderForm)
      if (response.status === 201) {

        navigate('admin/success');
        console.log(response);
      } else {
        console.error("Order creation failed:", response.data.error);
        // Handle error scenario
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };


  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h3 className="mb-4">Add Order to Existing Customer</h3>
                  <CForm onSubmit={handleSubmit}>
                    <CRow>
                      {/* Order form fields (first column) */}
                      <CCol md={4}>

                        <CFormLabel>First Name</CFormLabel>
                        <CFormInput
                          placeholder="First Name"
                          name="first_name"
                          value={customer.first_name}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Last Name</CFormLabel>
                        <CFormInput
                          placeholder="Last Name"
                          name="last_name"
                          value={customer.last_name}
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
                          value={customer.phone_number}
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
                          value={customer.address}
                          onChange={handleChange}
                          className="mb-3"
                        />
                        <CFormLabel>Total Price</CFormLabel>
                        <CFormInput
                          placeholder="Total Price"
                          name="totalPrice"
                          value={orderForm.totalPrice}  // Typo in the property name, should be "totalPrice"
                          onChange={handleChange}
                          className="mb-3"
                        />

                      </CCol>
                    </CRow>
                    <CCol md={4}>
                      <CFormLabel>Total Cost</CFormLabel>
                      <CFormInput
                        placeholder="Cost"
                        name="cost"
                        value={cost}  // Typo in the property name, should be "totalPrice"
                        onChange={handleChange}
                        className="mb-3"
                      />

                    </CCol>

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

export default ExistingCustomers;

