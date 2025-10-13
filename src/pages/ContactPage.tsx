import React from "react";
import SpotlightCard from "../components/SpotlightCard";
import "../css/ContactForm.css";
import logo from "../logo.svg";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// ---- Dark TextField ----
const DarkTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: "#D7DEDF",
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    backgroundColor: "rgba(35, 33, 33, 0.3)",
    borderRadius: "0.75rem",
  },
  "& label": {
    color: "#aaa",
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  "& label.Mui-focused": {
    color: "#93b9e1",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.18)",
    },
    "&:hover fieldset": {
      borderColor: "#93b9e1",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3188b3",
      boxShadow: "0 0 12px rgba(147, 225, 158, 0.4)",
    },
  },
}));

// ---- Dark Checkbox ----
const DarkCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#93b9e1",
  "&.Mui-checked": {
    color: "#93e19e",
  },
  "&:hover": {
    backgroundColor: "rgba(147, 185, 225, 0.08)",
    borderRadius: "6px",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.4rem",
  },
}));

// ---- Submit Button ----
const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: "1.5rem",
  padding: "0.75rem 2rem",
  borderRadius: "0.75rem",
  textTransform: "none",
  fontWeight: 600,
  fontFamily:
    'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  fontSize: "1rem",
  color: "#fff",
  backgroundColor: "#93b9e1",
  boxShadow: "0 4px 20px rgba(147,185,225,0.4)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#7ca6d1",
    boxShadow: "0 6px 25px rgba(147,185,225,0.6)",
  },
}));

// ---- Component ----
const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Burada backend entegrasyonu yapılabilir)");
  };

  return (
    <div className="contact-page">
      {/* Sayfa Başlığı */}
      <header className="contact-page-header">
        <h1 className="contact-page-title">Contact Me</h1>
      </header>

      {/* Spotlight Kartlı Form */}
      <div className="contact-form">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 12, y: 12 }}
        >
          <form className="contact-content" onSubmit={handleSubmit}>
            <img src={logo} alt="Logo" className="card-icon" />

            <DarkTextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <DarkTextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <DarkTextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <DarkTextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />

            <FormControlLabel
              control={<DarkCheckbox required />}
              label={
                <span style={{ color: "#D7DEDF", fontSize: "0.9rem" }}>
                  I agree to the terms & conditions
                </span>
              }
            />

            <SubmitButton type="submit" variant="contained" fullWidth>
              Send Message
            </SubmitButton>
          </form>
        </SpotlightCard>
      </div>

      {/* Footer */}
      <div style={{ position: "relative", zIndex: 1, paddingBottom: "5rem" }}>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Esad Abdullah Kösedağ. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
