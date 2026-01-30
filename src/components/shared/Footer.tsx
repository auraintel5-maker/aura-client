
import { brand_name, footer_details } from "@/modelDataset";
import { Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#FAF9F6] text-[#0F1E3C]">
      <div className="px-10 md:px-32 py-4 grid grid-cols-1 md:grid-cols-2 border-t-[1px] border-gray-800 space-y-2 md:space-y-1">
        <div className="flex md:justify-start justify-center items-center space-x-1 md:space-x-2 text-[#0F1E3C]">
          <p className="text-xs">English (US)</p>
          <p className="text-xs">USD</p>
          <div className="flex items-center space-x-1 text-[#0F1E3C]">
            <div className="w-7 h-7 cursor-pointer">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/tiktok.png"
                  alt="TikTok logo"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-[#0F1E3C] h-4 w-4" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-3 md:space-x-4">
          <p
            className="text-xs text-[#0F1E3C] cursor-pointer"
            onClick={() => navigate("/terms")}
          >
            Privacy
          </p>
          <p
            className="text-xs text-[#0F1E3C] cursor-pointer"
            onClick={() => navigate("/terms")}
          >
            Terms
          </p>
          <a
            href="mailto:retenaaistacksorg@gmail.com"
            className="text-sm text-[#0F1E3C] font-bold cursor-pointer"
          >
            Email@ {footer_details.email}
          </a>
          <p className="text-xs font-semibold text-[#0F1E3C]">
            &copy; {new Date().getFullYear()} {brand_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
