import React from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { NavMenu } from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-[#FAF9F6]">
      <nav className="container flex justify-between py-4">
        {/* <Link to={"/"} className="w-[150px] md:w-[170px]">
          <img
            src="https://res.cloudinary.com/dyryfgjro/image/upload/v1763990958/retenatextB_gku3oo.png"
            alt="brand"
            className="w-full object-contain"
            loading="lazy"
          />
        </Link> */}

        <Link to={"/"} className="font-semibold text-3xl text-[#2F2F2F]">
          Aura Intel
        </Link>

        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            className="bg-[#0F1E3C] border text-sm border-[#2F2F2F] font-semibold text-[#FAF9F6] hover:bg-[#0F1E3C] flex items-center gap-2"
            onClick={() => Navigate("/contact")}
          >
            Contact Us
            <ArrowRight className="text-[#FAF9F6] hover:text-white h-4" />
          </Button>
        </div>

        {/* Mobile */}

        <div className="md:hidden flex items-center gap-1">
          <div className="" onClick={() => setOpen(!open)}>
            <Menu className="flex items-center justify-center text-[#2F2F2F] h-7 w-7 cursor-pointer" />
          </div>
        </div>
      </nav>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
