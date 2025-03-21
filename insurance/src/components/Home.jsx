const Home = () => {
    const policies = [
        { name: "Health Insurance", description: "Covers medical expenses and hospitalization costs.", color: "bg-green-200" },
        { name: "Life Insurance", description: "Provides financial protection for your loved ones.", color: "bg-yellow-200" },
        { name: "Car Insurance", description: "Protects your vehicle against damages and accidents.", color: "bg-red-200" },
        { name: "Home Insurance", description: "Covers damages and losses to your property.", color: "bg-blue-200" },
        { name: "Travel Insurance", description: "Ensures coverage for travel-related risks.", color: "bg-purple-200" },
        { name: "Business Insurance", description: "Safeguards your business from unexpected losses.", color: "bg-pink-200" },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
            <div className="h-[400px]">
                <h1 className="text-4xl font-bold text-gray-900">Welcome to the Insurance Policy Management System</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Manage your insurance policies with ease. View, add, edit, and delete policies seamlessly.
                </p>
                <div className="mt-6">
                    <a href="/policies" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
                        Go to Dashboard
                    </a>
                </div>
            </div>
            <div>
                <p className="text-lg text-gray-700 mb-8">
                    Explore the different types of policies we offer.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {policies.map((policy, index) => (
                        <div
                            key={index}
                            className={`${policy.color} shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300`}
                        >
                            <h2 className="text-xl font-semibold text-gray-900">{policy.name}</h2>
                            <p className="text-gray-700 mt-2">{policy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Home;
