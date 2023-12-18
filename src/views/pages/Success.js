import React from "react";
import { CContainer, CRow, CCol, CCard, CCardBody, CButton } from "@coreui/react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    // You can redirect to the home page or any other page
    navigate("/");
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard className="p-4">
              <CCardBody>
                <h1 className="mb-4">Success!</h1>
                <p>Your action was successful.</p>
                <CButton
                  type="button"
                  color="primary"
                  className="px-4 my-4"
                  onClick={handleBackToHome}
                >
                  Back to Home
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SuccessPage;
