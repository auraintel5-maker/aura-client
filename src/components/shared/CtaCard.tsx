import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type CtaCardProps = {
  title: ReactNode | string;
  description: ReactNode | string;
  buttonText: string;
  buttonAction?: () => void;
  imageSrc?: string;
  ctaUrl: string;
};

const CtaCard = ({
  title,
  description,
  buttonText,
  // buttonAction,
  imageSrc,
  ctaUrl
}: CtaCardProps) => {
  const navigate = useNavigate();
  return (
    <section className="bg-black py-12 px-4">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={
              imageSrc ||
              "https://cdn.pixabay.com/photo/2024/05/22/20/18/photo-8781624_1280.jpg"
            }
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-0 bg-black/20  px-6 py-10 md:px-16 md:py-16 lg:w-1/2">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-6xl font-bold text-[#FFFFFF]">
              {title ?? ""}
            </h1>

            <div className="bg-primary-black text-white rounded-2xl p-6 max-w-md space-y-4">
              <p className="text-sm md:text-base">{description ?? ""}</p>

              <div className="flex justify-center">
                <Button
                  className="bg-accent border-[1.5px] text-sm border-primary-blue2 font-semibold text-primary-black hover:bg-accent hover:primary-black flex items-center gap-2"
                  onClick={() => navigate(ctaUrl)}
                >
                  {buttonText ?? "Get Started"}
                  <ArrowRight className="text-black h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCard;

