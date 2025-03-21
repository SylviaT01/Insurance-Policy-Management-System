const PolicyItem = ({ policy }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-semibold">{policy.name}</h2>
        <p><strong>Type:</strong> {policy.type}</p>
        <p><strong>Premium:</strong> ${policy.premium}</p>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
    );
  };
  
  export default PolicyItem;
  