import { useState } from "react";

const PolicyForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [premium, setPremium] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPolicy = { name, type, premium: parseFloat(premium) };
    
    fetch("http://127.0.0.1:5000/policies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPolicy),
    })
      .then((response) => response.json())
      .then((data) => onAdd(data))
      .catch((error) => console.error("Error adding policy:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold">Add Policy</h2>
      <input
        type="text"
        placeholder="Policy Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        required
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        required
      />
      <input
        type="number"
        placeholder="Premium Amount"
        value={premium}
        onChange={(e) => setPremium(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-3 rounded">
        Add Policy
      </button>
    </form>
  );
};

export default PolicyForm;
