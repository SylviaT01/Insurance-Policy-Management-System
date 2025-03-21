import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PolicyItem = ({ policy, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [holderName, setHolderName] = useState(policy.holder_name);
  const [type, setType] = useState(policy.policy_type);
  const [premium, setPremium] = useState(policy.premium_amount);

  const handleEdit = () => setIsEditing(true);

  const handleUpdate = async () => {
    const updatedPolicy = { holder_name: holderName, policy_type: type, premium_amount: parseFloat(premium) };

    try {
      const response = await fetch(`http://127.0.0.1:5000/policy/${policy.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPolicy),
      });

      if (!response.ok) throw new Error("Failed to update policy");

      const data = await response.json();
      toast.success("Policy updated successfully!  Refresh page");
      console.log(data); 
      onUpdate(data); 
      setIsEditing(false);
    } catch (error) {
      toast.error("Error updating policy");
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/policy/${policy.id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Failed to delete policy");

      toast.success("Policy deleted successfully!");
      console.log(policy.id); 
      onDelete(policy.id); 
    } catch (error) {
      toast.error("Error deleting policy");
      console.error(error);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      {isEditing ? (
        <div>
          <input type="text" value={holderName} onChange={(e) => setHolderName(e.target.value)} className="w-full p-2 border rounded mt-2" />
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 border rounded mt-2" />
          <input type="number" value={premium} onChange={(e) => setPremium(e.target.value)} className="w-full p-2 border rounded mt-2" />
          <button onClick={handleUpdate} className="bg-green-500 text-white px-3 py-1 rounded mt-3">Save</button>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-semibold">Name: {policy.holder_name}</h2>
          <p><strong>Premium Amount:</strong> {policy.premium_amount}</p>
          <p><strong>Type:</strong> {policy.policy_type}</p>
          <div className="mt-4 flex justify-between">
            <button onClick={handleEdit} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </>
      )}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default PolicyItem;
