import { NavDropdown, Toast } from "react-bootstrap";
import "./userProfile.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const getLang = localStorage.getItem("lang");

interface UserProfileProps {
    userData: { first_name: string };
}

function UserProfile({ userData }: UserProfileProps) {
    const [userLogout, setUserLogout] = useState(false);
    const [tost, setTost] = useState<string | undefined>(undefined);

    const handleLogout = () => {
        localStorage.removeItem("User");
        setTost("Logout Successfully");
        setUserLogout(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <div className="container-avater d-flex align-items-center gap-2 ">
            {/* <!-- Avatar --> */}

            <NavDropdown
                className="NavDropdown"
                title={userData.first_name}
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
            >
                <NavDropdown.Item
                    href="#action/3.1"
                    as={Link}
                    to="/profile"
                    className="text-color"
                >
                    {getLang === "ar" ? "الملف الشخصي" : "My Profile"}
                </NavDropdown.Item>
                <NavDropdown.Item
                    href="#action/3.2"
                    as={Link}
                    to="/storiesFavorites"
                    className="text-color"
                >
                    {getLang === "ar" ? "المفضلة" : "My Favorites"}
                </NavDropdown.Item>
                <NavDropdown.Item
                    href="#action/3.3"
                    as={Link}
                    to="/"
                    onClick={handleLogout}
                    className="text-color"
                >
                    {getLang === "ar" ? "تسجيل الخروج" : "Logout"}
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
