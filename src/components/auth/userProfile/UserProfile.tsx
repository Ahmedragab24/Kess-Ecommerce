import { NavDropdown } from "react-bootstrap";
import "./userProfile.css";

interface UserProfileProps {
  userData: { email: string };
}

function UserProfile({ userData }: UserProfileProps) {
  const handleLogout = () => {
    localStorage.removeItem("User");
    window.location.reload();
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
        <NavDropdown.Item className="text-color" href="#/profile">
          My profile
        </NavDropdown.Item>
        <NavDropdown.Item className="text-color" href="#/profile">
          My Stories
        </NavDropdown.Item>
        <NavDropdown.Item className="text-color" href="#/settings">
          Settings
        </NavDropdown.Item>
        <NavDropdown.Item
          className="text-color"
          href="#/logout"
          onClick={handleLogout}
        >
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default UserProfile;
