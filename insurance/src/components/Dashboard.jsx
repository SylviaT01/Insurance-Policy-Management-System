

import { useEffect, useState } from "react";
import PolicyItem from "./PolicyItem";
import SearchFilter from "./SearchFilter";
import { ClipLoader } from "react-spinners";
import Footer from './Footer'

const Dashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-ims-16w9.onrender.com/policies")
      .then((response) => response.json())
      .then((data) => {
        setPolicies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching policies:", error);
        setLoading(false);
      });
  }, []);

  const handleUpdate = (updatedPolicy) => {
    setPolicies((prevPolicies) =>
      prevPolicies.map((policy) => (policy.id === updatedPolicy.id ? updatedPolicy : policy))
    );
  };

  const handleDelete = (id) => {
    setPolicies((prevPolicies) => prevPolicies.filter((policy) => policy.id !== id));
  };

  const filteredPolicies = policies.filter((policy) =>
    policy.holder_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.policy_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Insurance Policies</h1>
      <SearchFilter setSearchTerm={setSearchTerm} />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader height="80" width="80" color="#010630" ariaLabel="loading" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPolicies.length > 0 ? (
            filteredPolicies.map((policy) => (
              <PolicyItem key={policy.id} policy={policy} onUpdate={handleUpdate} onDelete={handleDelete} />
            ))
          ) : (
            <p className="text-center col-span-full">No policies found.</p>
          )}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
