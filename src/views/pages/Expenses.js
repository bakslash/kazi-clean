import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
} from '@coreui/react';

const ExpensesTable = () => {
  const [expenseForm, setExpenseForm] = useState({
    date: '',
    description: '',
    paymentMethod: '',
    vendor: '',
    transactionCode: '',
    serviceType: '',
  });

  const expenses = [
    // Add sample expense data here
    {
      id: 1,
      date: '2023-01-01',
      description: 'Office Supplies',
      paymentMethod: 'Credit Card',
      vendor: 'ABC Stationery',
      transactionCode: 'TRX123',
      serviceType: 'General',
    },
    // Add more expenses as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseForm({ ...expenseForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // You can add the entered expense to the expenses array
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CCard className="p-4">
              <CCardBody>
                <h1 className="mb-4">Expenses Table</h1>
                <CForm onSubmit={handleSubmit}>
                  <CRow className="mb-3">
                    <CCol md={4}>
                      <CFormLabel>Date</CFormLabel>
                      <CFormInput
                        type="date"
                        name="date"
                        value={expenseForm.date}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel>Description</CFormLabel>
                      <CFormInput
                        placeholder="Description"
                        name="description"
                        value={expenseForm.description}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel>Payment Method</CFormLabel>
                      <CFormSelect
                        name="paymentMethod"
                        value={expenseForm.paymentMethod}
                        onChange={handleChange}
                      >
                        <option value="">Select Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        {/* Add more payment methods */}
                      </CFormSelect>
                    </CCol>
                  </CRow>

                  <CRow className="mb-3">
                    <CCol md={4}>
                      <CFormLabel>Vendor</CFormLabel>
                      <CFormInput
                        placeholder="Vendor"
                        name="vendor"
                        value={expenseForm.vendor}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel>Transaction Code</CFormLabel>
                      <CFormInput
                        placeholder="Transaction Code"
                        name="transactionCode"
                        value={expenseForm.transactionCode}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel>Service Type</CFormLabel>
                      <CFormSelect
                        name="serviceType"
                        value={expenseForm.serviceType}
                        onChange={handleChange}
                      >
                        <option value="">Select Service Type</option>
                        <option value="General">General</option>
                        <option value="Maintenance">Maintenance</option>
                        {/* Add more service types */}
                      </CFormSelect>
                    </CCol>
                  </CRow>

                  <CButton type="submit" color="primary" className="px-4 my-4">
                    Submit
                  </CButton>
                </CForm>

                <CTable align="middle" className="mb-0 border" hover responsive>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableDataCell>Date</CTableDataCell>
                      <CTableDataCell>Description</CTableDataCell>
                      <CTableDataCell>Payment Method</CTableDataCell>
                      <CTableDataCell>Vendor</CTableDataCell>
                      <CTableDataCell>Transaction Code</CTableDataCell>
                      <CTableDataCell>Service Type</CTableDataCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {expenses.map((expense) => (
                      <CTableRow key={expense.id}>
                        <CTableDataCell>{expense.date}</CTableDataCell>
                        <CTableDataCell>{expense.description}</CTableDataCell>
                        <CTableDataCell>{expense.paymentMethod}</CTableDataCell>
                        <CTableDataCell>{expense.vendor}</CTableDataCell>
                        <CTableDataCell>{expense.transactionCode}</CTableDataCell>
                        <CTableDataCell>{expense.serviceType}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ExpensesTable;
