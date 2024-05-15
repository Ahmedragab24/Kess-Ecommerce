import { NavDropdown, Toast } from "react-bootstrap";
import "./userProfile.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface UserProfileProps {
  userData: { email: string };
}

function UserProfile({ userData }: UserProfileProps) {
  const [userLogout, setUserLogout] = useState(false);
  const [tost, setTost] = useState<string | undefined>(undefined);
  const handleLogout = () => {
    localStorage.removeItem("User");
    setUserLogout(true);
    setTost("Logout Successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="container-avater d-flex align-items-center gap-2 ">
      <h4 className="avater-title text-color">{userData.email}</h4>

      {/* <!-- Avatar --> */}

      <NavDropdown
        title={
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="22"
            alt="Portrait of a Woman"
            loading="lazy"
          />
        }
        id="navbarDropdownMenuLink"
        role="button"
        aria-expanded="false"
      >
        <NavDropdown.Item as={Link} to="/profile" className="text-color">
          My profile
        </NavDropdown.Item>
        <NavDropdown.Item className="text-color" href="#/profile">
          Settings
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/storiesFavorites" className="text-color">
          My Favorites
        </NavDropdown.Item>
        <NavDropdown.Item
          className="text-color"
          href="#/logout"
          onClick={handleLogout}
        >
          Logout
        </NavDropdown.Item>
      </NavDropdown>
      <Toast
        className="toast-login"
        onClose={() => setUserLogout(false)}
        show={userLogout}
        delay={3000}
        autohide
        animation
      >
        <Toast.Body className="toastBody rounded">{tost}</Toast.Body>
      </Toast>
    </div>
  );
}

export default UserProfile;
