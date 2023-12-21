import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
} from '@coreui/react';
import { AppSidebar } from 'src/components';
import moment from 'moment';

const ViewOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchOrders = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      try {
        const response = await fetch(`${apiUrl}/orders`);
        console.log('res',response);
        const data = await response.json();
        console.log('d',data);
        setOrders(data);
      } catch (error) {
        setError('Error fetching orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h4>View Orders</h4>
      <AppSidebar />
      <CCol sm="12" md="12" lg="12" xl="12" className="mx-auto">
        <CCard>
          <CCardHeader></CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableDataCell>Date</CTableDataCell>
                  <CTableDataCell>First Name</CTableDataCell>
                  <CTableDataCell>Last Name</CTableDataCell>
                  <CTableDataCell>Unit of Measure</CTableDataCell>
                  <CTableDataCell>Pick Up Date</CTableDataCell>
                  <CTableDataCell>Pick Up Time</CTableDataCell>
                  <CTableDataCell>Total Price</CTableDataCell>
                  <CTableDataCell>Discount</CTableDataCell>
                  <CTableDataCell>Discount Reason</CTableDataCell>
                  <CTableDataCell>Quantity</CTableDataCell>
                  <CTableDataCell>Service</CTableDataCell>
                  <CTableDataCell>Phone Number</CTableDataCell>
                  <CTableDataCell>Address</CTableDataCell>
                  <CTableDataCell>Action</CTableDataCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {orders.map((order) => (
                  <CTableRow key={order.id}>
                    <CTableDataCell>{order.createdAt}</CTableDataCell>
                    <CTableDataCell>{order.Customer.first_name}</CTableDataCell>
                    <CTableDataCell>{order.Customer.last_name}</CTableDataCell>
                    <CTableDataCell>{order.unitOfMeasure}</CTableDataCell>
                    <CTableDataCell>{moment(order.pickUpDate).format('MM/DD/YYYY')}</CTableDataCell>
                    <CTableDataCell>{order.pickUpTime}</CTableDataCell>
                    <CTableDataCell>{order.totalPrice}</CTableDataCell>
                    <CTableDataCell>{order.discountAmount}</CTableDataCell>
                    <CTableDataCell>{order.discountReason}</CTableDataCell>
                    <CTableDataCell>{order.quantity}</CTableDataCell>
                    <CTableDataCell>{order.service}</CTableDataCell>
                    <CTableDataCell>{order.Customer.phone_number}</CTableDataCell>
                    <CTableDataCell>{order.Customer.address}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="info" size="sm">
                        Details
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default ViewOrder;
