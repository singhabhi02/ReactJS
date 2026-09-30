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
      [name]: type === "checkbox" ? checked : value,
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
      newErrors.fullName = "FullName is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must contain at least 3 characters";
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

    if (!formData.terms) {
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

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your Full name"
            />

            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          {/* Email field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
            />

            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Phone number */}

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
            />

            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Enter your Date of Birth"
            />

            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          {/* Job role */}

          <div className="form-group">
            <label htmlFor="role">Applying For</label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select a job role</option>
              <option value="Frontend Develope">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Data Scientist">Data Scientis</option>
            </select>

            {errors.role && <p className="error">{errors.role}</p>}
          </div>

          {/* Experience */}
          <div className="form-group">
            <label htmlFor="experience">Work Experience</label>
            <select
              name="experience"
              id="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="">Select Work Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-2 Years">1-2 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>

            {errors.experience && <p className="error">{errors.experience}</p>}
          </div>

          {/* Skills */}
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter your skills"
            />
            <small>Seperate multiple skills using commas</small>

            {errors.skills && <p className="error">{errors.skills}</p>}
          </div>

          {/* Portfolio */}
          <div className="form-group">
            <label htmlFor="portfolio">Portfolio Link</label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
            />

            {errors.portfolio && <p className="error">{errors.portfolio}</p>}
          </div>

          {/* Cover Letter */}
          <div className="form-group">
            <label htmlFor="coverletter">Cover Letter</label>

            <textarea
              name="coverletter"
              id="coverletter"
              value={formData.coverletter}
              onChange={handleChange}
              placeholder="Tell us about yourself and why you are suitable for thsi role..."
              rows={6}
              maxLength={300}
            />
            <div className="character-count">{formData.coverletter.length}</div>
            {errors.coverletter && (
              <p className="error">{errors.coverletter}</p>
            )}
          </div>

          {/* Terms and conditions */}
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms">I accept to the terms and conditions</label>
          </div>
          {errors.terms && <p className="error">{errors.terms}</p>}

          {/* Buttons */}

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
            <button type="button" className="reset-btn" onClick={handleReset}>
              Reset Application
            </button>
          </div>
        </form>
      </div>

      {/* ======= APPLICATION PREVIEW ======= */}

      {submitted && (
        <div className="preview-card">
          <h2>Apllication Preview</h2>

          <div className="preview-item">
            <strong>Name:</strong>
            <span>{formData.fullName}</span>
          </div>
          <div className="preview-item">
            <strong>Email:</strong>
            <span>{formData.email}</span>
          </div>
          <div className="preview-item">
            <strong>Phone:</strong>
            <span>{formData.phone}</span>
          </div>
          <div className="preview-item">
            <strong>Date of Birth:</strong>
            <span>{formData.dob}</span>
          </div>
          <div className="preview-item">
            <strong>Role:</strong>
            <span>{formData.role}</span>
          </div>
          <div className="preview-item">
            <strong>Experience:</strong>
            <span>{formData.experience}</span>
          </div>
          <div className="preview-item">
            <strong>Skills:</strong>
            <span>{formData.skills}</span>
          </div>
          <div className="preview-item">
            <strong>PortFolio:</strong>
            <span>{formData.portfolio}</span>
          </div>
          <div className="preview-item">
            <strong>Cover Letter:</strong>
            <span>{formData.coverletter}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobApplicationForm;
