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
    $Store_name = $_POST['Store_name'];
    $Real_store_name = $_POST['Real_store_name'];
    $login_name = $_POST['login_name'];
    $Certificate_No = $_POST['Certificate_No'];
    $Phone_No = $_POST['Phone_No'];
    $Commercial_Activity = $_POST['Commercial_Activity'];
    $Contact_no = $_POST['Contact_no'];
    $Email = $_POST['Email'];
    $Store_link = $_POST['Store_link'];
    $Instagram_Link = $_POST['Instagram_Link'];
    $Store_location = $_POST['Store_location'];
    $password = $_POST['password'];
    $PhotoName = "";
    if (isset($_FILES['Photo']) && $_FILES['Photo']['error'] === UPLOAD_ERR_OK) {
        $PhotoTemp = $_FILES['Photo']['tmp_name'];
        $PhotoName = $_FILES['Photo']['name'];
        $newPhotoName = uniqid() . '_' . basename($PhotoName);
        $location = '../media/storePhotes/' . $newPhotoName;
        if (move_uploaded_file($PhotoTemp, $location)) {
            // File uploaded successfully
        } else {
            // Failed to move uploaded file
            echo "Failed to move uploaded file.";
        }
    }
    if ($Store_name != "" && $Real_store_name != "" && $login_name != "" && $Certificate_No != "" && $Phone_No != "" && $Contact_no != "" && $Email != "" && $Commercial_Activity != "" && $Store_link != "" && $Instagram_Link != "" && $Store_location != "" && $password != "") {
        if (isEmail($Email) && isPhone($Phone_No) && isPhone($Contact_no) && isHttpLink($Store_link) && isHttpLink($Instagram_Link) && isFileValid($PhotoName) && validatePassword($password)) {
            $sql = "INSERT INTO stores (Store_name, Real_store_name, login_name, Certificate_No, Phone_No, Commercial_Activity, Contact_no, Email, Store_link, Instagram_Link, Store_location, password, Photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $con->prepare($sql);
            $stmt->bind_param("sssssssssssss", $Store_name, $Real_store_name, $login_name, $Certificate_No, $Phone_No, $Commercial_Activity, $Contact_no, $Email, $Store_link, $Instagram_Link, $Store_location, $password, $newPhotoName);
            if ($stmt->execute()) {
                ?>
                <div class="alert alert-success mt-2 cent" style="z-index: 20;" role="alert">
                    Your form has been submitted successfully
                </div>
                <?php
                $stmt->close();
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
    $login_name = $_POST['login_name'];
    $login_password = $_POST['login_password'];
    if ($login_name != "" && $login_password != "") {
        $sql = "SELECT * FROM stores WHERE login_name = '" . $login_name . "' AND password ='" . $login_password . "'";
        $result = mysqli_query($con, $sql);
        $count1 = mysqli_num_rows($result);
        if ($count1 > 0) {
            $row = mysqli_fetch_assoc($result);
            if (isset($_POST['remember_me'])) {
                // Set up cookies
                // setcookie("user", $row['Email'], time() + (86400 * 30));
                // setcookie("pass", $row['password'], time() + (86400 * 30));
                setcookie("name", $row['login_name'], time() + 20);
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
            header('location: dashboard/index.php');
        } else { ?>
            <div class="alert alert-danger m-1 cent" role="alert">
                Wrong name or password!!
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
                    <div class="form-control-input">store name<input type="text" name="Store_name" id="Store_name"
                            placeholder="Store name"
                            value="<?php echo isset($_POST['Store_name']) ? $_POST['Store_name'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Real store name<input type="text" name="Real_store_name"
                            id="Real_store_name" placeholder="Real store name"
                            value="<?php echo isset($_POST['Real_store_name']) ? $_POST['Real_store_name'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">login name<input type="text" name="login_name" id="login_name"
                            placeholder="login name"
                            value="<?php echo isset($_POST['login_name']) ? $_POST['login_name'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Certificate Number<input type="text" name="Certificate_No"
                            id="Certificate_No" placeholder="Certificate No"
                            value="<?php echo isset($_POST['Certificate_No']) ? $_POST['Certificate_No'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Commercial Activity<input type="text" name="Commercial_Activity"
                            id="Commercial_Activity" placeholder="Commercial Activity"
                            value="<?php echo isset($_POST['Commercial_Activity']) ? $_POST['Commercial_Activity'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Phone<input type="text" name="Phone_No" id="Phone_No"
                            placeholder="Phone No"
                            value="<?php echo isset($_POST['Phone_No']) ? $_POST['Phone_No'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Contact number<input type="text" name="Contact_no" id="Contact_no"
                            placeholder="Contact No"
                            value="<?php echo isset($_POST['Contact_no']) ? $_POST['Contact_no'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Email<input type="email" name="Email" id="Email" placeholder="Email"
                            value="<?php echo isset($_POST['Email']) ? $_POST['Email'] : ''; ?>"><i class="icon"></i>
                    </div>
                    <div class="form-control-input">Store link<input type="text" name="Store_link" id="Store_link"
                            placeholder="Store link"
                            value="<?php echo isset($_POST['Store_link']) ? $_POST['Store_link'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Instagram Link<input type="text" name="Instagram_Link"
                            id="Instagram_Link" placeholder="Instagram Link"
                            value="<?php echo isset($_POST['Instagram_Link']) ? $_POST['Instagram_Link'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Store location<input type="text" name="Store_location"
                            id="Store_location" placeholder="Store location"
                            value="<?php echo isset($_POST['Store_location']) ? $_POST['Store_location'] : ''; ?>"><i
                            class="icon"></i></div>
                    <div class="form-control-input">Password<input type="password" name="password" id="password"
                            placeholder="Password"><i class="icon"></i></div>
                    <div class="form-control-input">Photo<input type="file" name="Photo" id="Photo" placeholder="Photo"
                            class="form-control"></div>
                </div>
                <button type="submit" name="submit" id="signUpButton">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form method="POST" action="">
                <h1>Sign In</h1>
                <input type="text" placeholder="login name" name="login_name" value="<?php if (isset($_COOKIE["user"])) {
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