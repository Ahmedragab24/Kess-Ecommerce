<?php
include '../../ConnDB.php';

session_start();
if (!isset ($_SESSION['id']) || (trim($_SESSION['id']) == "")) {
    header('Location: ../index.php');
    exit();
}
if (isset ($_GET['deleteid'])) {
    $id = $_GET['deleteid'];

    // Prepare the SQL statement
    $sql = "DELETE FROM products WHERE id = ?";
    $stmt = mysqli_prepare($con, $sql);

    // Bind the parameters
    mysqli_stmt_bind_param($stmt, "i", $id);

    // Execute the statement
    try {
        $result = mysqli_stmt_execute($stmt);
        if ($result) {
            header('location:displayProducts.php');
            ?>
            <div class="alert alert-success mt-2 cent" role="alert">
                Category Deleted Successfully
            </div>
            <?php
        } else {
            die (mysqli_error($con));
            header("location:displayProducts.php"); ?>
            <div class="alert alert-danger mt-2 cent" role="alert">
                Failed!!
            </div>
            <?php
        }
    } catch (PDOException $e) {
        $error = array(
            'status' => "Failed",
            "msg" => $e->getMessage()
        );
        $this->response($this->json($error), 400);
    }
}
?>