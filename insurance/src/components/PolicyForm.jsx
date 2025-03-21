import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PolicyForm = ({ onAdd }) => {
  const [holderName, setHolderName] = useState("");
  const [type, setType] = useState("");
  const [premium, setPremium] = useState("");

  const policyTypes = [
    { name: "Health Insurance" },
    { name: "Life Insurance" },
    { name: "Car Insurance" },
    { name: "Home Insurance" },
    { name: "Travel Insurance" },
    { name: "Business Insurance" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPolicy = {
      policy_number: Math.floor(10000 + Math.random() * 90000).toString(),
      holder_name: holderName,
      premium_amount: parseFloat(premium),
      policy_type: type
    };
    
    fetch("http://127.0.0.1:5000/policy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPolicy),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Policy added successfully!");
        (data);
        setHolderName("");
        setType("");
        setPremium("");
      })
      .catch((error) => {
        console.error("Error adding policy:", error);
        toast.error("Failed to add policy. Try again!");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg bg-gray-200 ml-20 mr-20 mt-10">
        <h2 className="text-lg font-bold">Add Policy</h2>
        <input
          type="text"
          placeholder="Policy Holder Name"
          value={holderName}
          onChange={(e) => setHolderName(e.target.value)}
          className="w-full p-2 border rounded mt-2"
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded mt-2"
          required
        >
          <option value="" disabled>Select Policy Type</option>
          {policyTypes.map((policy, index) => (
            <option key={index} value={policy.name}>{policy.name}</option>
          ))}
        </select>
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default PolicyForm;

