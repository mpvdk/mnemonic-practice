<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <title>MP - Password Reset</title>
</head>

<body>
  <header class="header">
    <h1 class="header__title"><a href="index.php">Mnemonic Practice</a></h1>
    <p class="header__description">Password reset page</span></p>
  </header>

  <?php
session_start();

if (isset($_GET['key']) && isset($_GET['id'])) {

    // grab database connection
    require "php/includes/db-connection.include.php";

    $key = $_GET['key'];
    $user_id = $_GET['id'];
    $current_date = date("Y-m-d H:i:s");

    $query = "SELECT * FROM pwreset_keys WHERE user_id = :id;";
    $stmt = $pdo->prepare($query);
    $stmt->execute(["id" => $user_id]);
    $res = $stmt->fetch();
    // echo "user key = " , $res['user_key'] , "<br><br>";
    // echo "user id = " , $res['user_id'] , "<br><br>";

    if (($res['user_key'] == $key) && ($res['exp'] >= $current_date)) {

        ?>

  <main>
    <div class="fp-card fp-card--active pwreset" id="pwreset">
      <h1 class="fp-card__heading">Reset password</h1>
      <form class="pwreset__form">
        <div class="input-wrapper js-wrapper-pwd">
          <input type="password" name="new-pwd" class="js-new-pwd" autocomplete="off">
          <label for="new-pwd">new password:</label>
        </div>
        <div class="input-wrapper js-wrapper-repeat">
          <input type="password" name="new-pwd-repeat" class="js-new-pwd-repeat" autocomplete="off">
          <label for="new-pwd-repeat">repeat new password:</label>
        </div>
        <input type="text" name="user_id" value="<?php echo $res['user_id'] ?>" class="h-hide">
        <p class="form-message-general"></p>
        <button type="submit" name="submit">Submit</button>
      </form>
      <p class="reset-succes-message h-hide">New password set. Redirecting.</p>
    </div>
  </main>

  <script src="js/registration.js"></script>
</body>

</html>
<?php
} else {
        ?>

<main>
  <div class="fp-card fp-card--active pwreset" id="pwreset">
    <h1 class="fp-card__heading">Reset password</h1>
    <p class="form-message-general--invalid">Invalid link</p>
  </div>
</main>

<script src="js/registration.js"></script>
</body>

</html>
<?php
}
} else {
    // No key and id query strings. leave
    header("location:index.php");
}