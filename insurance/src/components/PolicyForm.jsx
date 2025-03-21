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
    { name: "Business Insurance" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPolicy = {
      policy_number: Math.floor(10000 + Math.random() * 90000).toString(),
      holder_name: holderName,
      premium_amount: parseFloat(premium),
      policy_type: type,
    };

    fetch("https://backend-ims-16w9.onrender.com/policy", {
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
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Add Policy</h2>
          
          <input
            type="text"
            placeholder="Policy Holder Name"
            value={holderName}
            onChange={(e) => setHolderName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mt-3"
            required
          />
          
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mt-3"
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
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mt-3"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-gray-500 text-white font-medium px-4 py-3 rounded-lg mt-4 hover:bg-yellow-400 transition duration-200 hover:text-black"
          >
            Add Policy
          </button>
        </form>
      </div>
      
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default PolicyForm;
