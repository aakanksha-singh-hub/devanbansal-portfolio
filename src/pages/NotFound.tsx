import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-teal/5 blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-teal/5 blur-3xl"></div>
      
      <div className="text-center relative z-10 px-6 animate-fade-in-up">
        <h1 className="text-7xl lg:text-9xl font-bold mb-6 text-white font-geist-mono">
          <span className="text-teal">4</span>0<span className="text-teal">4</span>
        </h1>
        <div className="w-16 h-[2px] bg-teal mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 mb-8 font-geist-mono">Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-white bg-black border border-teal/30 px-6 py-3 rounded-md hover:bg-teal/10 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-teal" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
