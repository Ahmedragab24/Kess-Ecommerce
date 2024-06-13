<?php
include '../../ConnDB_PDO.php';

session_start();
if (!isset($_SESSION['id']) || (trim($_SESSION['id']) == "")) {
    header('Location: ../index.php');
    exit();
}

$id = $_GET['updateid'];
$sql1 = "SELECT * FROM `freelance_users` WHERE id = ?";
$stmt = $conPDO->prepare($sql1);
$stmt->execute([$id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if (isset($_POST['submit'])) {
    $name_ar = $_POST['name_ar'];
    $name_en = $_POST['name_en'];
    $contact_no = $_POST['contact_no'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $professionality = $_POST['professionality'];
    $country = $_POST['country'];
    $city = $_POST['city'];
    $password = $_POST['password'];
    $Certificate_no = $_POST['Certificate_no'];
    $PhotoName = "";
    $logoName = "";
    $Certificate_photo = $row['Certificate_photo'];
    $logo = $row['logo'];

    if (isset($_FILES['Photo']) && $_FILES['Photo']['error'] === UPLOAD_ERR_OK) {
        $PhotoTemp = $_FILES['Photo']['tmp_name'];
        $PhotoName = $_FILES['Photo']['name'];
        $Certificate_photo = uniqid() . '_' . basename($PhotoName);
        $location = '../../media/freelance_photoes/' . $Certificate_photo;
        if (move_uploaded_file($PhotoTemp, $location)) {
            // File uploaded successfully
        } else {
            // Failed to move uploaded file
            echo "Failed to move uploaded file.";
        }
    }

    if (isset($_FILES['logo']) && $_FILES['logo']['error'] === UPLOAD_ERR_OK) {
        $PhotoTemp = $_FILES['logo']['tmp_name'];
        $logoName = $_FILES['logo']['name'];
        $logo = uniqid() . '_' . basename($logoName);
        $location = '../../media/freelance_photoes/' . $logo;
        if (move_uploaded_file($PhotoTemp, $location)) {
            // File uploaded successfully
        } else {
            // Failed to move uploaded file
            echo "Failed to move uploaded file.";
        }
    }

    $sql = "UPDATE freelance_users SET name_ar=?, name_en=?, contact_no=?, email=?, gender=?, professionality=?, country=?, city=?, Certificate_no=?, logo=?, Certificate_photo=?, `password`=? WHERE id=?";
    $stmt = $conPDO->prepare($sql);
    $res = $stmt->execute([$name_ar, $name_en, $contact_no, $email, $gender, $professionality, $country, $city, $Certificate_no, $logo, $Certificate_photo, $password, $id]);

    if ($res) {
        header("location:index.php");
    } else { ?>
        <div class="alert alert-danger" role="alert">
            <?= htmlspecialchars($_GET['error']); ?>
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
            <form method="POST" class="cent" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="name_en">English name</label>
                    <input type="text" class="form-control" name="name_en" id="name_en" placeholder="English name"
                        value="<?php echo $row['name_en']; ?>">
                </div>
                <div class="form-group">
                    <label for="name_ar">Arabic name</label>
                    <input type="text" class="form-control" name="name_ar" id="name_ar" placeholder="Arabic name"
                        value="<?php echo $row['name_ar']; ?>">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email"
                        value="<?php echo $row['email']; ?>">
                </div>
                <div class="form-group">
                    <label for="contact_no">Contact number</label>
                    <input type="text" class="form-control" name="contact_no" id="contact_no"
                        placeholder="contact number" value="<?php echo $row['contact_no']; ?>">
                </div>
                Gender
                <select name="gender" id="gender" class="form-control form-group">
                    <?php if ($row['gender'] == 0) { ?>
                        <option value="0" selected>Male</option>
                        <option value="1">Female</option>
                    <?php } else { ?>
                        <option value="0">Male</option>
                        <option value="1" selected>Female</option>
                    <?php } ?>
                </select>
                <div class="form-group">
                    <label for="job">professionality</label>
                    <input type="text" class="form-control" name="professionality" id="professionality"
                        placeholder="professionality" value="<?php echo $row['professionality']; ?>">
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <input type="text" class="form-control" name="country" id="country" placeholder="country"
                        value="<?php echo $row['country']; ?>">
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" class="form-control" name="city" id="city" placeholder="City"
                        value="<?php echo $row['city']; ?>">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" placeholder="password"
                        value="<?php echo $row['password']; ?>">
                </div>
                <div class="form-group">
                    <label for="Certificate_no">Certificate Number</label>
                    <input type="text" class="form-control" name="Certificate_no" id="Certificate_no"
                        placeholder="Certificate Number" value="<?php echo $row['Certificate_no']; ?>">
                </div>
                <div class="form-group pt-3">
                    <label for="Photo">Photo</label>
                    <input type="file" class="" name="Photo" id="Photo">
                    <?php if (!empty($row['Certificate_photo'])) { ?>
                        <p>Uploaded Certificate: <img width="250px" height="200px"
                                src="../../media/freelance_photoes/<?php echo $row['Certificate_photo']; ?>"
                                alt="Uploaded Certificate"></p>
                    <?php } ?>
                </div>
                <div class="form-group pt-3">
                    <label for="logo">Logo</label>
                    <input type="file" class="" name="logo" id="logo">
                    <?php if (!empty($row['logo'])) { ?>
                        <p>Uploaded logo: <img width="250px" height="200px"
                                src="../../media/freelance_photoes/<?php echo $row['logo']; ?>" alt="Uploaded Logo"></p>
                    <?php } ?>
                </div>
                <button type="submit" name="submit" class="btn btn-primary update">Update</button>
            </form>
        </div>
    </section>
</body>

</html>
