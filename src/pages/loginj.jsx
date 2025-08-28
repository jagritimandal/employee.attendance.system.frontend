// import React, { useState } from "react";
// import { Container, Box, TextField, Button, Typography, Alert } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ep1 from "../api/ep1.js";
// import global1 from "./global1.js";

// function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleLogin = async () => {
//     try {
//       const res = await ep1.post("/api/v2/loginj", form);
//       //const user = res.data.user || {};
//       const { colid, name, email, regno, role } = res.data.user;
            
//             // Store credentials in global1
//             global1.name = name;
//             global1.colid = colid;
//             global1.user = email;
//             global1.regno = regno;
//             global1.role = role;

//       setSuccess("Login successful!");
//       setError("");

//       navigate("/dashboardj");  // just navigate directly after success
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed");
//       setSuccess("");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box p={3} boxShadow={3} borderRadius={2} mt={10}>
//         <Typography variant="h5" mb={2}>Login</Typography>
//         {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
//         {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

//         <TextField label="Email" name="email" fullWidth margin="normal" value={form.email} onChange={handleChange} />
//         <TextField label="Password" name="password" type="password" fullWidth margin="normal" value={form.password} onChange={handleChange} />

//         <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
//           Login
//         </Button>
//         <Box mt={2} textAlign="center">
//           <Typography variant="body2">
//             Don't have an account?{" "}
//             <Button variant="text" onClick={() => navigate("/registerj")}>Register</Button>
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Login;
import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import global1 from "./global1.js";
import { useNavigate } from "react-router-dom";
import ep1 from "../api/ep1.js";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await ep1.post("/api/v2/loginj", formData);
      
      const { colid, name, email, regno, role } = res.data.user;
      
      // Store credentials in global1
      global1.name = name;
      global1.colid = colid;
      global1.user = email;
      global1.regno = regno;
      global1.role = role;
      setSuccess("Login successful!");
      setError("");
      console.log(global1);

      // Redirect or update UI
      navigate("/dashboardj");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setSuccess("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box p={3} boxShadow={3} borderRadius={2} mt={10}>
        <Typography variant="h5" mb={2}>Login</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;