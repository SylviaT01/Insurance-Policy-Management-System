import { useEffect, useState } from "react";
import PolicyItem from "./PolicyItem";

const Dashboard = () => {
  const handleUpdate = (updatedPolicy) => {
    setPolicies((prevPolicies) =>
      prevPolicies.map((policy) => (policy.id === updatedPolicy.id ? updatedPolicy : policy))
    );
  };

  const handleDelete = (id) => {
    setPolicies((prevPolicies) => prevPolicies.filter((policy) => policy.id !== id));
  };
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/policies")
      .then((response) => response.json())
      .then((data) => setPolicies(data))
      .catch((error) => console.error("Error fetching policies:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Insurance Policies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <PolicyItem key={policy.id} policy={policy} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
