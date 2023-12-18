/* prettier-ignore */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { userLogin, userRoles } from "src/services/api";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
 // CDropdown,
  //CDropdownItem,
  //CDropdownToggle,
  CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", role: "" });
  const [roles, setRoles] = useState([]);

  useEffect(() => {
  const looged =  window.sessionStorage.getItem(
      "loginData",)
      if (looged){
        navigate("/admin");
      }
      console.log('t',looged);
      async function fetchData() {
        try {
      const response = await userRoles();
      if (response.status === 200) {
        setRoles(response.data);
      } else {
        const errorMessage = response.data.message || "role fetching failed";
        console.error(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
  }, [navigate]);
  console.log(roles);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUser({ ...user, [name]: value });
  };
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setUser({ ...user, role: selectedRole });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await userLogin(user.email, user.password);

      if (response.status === 200) {
        console.log('res', response);
      
        // Destructure the relevant information from the response object
        const { token, user } = response.data;
        const { email,id } = user;
        
        console.log(token, id, email);
      
        // Store the information in session storage
        window.sessionStorage.setItem(
          "loginData",
          JSON.stringify({
            token,
            
            id,
            email
          })
        );
      
        // Redirect to the home page
        navigate("/admin");
      
      
      } else {
        const errorMessage = response.data.message || "Login failed";
        console.error(errorMessage);
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  return (
    <div className="bg-coral min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="email"
                        autoComplete="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CFormSelect
  aria-label="Role select"
  onChange={handleRoleChange}
  name="role"
>
  {roles.map((role) => (
    <option key={role.id} value={role.id}>
      {role.role}
    </option>
  ))}
</CFormSelect>


                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          type="submit"
                          color="primary"
                          className="px-4 my-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0 my-4">
                          Forgot password?
                        </CButton>
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

export default Login;
