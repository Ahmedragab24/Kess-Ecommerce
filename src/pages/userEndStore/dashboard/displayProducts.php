<?php

include '../../ConnDB.php';

session_start();

if (!isset($_SESSION['id']) || (trim($_SESSION['id']) == "")) {

    header('Location: ../index.php');

    exit();

}

$id = $_SESSION['id'];

?>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>

        .delete-btn:hover::before {

            content: attr(data-deleteid);

            position: absolute;

            background: rgba(0, 0, 0, 0.8);

            color: #fff;

            padding: 5px 10px;

            border-radius: 5px;

            top: 30px;

            left: 50%;

            transform: translateX(-50%);

            z-index: 999;

        }



        .header {

            position: fixed;

            top: 0;

            width: 100%;

            z-index: 1000;

        }

    </style>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">



    <!-- Bootstrap CSS -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">

    <link rel="stylesheet" href="../../mainStyle.css">

    <link rel="stylesheet" href="cards.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <title>Display Stores</title>

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



    <div class="card-container">

        <div class="card">

            <img src="../../media/Logo (NO TEXT).png" alt="">

            <div class="card-content">
                <div class="card-content-p">

                <h3>Add a new product Image</h3>

                <p>Add new product Images to your store.</p>
                </div>
                <?php

                $sql1 = "SELECT * FROM stores WHERE id = '" . $id . "'";

                $result1 = mysqli_query($con, $sql1);

                $row = mysqli_fetch_assoc($result1);



                if ($row['subscribed_plan_id'] == 1) {

                    $productLimit = 10;

                } elseif ($row['subscribed_plan_id'] == 2) {

                    $productLimit = 10;

                } else {

                    $productLimit = 10; // No limit if not subscribed

                }



                $sql2 = "SELECT COUNT(*) AS product_count FROM products WHERE store_id = '" . $id . "'";

                $result2 = mysqli_query($con, $sql2);

                $row2 = mysqli_fetch_assoc($result2);

                $productCount = $row2['product_count'];



                if ($productCount < $productLimit || $productLimit == 0) {

                    // Redirect to the target page if the product count is within the limit or if there's no limit

                    ?>

                    <a href="addProduct.php" class="btn">Add</a>

                    <?php

                } else {

                    // Display an error message if the product count exceeds the limit

                    ?>

                    <div class="alert alert-danger m-1 cent" role="alert">

                        <?php

                        if ($productLimit > 0) {

                            echo "You have reached the limit of product Images ($productLimit)!!";

                        } else {

                            echo "You have to subscribe to add product Images!!";

                        }

                        ?>

                    </div>

                    <?php

                }

                ?>

            </div>

        </div>

        <?php

        $sql = "SELECT * FROM products WHERE store_id = '" . $id . "' ORDER BY id ASC";

        // $sql = "SELECT sc.id, sc.sub_category_name, sc.sub_category_name_ar, sc.description, sc.description_ar, gc.category_name, sc.created FROM sub_categories sc, global_categories gc WHERE sc.global_category_id = gc.id ORDER BY sc.id ASC";

        $result = mysqli_query($con, $sql);

        $count = mysqli_num_rows($result);

        if ($count > 0) {

            while ($row = mysqli_fetch_assoc($result)) {

                $id = $row['id'];

                $name = $row['name'];

                $name_ar = $row['name_ar'];

                $description = $row['description'];

                $description_ar = $row['description_ar'];

                $store = $row['store_id'];

                $photo = $row['photo'];

                $created = $row['created'];

                ?>

                <div class="card">

                    <img src="../../media/product_photoes/<?php echo $photo ?>" alt="">

                    <div class="card-content">
                        <div class="card-content-p">

                        <h3>

                            <?php echo $name; ?>

                        </h3>

                        <p>

                            <?php echo $description; ?>

                        </p>
                        </div>

                        <a href="update.php?updateid=<?php echo $row['id']; ?>" class="btn">Update</a>

                        <a href="delete.php?deleteid=<?php echo $row['id']; ?>" class="btn">Delete</a>

                    </div>

                </div>



                <?php

            }

        }

        ?>

    </div> <!-- closing card-container div -->

</body>

</html>
