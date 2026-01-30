import Footer from "./Footer";
import Navbar from "./Navbar";

const WebLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full bg-[#FAF9F6] font-mont">
        <Navbar />
        <main className="h-[100dvh] overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default WebLayoutWrapper;
