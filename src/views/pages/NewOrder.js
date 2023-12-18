import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import {  userRoles } from "src/services/api";
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
    const [user, setUser] = useState({ roleId: "" });
    const [services, setServices] = useState([]); 
    const [orderForm, setOrderForm] = useState({
      date: "",
      first_name: "",
      last_name: "",
      unitOfMeasure: "",
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
    const [roles, setRoles] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await userRoles();
          if (response.status === 200) {
            setRoles(response.data);
            setServices(response)
            console.log(roles);
          } else {
            const errorMessage = response.data.message || "role fetching failed";
            console.error(errorMessage);
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      if (name === "roleId") {
        setUser({ ...user, [name]: value });
      } else {
        setOrderForm({ ...orderForm, [name]: value });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        // Assuming you have a function to fetch services
        // const servicesResponse = await fetchServices();
        // setServices(servicesResponse);
    
        // Use orderForm state to send data to the server
        const response = await axios.post("http://localhost:5000/customers/add", orderForm);
    
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
    
  
    return (
        <div className="min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={12}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <h1 className="mb-4">New Order</h1>
                    <CForm onSubmit={handleSubmit}>
                      <CRow>
                        {/* Order form fields (first column) */}
                        <CCol md={4}>
                          <CFormLabel>Date</CFormLabel>
                          <CFormInput
                            placeholder="Date"
                            name="date"
                            value={orderForm.date}
                            onChange={handleChange}
                            className="mb-3"
                          />
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
                          </CFormSelect>
                          <CFormLabel>Service</CFormLabel>
                          <CFormSelect
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
                            type="date"
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
                            name="Total price"
                            value={orderForm.phoneNumber}  // Typo in the property name, should be "totalPrice"
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
  
  