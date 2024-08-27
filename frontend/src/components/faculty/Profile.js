import React, { useState } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    gender: '',
    dob: '',
    doj: '',
    address: '',
    designation: '',
    department: '',
    qualification: '',
    salary: '',
    married: '',
  });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to the backend
    console.log(formData);
  };

  const onCancel = () => {
    // Reset form data or handle cancel logic
    setFormData({
      name: '',
      mobile: '',
      gender: '',
      dob: '',
      doj: '',
      address: '',
      designation: '',
      department: '',
      qualification: '',
      salary: '',
      married: '',
    });
  };

  return (
    <div style={styles.profileForm}>
      <h2>Faculty Profile</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Enter your name"
          required
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={onChange}
          placeholder="Enter your mobile number"
          required
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={onChange}
          placeholder="Gender"
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={onChange}
          placeholder="Date of Birth"
          required
        />
        <input
          type="date"
          name="doj"
          value={formData.doj}
          onChange={onChange}
          placeholder="Date of Joining"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={onChange}
          placeholder="Designation"
          required
        />
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={onChange}
          placeholder="Department"
          required
        />
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={onChange}
          placeholder="Qualification"
          required
        />
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={onChange}
          placeholder="Salary"
          required
        />
        <select
          name="married"
          value={formData.married}
          onChange={onChange}
          required
        >
          <option value="" disabled>Select marital status</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.registerButton}>Register</button>
          <button type="button" onClick={onCancel} style={styles.cancelButton}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  profileForm: {
    marginLeft: '220px',
    padding: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  registerButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Profile;
