import { useEffect, lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import NotFound from "./_root/NotFound";
import PackagesBillings from "./_root/PackagesBillings";

const Landing = lazy(() => import("./_root/Landing"));
const SolutionPage = lazy(() => import("./_root/Solutions"));
const Terms = lazy(() => import("./_root/Terms"));
const PackagesPage = lazy(() => import("./_root/Packages"));
const BrandingRequest = lazy(() => import("./_root/BrandingRequest"));
const PackageConfirmed = lazy(() => import("./_root/PackageConfirmed"));
const AffiliateProgramPage = lazy(() => import("./_root/AffiliateProgram"));
const AffiliateRegisterPage = lazy(() => import("./_root/AffiliateRegister"));
const AffiliateSuccessPage = lazy(() => import("./_root/AffiliateSuccess"));

const App = () => {
  const [showFirstMessage, setShowFirstMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstMessage(!showFirstMessage);
    }, 5000); // Change interval (in milliseconds) as needed
    return () => clearTimeout(timer);
  }, [showFirstMessage]);

  return (
    <>
      <Suspense
        fallback={
          <div className="w-full mx-auto h-screen flex items-center justify-center flex-col gap-2 bg-black">
            <Loader2 className="h-10 md:h-20 w-10 md:w-20 text-white animate-spin" />
            <div className="text-center">
              {showFirstMessage ? (
                <p className="text-base md:text-lg text-white">
                  Hang tight! Our servers are doing some heavy lifting.
                </p>
              ) : (
                <p className="text-base md:text-lg text-white">
                  In the meantime, why not practice your Jedi mind tricks? Try
                  to move the loading spinner with your mind... Almost there...
                </p>
              )}
            </div>
          </div>
        }
      >
        <SkeletonTheme baseColor="white" highlightColor="#525252">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/solutions" element={<SolutionPage />} />
            <Route path="/case-study" element={<SolutionPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/packages" element={<PackagesPage />} />

            <Route path="/package-thank-you" element={<PackageConfirmed />} />
            <Route path="/contact" element={<BrandingRequest />} />

            <Route
              path="/affiliate-program"
              element={<AffiliateProgramPage />}
            />
            <Route
              path="/affiliate-register"
              element={<AffiliateRegisterPage />}
            />
            <Route
              path="/affiliate-success"
              element={<AffiliateSuccessPage />}
            />

            <Route path="/packages-billing" element={<PackagesBillings />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </SkeletonTheme>
      </Suspense>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
