import React, { useState, useEffect } from "react";
import axios from "axios";
import {
 // CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
} from "@coreui/react";

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await axios.get(`${apiUrl}/customers`);

        if (response.status === 200) {
          setCustomers(response.data);
        } else {
          console.error("Failed to fetch customers:", response.data.error);
        }
      } catch (error) {
        console.error("API request error:", error);
      }
    }

    fetchCustomers();
  }, [apiUrl]);

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1 className="mb-4">View Customers</h1>
                  <CTable align="middle" className="mb-0 border" hover responsive>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableDataCell>ID</CTableDataCell>
                        <CTableDataCell>First Name</CTableDataCell>
                        <CTableDataCell>Last Name</CTableDataCell>
                        <CTableDataCell>Address</CTableDataCell>
                        <CTableDataCell>Phone Number</CTableDataCell>
                        <CTableDataCell>Created At</CTableDataCell>
                        <CTableDataCell>Updated At</CTableDataCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {customers.map((customer) => (
                        <CTableRow key={customer.id}>
                          <CTableDataCell>{customer.id}</CTableDataCell>
                          <CTableDataCell>{customer.first_name}</CTableDataCell>
                          <CTableDataCell>{customer.last_name}</CTableDataCell>
                          <CTableDataCell>{customer.address}</CTableDataCell>
                          <CTableDataCell>{customer.phone_number}</CTableDataCell>
                          <CTableDataCell>{customer.createdAt}</CTableDataCell>
                          <CTableDataCell>{customer.updatedAt}</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ViewCustomers;
