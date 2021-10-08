import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <div className="navbar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;