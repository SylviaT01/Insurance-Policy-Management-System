const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Insurance Policy Management</h2>
            
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
  
          <div className="flex row space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition">About Us</a>
            <a href="/" className="text-gray-400 hover:text-white transition">Contact</a>
            <a href="/policies" className="text-gray-400 hover:text-white transition">Policies</a>
          </div>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;
  