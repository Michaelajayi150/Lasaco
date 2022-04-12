import React from "react";

function DepartmentList() {
  const Departments = [
    "ICT",
    "R & D",
    "Motors",
    "HR",
    "Internal Control",
    "Corporate Communication",
    "Financial Department",
    "Sales",
    "Customer Service",
  ];

  return (
    <div className="dept-cards">
      {Departments.map((index, key) => {
        return (
          <div className="dept-card-item">
            <h2>{index}</h2>
            <div className="dept-pass">
              <input
                className="input"
                type="password"
                placeholder="Department Passcode"
                id={"password-" + key}
                autoFocus
                required
              />
              <button>SUBMIT</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DepartmentList;
