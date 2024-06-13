<?php
include '../../ConnDB.php';

session_start();
if (!isset($_SESSION['id']) || (trim($_SESSION['id']) == "")) {
    header('Location: ../index.php');
    exit();
}
$id = $_SESSION['id'];

if (isset($_POST['submit'])) {
    $categories = $_POST['categories'] ?? [];
    $sql1 = "DELETE FROM category_services where freelance_id = '" . $id . "'";
    $result1 = mysqli_query($con, $sql1);
    foreach ($categories as $category) {
        // $sql1 = "SELECT * FROM category_stores where store_id = '".$id."' and category_id = '".$category."'";
        // $result1= mysqli_query($con,$sql1);
        // $count = mysqli_num_rows($result1);
        // if ($count < 0) {
        $sql = "insert into `category_services` (category_id,freelance_id,created)
                    values('$category','$id', NOW())";
        $result = mysqli_query($con, $sql);
        if ($result) {
            // echo "Data inserted successfuly";
            header("location:index.php");
        } else {
            ?>
            <div class="alert alert-danger" role="alert">
                <?= htmlspecialchars($_GET['error']); ?>
            </div>
            <?php
        }
        // } 
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="select.css">
    <link rel="stylesheet" href="cards.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../mainStyle.css">
    <title>KEES</title>
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
        <div class="categories">
            <form action="" method="POST">
                <label for="categories" class="selectLabel">Choose the categories that match you service:</label>
                <hr>
                <select name="categories[]" id="categories" class="custom-select" >
                    <?php
                    $sql = "SELECT * FROM category_services where freelance_id = '" . $id . "'";
                    $result = mysqli_query($con, $sql);

                    // Fetch all rows from the result set
                    while ($row = mysqli_fetch_assoc($result)) {
                        $selectedCategories[] = $row['category_id'];
                    }

                    $sql1 = "SELECT * FROM `categories` WHERE is_freelance = 1";
                    $result1 = mysqli_query($con, $sql1);

                    if ($result1) {
                        while ($row1 = mysqli_fetch_assoc($result1)) {
                            $selected = (in_array($row1['id'], $selectedCategories)) ? 'selected' : ''; // Check if category ID is in selected categories
                            ?>
                            <option value="<?php echo $row1['id']; ?>" <?php echo $selected; ?>>
                                <?php echo $row1['category_name']; ?>
                            </option>
                            <?php
                        }
                    }
                    ?>
                </select>
                <br>
                <button type="submit" name="submit" class="btn">Submit</button>
            </form>
        </div>
        <!-- <div class="categories">
            <div class="info"><?php
            $sql1 = "SELECT * FROM freelance_users where id = '" . $id . "'";
            $result1 = mysqli_query($con, $sql1);
            $count = mysqli_num_rows($result1);
            $row1 = mysqli_fetch_assoc($result1)
                ?>
                <label for="categories" class = "selectLabel">Total Visits:</label>
                <hr>
                <h1><?// php// echo $row1['clicks']    ?></h1>
            </div>
        </div> -->
        <div class="card">
            <img src="../../media/freelance_photoes/<?php echo $row1['logo']; ?>" alt="">
            <div class="card-content">
                <h3>Update Profile Information</h3>
                <p>
                    <?php echo $row1['name_en']; ?>
                </p>
                <p>
                    <?php echo $row1['professionality']; ?>
                </p>
                <a href="updateFreelance.php?updateid=<?php echo $id; ?>" class="btn">Update</a>
            </div>
        </div>
    </div>

    <script src="select.js"></script>
</body>

</html>