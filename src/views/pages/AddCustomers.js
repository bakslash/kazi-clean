import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { userRoles } from "src/services/api";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CFormLabel,
  CFormSelect
} from "@coreui/react";

const AddCustomer = () => {
  const navigate = useNavigate();
  const [customerForm, setCustomerForm] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    hear_about_us: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerForm({ ...customerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log('data',customerForm);
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      // Use customerForm state to send data to the server
      const response = await axios.post(`${apiUrl}/customers/add`, customerForm);

      if (response.status === 201) {
        // Customer added successfully
        // You can navigate to another page or show a success message
        console.log('res',response);
        navigate('admin/success');
      } else {
        console.error("Customer creation failed:", response.data.error);
        // Handle error scenario
      }

    } catch (error) {
      console.error("API request error:", error);
    }
  };

  return (
    <div className="min-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1 className="mb-4">New Customer</h1>
                  <CForm onSubmit={handleSubmit}>
                    <CRow>
                      <CCol md={6}>
                        <CFormLabel>First Name</CFormLabel>
                        <CFormInput
                          placeholder="First Name"
                          name="first_name"
                          value={customerForm.first_name}
                          onChange={handleChange}
                          className="mb-3"
                        />
                      </CCol>
                      <CCol md={6}>
                        <CFormLabel>Last Name</CFormLabel>
                        <CFormInput
                          placeholder="Last Name"
                          name="last_name"
                          value={customerForm.last_name}
                          onChange={handleChange}
                          className="mb-3"
                        />
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol md={6}>
                        <CFormLabel>Phone Number</CFormLabel>
                        <CFormInput
                          placeholder="Phone Number"
                          name="phone_number"
                          value={customerForm.phone_number}
                          onChange={handleChange}
                          className="mb-3"
                        />
                      </CCol>
                      <CCol md={6}>
                        <CFormLabel>Address</CFormLabel>
                        <CFormInput
                          placeholder="Address"
                          name="address"
                          value={customerForm.address}
                          onChange={handleChange}
                          className="mb-3"
                        />
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6}>
                        <CFormLabel>Hear about us</CFormLabel>
                        <CFormSelect
                          aria-label="hear about us"
                          name="hear_about_us"
                          value={customerForm.hear_about_us}
                          onChange={handleChange}
                          className="mb-3"
                        >
                          <option value="">Hear about us</option>
                          <option value="facebook">facebook </option>
                          <option value="instagram">instagram</option>
                        </CFormSelect>
                      </CCol>

                    </CRow>

                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          type="submit"
                          color="primary"
                          className="px-4 my-4"
                        >
                          Submit Customer
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

export default AddCustomer;
