import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Address Line 1"
        value={formData.addressLine1}
        onChange={(event) =>
          setFormData({ ...formData, addressLine1: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Address Line 2"
        value={formData.addressLine2}
        onChange={(event) =>
          setFormData({ ...formData, addressLine2: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, city: event.target.value })
        }
      />
    </div>
  );
}

export default OtherInfo;
