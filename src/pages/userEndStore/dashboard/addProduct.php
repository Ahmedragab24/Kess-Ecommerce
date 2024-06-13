<?php

include '../../ConnDB.php';

session_start();

if (!isset($_SESSION['id']) || (trim($_SESSION['id']) == "")) {

    header('Location: ../index.php');

    exit();

}

$id = $_SESSION['id'];

if (isset($_POST['submit'])) {

    $name = $_POST['name'];

    $name_ar = $_POST['name_ar'];

    $parent_id = $_POST['parent_id'];

    $description = $_POST['description'];

    $description_ar = $_POST['description_ar'];

    $store = $id;

    $PhotoName = "";

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

    if (!$name == "" && !$name_ar == "" && !$PhotoName == "") {

        $sql = "insert into `products` (name,name_ar,description,description_ar,store_id,category_id,photo,created)

                values('$name','$name_ar','$description','$description_ar',$store,$parent_id,'$newPhotoName', NOW())";

        $result = mysqli_query($con, $sql);

        if ($result) {

            // echo "Data inserted successfuly";

            header("location:displayProducts.php");

        } else {

            ?>

            <div class="alert alert-danger" role="alert">

                <?= htmlspecialchars($_GET['error']); ?>

            </div>

            <?php

        }

    } else {

        ?>

        <div class="alert alert-danger" style="margin-top: 100px;" role="alert">

            missing mandatory fields!!

        </div>

        <?php

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

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"

        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">

    <link rel="stylesheet" href="../../mainStyle.css">

    <link rel="stylesheet" href="cards.css">

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



        .nav-branding,

        .nav-menu,

        .nav-link {

            color: white;

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

                    <label for="name">English Name</label>

                    <input type="text" class="form-control" name="name" id="name" placeholder="English Name"

                        value="<?php echo isset($_POST['name']) ? $_POST['name'] : ''; ?>">

                </div>

                <div class="form-group">

                    <label for="name_ar">Arabic Name</label>

                    <input type="text" class="form-control" name="name_ar" id="name_ar" placeholder="Arabic Name"

                        value="<?php echo isset($_POST['name_ar']) ? $_POST['name_ar'] : ''; ?>">

                </div>
                <div class="form-group">
                <label class="form-label" for="parent_id">Your Store Category</label><br>
                <small style="color:red;">please make sure that you have already choosed your store categories correctly</small>
                    <select name="parent_id" id="parent_id" class="form-control">
                        
                        <?php
                        $sql1 = "SELECT * from categories WHERE id in( SELECT category_id FROM `category_stores` WHERE store_id ='".$id."')";
                        $result1 = mysqli_query($con, $sql1);
                        if (mysqli_num_rows($result1) > 0) {
                            while ($row = mysqli_fetch_assoc($result1)) {
                                ?>
                                <option value="<?php echo $row['id']; ?>">
                                    <?php echo $row['category_name']; ?>
                                </option>
                                <?php
                            }
                        }
                        ?>
                    </select>
                </div>
                <div class="form-group">

                    <label for="EmailInput">English Description</label>

                    <textarea class="form-control" name="description" id="description"

                        placeholder="English Description"><?php echo isset($_POST['description']) ? $_POST['description'] : ''; ?></textarea>

                </div>

                <div class="form-group">

                    <label for="description_ar">Arabic Description</label>

                    <textarea class="form-control" name="description_ar" id="description_ar"

                        placeholder="Arabic Description"><?php echo isset($_POST['description_ar']) ? $_POST['description_ar'] : ''; ?></textarea>

                </div>

                <div class="form-control-input">

                    Photo<input type="file" name="Photo" id="Photo" placeholder="Photo" class="form-control">

                </div>

                <br>

                <button type="submit" name="submit" class="btn">Submit</button>

            </form>

        </div>

    </section>

</body>


</html>