<?php
include '../ConnDB.php';

// Validation functions
function isEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
function isPhone($phone)
{
    return preg_match("/^\+?(\d.*){3,}$/", $phone);
}
function isHttpLink($link)
{
    return preg_match("/^(https?:\/\/)?[\w\d.-]+\.[\w\d.-]+(?:\/[\w\d.-]*)*(?:\?.*)?$/", $link);
}
function isFileValid($fileName)
{
    $allowedExtensions = "/\.(png|jpg|jpeg)$/i";
    return preg_match($allowedExtensions, $fileName);
}
function validatePassword($password)
{
    return strlen(trim($password)) >= 8;
}

if (isset($_POST['submit'])) {
    $name_ar = $_POST['name_ar'];
    $name_en = $_POST['name_en'];
    $Certificate_no = $_POST['Certificate_no'];
    // $Phone_No = $_POST['contact_no'];
    $professionality = $_POST['professionality'];
    $Contact_no = $_POST['contact_no'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];
    $city = $_POST['city'];
    $password = $_POST['password'];
    $PhotoName = "";
    $logoName = "";
    if (isset($_FILES['Certificate_photo']) && $_FILES['Certificate_photo']['error'] === UPLOAD_ERR_OK) {
        $PhotoTemp = $_FILES['Certificate_photo']['tmp_name'];
        $PhotoName = $_FILES['Certificate_photo']['name'];
        $newPhotoName = uniqid() . '_' . basename($PhotoName);
        $location = '../media/freelance_photoes/' . $newPhotoName;
        if (move_uploaded_file($PhotoTemp, $location)) {
            // File uploaded successfully
        } else {
            // Failed to move uploaded file
            echo "Failed to move uploaded file.";
        }
    }
    if (isset($_FILES['logo']) && $_FILES['logo']['error'] === UPLOAD_ERR_OK) {
        $logoTemp = $_FILES['logo']['tmp_name'];
        $logoName = $_FILES['logo']['name'];
        $newLogoName = uniqid() . '_' . basename($logoName);
        $location = '../media/freelance_photoes/' . $newLogoName;
        if (move_uploaded_file($logoTemp, $location)) {
            // File uploaded successfully
        } else {
            // Failed to move uploaded file
            echo "Failed to move uploaded file.";
        }
    }
    if ($name_ar != "" && $name_en != "" && $Certificate_no != "" && $Contact_no != "" && $email != "" && $professionality != "" && $password != "") {
        if (
            isEmail($email) &&
            isPhone($Contact_no) &&
            isFileValid($PhotoName) &&
            isFileValid($logoName) &&
            validatePassword($password)
        ) {
            // if (isEmail($Email)){
            // cheking if the email already used    
            $sqlcheck = "SELECT * FROM freelance_users WHERE email = '" . $email . "'";
            $resultcheck = mysqli_query($con, $sqlcheck);
            $countcheck = mysqli_num_rows($resultcheck);
            if ($countcheck > 0) {
                ?>
                <div class="alert alert-warning m-1 cent" role="alert">
                    Email already used try another one!
                </div>
                <?php
            } else {
                $sql = "INSERT INTO freelance_users (name_ar, name_en, Certificate_no, professionality, contact_no, email, gender, country, city, password, Certificate_photo, logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $con->prepare($sql);
                $stmt->bind_param("ssssssssssss", $name_ar, $name_en, $Certificate_no, $professionality, $Contact_no, $email, $gender, $country, $city, $password, $newPhotoName, $newLogoName);
                if ($stmt->execute()) {
                    ?>
                    <div class="alert alert-success mt-2 cent" style="z-index: 20;" role="alert">
                        Your form has been submitted successfully
                    </div>
                    <?php
                    $stmt->close();
                }
            }
        } else {
            ?>
            <div class="alert alert-warning m-1 cent" role="alert">
                Not Valid Data!
            </div>
            <?php
        }
    } else {
        ?>
        <div class="alert alert-danger m-1 cent" role="alert">
            All Fields must be filled!
        </div>
        <?php
    }
}

/////////////////////////////////////////////////////////////
//////////////////////////Log in/////////////////////////////
if (isset($_POST['login_button'])) {
    session_start();
    $login_email = $_POST['login_email'];
    $login_password = $_POST['login_password'];
    if ($login_email != "" && $login_password != "") {
        $sql = "SELECT * FROM freelance_users WHERE email = '" . $login_email . "' AND password ='" . $login_password . "'";
        $result = mysqli_query($con, $sql);
        $count = mysqli_num_rows($result);
        if ($count > 0) {
            $row = mysqli_fetch_assoc($result);
            if (isset($_POST['remember_me'])) {
                // Set up cookies
                // setcookie("user", $row['Email'], time() + (86400 * 30));
                // setcookie("pass", $row['password'], time() + (86400 * 30));
                setcookie("user", $row['user'], time() + 20);
                setcookie("pass", $row['password'], time() + 20);
            }
            // Assigning user ID to session variable
            $_SESSION['id'] = $row['id'];
            ?>
            <div class="alert alert-success mt-2 cent" style="z-index: 20;" role="alert">
                success
            </div>
            <?php
            //$stmt->close();
            header('location:dashboard/index.php');
        } else { ?>
            <div class="alert alert-danger m-1 cent" role="alert">
                Wrong Email or password!!
            </div>
            <?php
        }
    } else {
        ?>
        <div class="alert alert-danger m-1 cent" role="alert">
            All Fields must be filled!
        </div>
        <?php
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="../style.css">
    <title>Login-Page</title>
</head>

<body>

    <div class="container" id="container">
        <div class="form-container sign-up">
            <form method="POST" action="" enctype="multipart/form-data">
                <div id="mainForm">
                    <h1>Create Account</h1>
                    <div class="form-control-input">Arabic name<input type="text" name="name_ar" id="name_ar"
                            placeholder="Arabic name"
                            value="<?php echo isset($_POST['name_ar']) ? $_POST['name_ar'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">English name<input type="text" name="name_en" id="name_en"
                            placeholder="English name"
                            value="<?php echo isset($_POST['name_en']) ? $_POST['name_en'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Certificate Number<input type="text" name="Certificate_no"
                            id="Certificate_no" placeholder="Certificate No"
                            value="<?php echo isset($_POST['Certificate_no']) ? $_POST['Certificate_no'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Contact Number<input type="text" name="contact_no" id="contact_no"
                            placeholder="contact Number"
                            value="<?php echo isset($_POST['contact_no']) ? $_POST['contact_no'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Professionality<input type="text" name="professionality"
                            id="professionality" placeholder="professionality"
                            value="<?php echo isset($_POST['professionality']) ? $_POST['professionality'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Email<input type="email" name="email" id="email" placeholder="Email"
                            value="<?php echo isset($_POST['email']) ? $_POST['email'] : ''; ?>"><i class="icon"></i>
                    </div>
                    <div class="form-control-input">Country<input type="text" name="country" id="country"
                            placeholder="country"
                            value="<?php echo isset($_POST['country']) ? $_POST['country'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">City<input type="text" name="city" id="city" placeholder="city"
                            value="<?php echo isset($_POST['city']) ? $_POST['city'] : ''; ?>"><i class="icon"></i>
                    </div>
                    <div class="form-control-input">Gender
                        <select name="gender" id="gender" class="form-control form-group">
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                        </select>
                    </div>
                    <div class="form-control-input">Password<input type="password" name="password" id="password"
                            placeholder="Password"><i class="icon"></i></div>
                    <div class="form-control-input">Certificate photo<input type="file" name="Certificate_photo"
                            id="Certificate_photo" placeholder="Certificate_photo" class="form-control"></div>
                    <div class="form-control-input">Logo<input type="file" name="logo" id="logo" placeholder="logo"
                            class="form-control"></div>
                </div>
                <button type="submit" name="submit" id="signUpButton">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form method="POST" action="">
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" name="login_email" value="<?php if (isset($_COOKIE["user"])) {
                    echo $_COOKIE["user"];
                } ?>">
                <input type="password" placeholder="Password" name="login_password" value="<?php if (isset($_COOKIE["pass"])) {
                    echo $_COOKIE["pass"];
                } ?>">
                <div class="ch_box"><label>Remember me.<input type="checkbox" name="remember_me" <?php if (isset($_COOKIE['user']) && isset($_COOKIE['pass'])) {
                    echo "checked";
                } ?>></label></div>
                <button type="submit" name="login_button">Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of the site features</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of the site features</p>
                    <button class="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Success!</h2>
            <p>Your form has been submitted successfully.</p>
        </div>
    </div>

    <script>
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    </script>
    <script src="script.js"></script>
</body>

</html>