import Footer from './Footer'


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
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-center">
                <div className="w-full relative p-20 rounded-lg shadow-lg">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg opacity-50"
                        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/close-up-woman-holding-phone_23-2149145034.jpg?t=st=1742554176~exp=1742557776~hmac=91a56d6bfe2e885dae7992055d4c90e20350e3b80a5ed2cb4bbb47dd44b67360&w=996')" }}
                    ></div>

                    <div className="relative z-10 text-black w-full mx-auto">
                        <h1 className="text-5xl font-bold">Welcome to the Insurance Policy Management System</h1>
                        <p className="text-xl mt-4">
                            Manage your insurance policies with ease. View, add, edit, and delete policies seamlessly.
                        </p>
                        <div className="mt-6">
                            <a href="/policies" className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 hover:text-black">
                                Go to Dashboard
                            </a>
                        </div>

                    </div>
                </div>



                <div className="w-full mt-10">
                    <p className="text-lg text-gray-700 mb-8">
                        Explore the different types of policies we offer.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            <Footer />
        </>


    );
};

export default Home;
