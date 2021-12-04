import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Age"
        value={formData.age}
        onChange={(event) =>
          setFormData({ ...formData, age: event.target.value })
        }
      />
    </div>
  );
}

export default PersonalInfo;
