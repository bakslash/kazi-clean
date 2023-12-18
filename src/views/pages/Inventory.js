import React from 'react';
import {
  //CButton,
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

const ViewOrder = () => {
  // Dummy data for testing
  const inventoryData = [
    {
      id: 1,
      description: 'Product A',
      brand: 'Brand X',
      unitOfMeasure: 'Kg',
      discrepancies: 2,
      physicalCount: 98,
    },
    {
      id: 2,
      description: 'Product B',
      brand: 'Brand Y',
      unitOfMeasure: 'Lb',
      discrepancies: 0,
      physicalCount: 150,
    },
    // Add more inventory items as needed
  ];

  return (
    <>
      <h2>Inventory</h2>
      <AppSidebar />
      <CCol sm="10" md="8" lg="8" xl="8" className="mx-auto">
        <CCard>
          <CCardHeader></CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableDataCell>ID</CTableDataCell>
                  <CTableDataCell>Description</CTableDataCell>
                  <CTableDataCell>Brand</CTableDataCell>
                  <CTableDataCell>Unit of Measure</CTableDataCell>
                  <CTableDataCell>Discrepancies</CTableDataCell>
                  <CTableDataCell>Physical Count</CTableDataCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {inventoryData.map((item) => (
                  <CTableRow key={item.id}>
                    <CTableDataCell>{item.id}</CTableDataCell>
                    <CTableDataCell>{item.description}</CTableDataCell>
                    <CTableDataCell>{item.brand}</CTableDataCell>
                    <CTableDataCell>{item.unitOfMeasure}</CTableDataCell>
                    <CTableDataCell>{item.discrepancies}</CTableDataCell>
                    <CTableDataCell>{item.physicalCount}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      {/* New Orders and Consumption Entries Section */}
      <CCol sm="10" md="8" lg="8" xl="8" className="mx-auto mt-4">
        <CCard>
          <CCardHeader></CCardHeader>
          <CCardBody>
            {/* Add your new orders and consumption entries here */}
            {/* Example: */}
            <h3>New Orders</h3>
            <CTable align="middle" className="mb-0 border" hover responsive>
              {/* Add table headers for new orders */}
              <CTableHead color="light">
                <CTableRow>
                  {/* Add appropriate headers for new orders */}
                  <CTableDataCell>Order ID</CTableDataCell>
                  <CTableDataCell>Date</CTableDataCell>
                  <CTableDataCell>Quantity</CTableDataCell>
                </CTableRow>
              </CTableHead>
              {/* Add table body for new orders */}
              <CTableBody>
                {/* Add rows for new orders */}
                {/* Example: */}
                <CTableRow>
                  <CTableDataCell>1</CTableDataCell>
                  <CTableDataCell>2023-03-01</CTableDataCell>
                  <CTableDataCell>10</CTableDataCell>
                </CTableRow>
                {/* Add more rows as needed */}
              </CTableBody>
            </CTable>

            {/* Add a separator or section title for consumption entries */}
            <hr className="my-4" />
            <h3>Consumption Entries</h3>
            <CTable align="middle" className="mb-0 border" hover responsive>
              {/* Add table headers for consumption entries */}
              <CTableHead color="light">
                <CTableRow>
                  {/* Add appropriate headers for consumption entries */}
                  <CTableDataCell>Entry ID</CTableDataCell>
                  <CTableDataCell>Date</CTableDataCell>
                  <CTableDataCell>Quantity</CTableDataCell>
                </CTableRow>
              </CTableHead>
              {/* Add table body for consumption entries */}
              <CTableBody>
                {/* Add rows for consumption entries */}
                {/* Example: */}
                <CTableRow>
                  <CTableDataCell>1</CTableDataCell>
                  <CTableDataCell>2023-03-05</CTableDataCell>
                  <CTableDataCell>5</CTableDataCell>
                </CTableRow>
                {/* Add more rows as needed */}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default ViewOrder;
