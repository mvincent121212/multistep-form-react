import React, { useState, useEffect } from "react";

function SignUpInfo({ formData, setFormData }) {
  const [invalidPassword, setInvalidPassword] = useState(false);

  useEffect(() => {
    if (
      formData.confirmPassword !== formData.password &&
      !invalidPassword &&
      formData.confirmPassword !== ""
    ) {
      setInvalidPassword(true);
    } else if (
      formData.confirmPassword === formData.password &&
      invalidPassword
    ) {
      setInvalidPassword(false);
    }
  }, [ formData.confirmPassword, formData.password, invalidPassword ]);

  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(event) => {
          setFormData({ ...formData, confirmPassword: event.target.value });
        }}
      />
      <div style={{ color: "red" }}>
        {invalidPassword ? "Passwords do not match" : ""}
      </div>
    </div>
  );
}

export default SignUpInfo;
