import NavLinks from "./NavLinks";
import { FiPlus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FiPlus className="hamburger" onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <RiCloseFill className="hamburger" onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="MobileNavigation"

    >
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true}    
      
    closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
