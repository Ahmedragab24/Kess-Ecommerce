<?php
include '../../ConnDB_PDO.php';

session_start();
if (!isset($_SESSION['id']) || (trim($_SESSION['id']) == "")) {
    header('Location: ../index.php');
    exit();
}

$id = $_GET['updateid'];
$sql1 = "SELECT * FROM `products` WHERE id = ?";
$stmt = $conPDO->prepare($sql1);
$stmt->execute([$id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $name_ar = $_POST['name_ar'];
    $description = $_POST['description'];
    $description_ar = $_POST['description_ar'];
    //$store_id = $_POST['store_id'];
    $created = $_POST['created'];
    $PhotoName = "";
    $newPhotoName = $row['photo'];

    if (isset($_FILES['Photo']) && $_FILES['Photo']['error'] === UPLOAD_ERR_OK) {
        $PhotoTemp = $_FILES['Photo']['tmp_name'];
        $PhotoName = $_FILES['Photo']['name'];
        $newPhotoName = uniqid() . '_' . basename($PhotoName);
        $location = '../../media/product_photoes/' . $newPhotoName;
        if (move_uploaded_file($PhotoTemp, $location)) {
            // File uploaded successfully
        } else {
            // Failed to move uploaded file
            echo "Failed to move uploaded file.";
        }
    }

    $sql = "UPDATE products SET name=?, name_ar=?, description=?, description_ar=?, photo=? WHERE id=?";
    $stmt = $conPDO->prepare($sql);
    $res = $stmt->execute([$name, $name_ar, $description, $description_ar, $newPhotoName, $id]);

    if ($res) {
        header("location:displayServices.php");
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
                    <label for="sub_category_name">Name</label>
                    <input type="text" class="form-control" required name="name" id="name" placeholder="English Category Name"
                        value="<?php echo $row['name']; ?>">
                </div>
                <div class="form-group">
                    <label for="sub_category_name_ar">Arabic Name</label>
                    <input type="text" class="form-control" name="name_ar" id="name_ar" required
                        placeholder="Arabic Category Name" value="<?php echo $row['name_ar']; ?>">
                </div>
                <div class="form-group">
                    <label for="EmailInput">English Description</label>
                    <textarea class="form-control" name="description" id="description"
                        placeholder="Arabic Description"><?php echo $row['description']; ?></textarea>
                </div>
                <div class="form-group">
                    <label for="description_ar">Arabic Description</label>
                    <textarea class="form-control" name="description_ar" id="description_ar"
                        placeholder="Arabic Description"><?php echo $row['description_ar']; ?></textarea>
                </div>
                <div class="form-group pt-3">
                    <label for="Photo">Photo</label>
                    <input type="file" class="" name="Photo" id="Photo">
                    <?php if (!empty($row['photo'])) { ?>
                        <p>Uploaded Photo: <img width="250px" height="200px"
                                src="../../media/product_photoes/<?php echo $row['photo']; ?>" alt="Uploaded Photo"></p>
                    <?php } ?>
                </div>
                <button type="submit" name="submit" class="btn btn-primary update">Update</button>
            </form>
        </div>
    </section>
</body>
</html>
