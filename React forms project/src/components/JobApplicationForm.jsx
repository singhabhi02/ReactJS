import { useState } from "react";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  role: "",
  experience: "",
  skills: "",
  portfolio: "",
  coverletter: "",
  terms: "",
};

function JobApplicationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  // Handle input Changes function
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checked" ? checked : value,
    });

    // remove error when user starts correcting the field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  //VALIDATE FORM DATA

  const ValidateForm = () => {
    const newErrors = {};

    //Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullname = "FullName is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullname = "Name must contain at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a Valid Email Address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a Valid Phone Number";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!formData.role) {
      newErrors.role = "Pleae select the job role";
    }

    if (!formData.experience) {
      newErrors.experience = "Pleae select your work experience";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Pleae enter your skills";
    }

    if (!formData.portfolio.trim()) {
      newErrors.portfolio = "Portfolio URL is required";
    }

    if (!formData.coverletter.trim()) {
      newErrors.coverletter = "coverLetter is required";
    } else if (formData.coverletter.trim().length < 50) {
      newErrors.coverletter = "Name must contain at least 50 characters";
    }

    if (!formData.terms.trim()) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = ValidateForm();

    if (!isValid) {
      return;
    }

    console.log("Application Submitted", formData);
    alert("Form Submitted Successfully");

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="form-wrapper">
      {/* ====== FORM CARD ======= */}
      <div className="form-card">
        <div className="form-header">
          <h1>Start your Career with Us</h1>
          <p>
            Submit your application and take next step towards your dream Career
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
            <div className="success-message">
                Application submitted Succesfully
            </div>
        )}

        {/* ==== FORM CREATION ==== */}

        <form onSubmit={handleSubmit}></form>
      </div>
    </div>
  );
}
