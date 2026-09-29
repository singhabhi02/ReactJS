import React from "react";

const UserForm = ({ name, setName }) => {
  // these are props not state variable & function
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UserForm;
