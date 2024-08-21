import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    team: '',
    designation: '',
    billableHours: '',
    isBillable: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.birthDate) newErrors.birthDate = "Birth Date is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.startTime) newErrors.startTime = "Start Time is required";
    if (!formData.endTime) newErrors.endTime = "End Time is required";
    if (!formData.jobPosition) newErrors.jobPosition = "Job Position is required";
    if (!formData.team) newErrors.team = "Team is required";
    if (!formData.designation) newErrors.designation="Designation is required";
    if (!formData.billableHours || formData.billableHours <= 0) newErrors.billableHours = "Billable Hours is required and must be a positive number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      setFormData(
        {
          firstName: '',
          middleName: '',
          lastName: '',
          birthDate: '',
          email: '',
          phoneNumber: '',
          gender: '',
          startTime: '',
          endTime: '',
          jobPosition: '',
          team: '',
          designation: '',
          billableHours: '',
          isBillable: false
        });
    }
  };

  return (
    <div className='form'>
    <h1>Employee Form</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange}
          style={{ borderColor: errors.firstName ? 'red' : '' }}
        />
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </div>

      <div>
        <label>Middle Name</label>
        <input 
          type="text" 
          name="middleName" 
          value={formData.middleName} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange}
          style={{ borderColor: errors.lastName ? 'red' : '' }}
        />
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </div>

      <div>
        <label>Birth Date</label>
        <input 
          type="date" 
          name="birthDate" 
          value={formData.birthDate} 
          onChange={handleChange}
          style={{ borderColor: errors.birthDate ? 'red' : '' }}
        />
        {errors.birthDate && <span style={{ color: 'red' }}>{errors.birthDate}</span>}
      </div>

      <div>
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          style={{ borderColor: errors.email ? 'red' : '' }}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <div>
        <label>Phone Number</label>
        <input 
          type="tel" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange}
          style={{ borderColor: errors.phoneNumber ? 'red' : '' }}
        />
        {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label>Select Gender</label>
        <select
           type="text" 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange}
          style={{ borderColor: errors.gender ? 'red' : '' }}
        >
        <option>select gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
        </select>
        {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
      </div>
      <div>
        <label>Start Time</label>
        <input 
          type="time" 
          name="startTime" 
          value={formData.startTime} 
          onChange={handleChange}
          style={{ borderColor: errors.startTime ? 'red' : '' }}
        />
        {errors.startTime && <span style={{ color: 'red' }}>{errors.startTime}</span>}
      </div>
      <div>
        <label>End Time</label>
        <input 
          type="time" 
          name="endTime" 
          value={formData.endTime} 
          onChange={handleChange}
          style={{ borderColor: errors.endTime ? 'red' : '' }}
        />
        {errors.endTime && <span style={{ color: 'red' }}>{errors.endTime}</span>}
      </div>
      
      <div>
        <label>Job Position</label>
        <select
          type="text" 
          name="jobPosition" 
          value={formData.jobPosition} 
          onChange={handleChange}
          style={{ borderColor: errors.jobPosition ? 'red' : '' }}
        >
          <option>select position</option>
          <option>Froentend Developer</option>
          <option>Backend Developer</option>
          <option>Database Developer</option>
          <option>Fullstack Developer</option>
        </select>
        {errors.jobPosition && <span style={{ color: 'red' }}>{errors.jobPosition}</span>}
      </div>
      <div>
        <label>Select Team</label>
        <select
          type="text" 
          name="team" 
          value={formData.team} 
          onChange={handleChange}
          style={{ borderColor: errors.team ? 'red' : '' }}
        >
          <option>select team</option>
          <option>Team1</option>
          <option>Team2</option>
          <option>Team3</option>
          
        </select>
        {errors.team && <span style={{ color: 'red' }}>{errors.team}</span>}
      </div>
      <div>
        <label>Select Designation</label>
        <select
          type="text" 
          name="designation" 
          value={formData.designation} 
          onChange={handleChange}
          style={{ borderColor: errors.designation ? 'red' : '' }}
        >
          <option>select designation</option>
          <option>Fullstack</option>
          <option>Java Developer</option>
        </select>
        {errors.designation && <span style={{ color: 'red' }}>{errors.designation}</span>}
      </div>
      <div>
        <label>Billable Hours</label>
        <input 
          type="text" 
          name="billableHours" 
          value={formData.billableHours} 
          onChange={handleChange}
          style={{ borderColor: errors.birthDate ? 'red' : '' }}
        />
        {errors.billableHours && <span style={{ color: 'red' }}>{errors.billableHours}</span>}
      </div>
      <div>
        <label className='billable'>
          Is Billable
        </label>
        <input type='checkbox'
        name="isBillable" 
        value={formData.isBillable}
        checked={formData.isBillable} onChange={handleChange}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default EmployeeForm;
