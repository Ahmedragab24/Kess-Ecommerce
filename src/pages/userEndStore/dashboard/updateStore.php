<?php
include '../../ConnDB_PDO.php';

session_start();
if (!isset($_SESSION['id']) || (trim($_SESSION['id']) == "")) {
    header('Location: ../index.php');
    exit();
}
$id = $_GET['updateid'];
$sql1 = "SELECT * FROM `stores` WHERE id = ?";
$stmt = $conPDO->prepare($sql1);
$stmt->execute([$id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);
if (isset($_POST['submit'])) {
    $Store_name = $_POST['Store_name'];
    $Real_store_name = $_POST['Real_store_name'];
    $Certificate_No = $_POST['Certificate_No'];
    $Phone_No = $_POST['Phone_No'];
    $Contact_no = $_POST['Contact_no'];
    $Commercial_Activity = $_POST['Commercial_Activity'];
    $Email = $_POST['Email'];
    $Store_link = $_POST['Store_link'];
    $Instagram_Link = $_POST['Instagram_Link'];
    $Store_location = $_POST['Store_location'];
    $password = $_POST['password'];
    $PhotoName = "";
    $newPhotoName = $row['Photo'];
    if (isset($_FILES['Photo']) && $_FILES['Photo']['error'] === UPLOAD_ERR_OK) {
        $PhotoTemp = $_FILES['Photo']['tmp_name'];
        $PhotoName = $_FILES['Photo']['name'];
        $newPhotoName = uniqid() . '_' . basename($PhotoName);
        $location = '../../media/storePhotes/' . $newPhotoName;
        if (move_uploaded_file($PhotoTemp, $location)) {
            // File uploaded successfully
        } else {
            // Failed to move uploaded file
            echo "Failed to move uploaded file.";
        }
    }
    $sql = "UPDATE stores SET Store_name=?, Real_store_name=?, Certificate_No=?, Phone_No=?, Contact_no=?, Commercial_Activity=?, Email=?, Store_link=?, Instagram_Link=?, Store_location=?, password=?, Photo=? WHERE id=?";
    $stmt = $conPDO->prepare($sql);
    $res = $stmt->execute([$Store_name, $Real_store_name, $Certificate_No, $Phone_No, $Contact_no, $Commercial_Activity, $Email, $Store_link, $Instagram_Link, $Store_location, $password, $newPhotoName, $id]);

    if ($res) {
        // echo "Data updated successfuly";
        header("location:index.php");
    } else { ?>
        <div class="alert alert-danger" role="alert">
            <?php htmlspecialchars($_GET['error']); ?>
        </div>
        <?php
        echo "something went wrong";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../mainStyle.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title>Kees</title>
    <style>
        .cent {
            margin: auto;
            width: 50%;
            border: 1px;
            padding: 20px;
            width: 90%;
            max-width: 50rem;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
            transition: all 0.3s ease;
        }

        .update {
            background-color: #edb74f;
            border-color: #edb74f;
        }

        .update:hover {
            background-color: #b1780b;
            border-color: #b1780b;
        }

        .header {
            position: fixed;
            top: 0;
            width: 100%;
        }
    </style>
</head>

<body>
    <?php include 'header.php'; ?>
    <script>
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        })

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }))
    </script>
    <section class="mt-5 p-2">
        <div class="container my-5">
            <form method="post" class="cent" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="Store_name">Store Name</label>
                    <input type="text" class="form-control" name="Store_name" id="Store_name"
                        value="<?php echo $row['Store_name']; ?>" placeholder="Store Name">
                </div>
                <div class="form-group">
                    <label for="Real_store_name">Real Store Name</label>
                    <input type="text" class="form-control" name="Real_store_name" id="Real_store_name"
                        value="<?php echo $row['Real_store_name']; ?>" placeholder="Real Store Name">
                </div>
                <div class="form-group">
                    <label for="Certificate_No">Certificate Number</label>
                    <input type="text" class="form-control" name="Certificate_No" id="Certificate_No"
                        value="<?php echo $row['Certificate_No']; ?>" placeholder="Certificate No">
                </div>
                <div class="form-group">
                    <label for="Phone_No">Phone Number</label>
                    <input type="text" class="form-control" name="Phone_No" id="Phone_No"
                        value="<?php echo $row['Phone_No']; ?>" placeholder="Phone Number">
                </div>
                <div class="form-group">
                    <label for="Contact_no">Contact Number</label>
                    <input type="text" class="form-control" name="Contact_no" id="Contact_no"
                        value="<?php echo $row['Contact_no']; ?>" placeholder="Contact Number">
                </div>
                <div class="form-group">
                    <label for="Commercial_Activity">Commercial Activity</label>
                    <input type="text" class="form-control" name="Commercial_Activity" id="Commercial_Activity"
                        value="<?php echo $row['Commercial_Activity']; ?>" placeholder="Commercial Activity">
                </div>
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="email" class="form-control" name="Email" id="Email"
                        value="<?php echo $row['Email']; ?>" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="Store_link">Store Link</label>
                    <input type="text" class="form-control" name="Store_link" id="Store_link"
                        value="<?php echo $row['Store_link']; ?>" placeholder="Store link">
                </div>
                <div class="form-group">
                    <label for="Instagram_Link">Instagram Link</label>
                    <input type="text" class="form-control" name="Instagram_Link" id="Instagram_Link"
                        value="<?php echo $row['Instagram_Link']; ?>" placeholder="Instagram link">
                </div>
                <div class="form-group">
                    <label for="Store_name">Store Location</label>
                    <input type="text" class="form-control" name="Store_location" id="Store_location"
                        value="<?php echo $row['Store_location']; ?>" placeholder="Store location">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password"
                        value="<?php echo $row['password']; ?>" placeholder="Password must be at least 8 characters">
                </div>
                <div class="form-group pt-3">
                    <label for="Photo">Photo</label>
                    <input type="file" class="" name="Photo" id="Photo">
                    <?php if (!empty($row['Photo'])) { ?>
                        <p>Uploaded Photo: <img width="250px" height="200px"
                                src="../../media/storePhotes/<?php echo $row['Photo']; ?>" alt="Uploaded Photo"></p>
                    <?php } ?>
                </div>

                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    </div>

</body>

</html>
