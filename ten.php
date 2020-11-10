<?php
session_start();

if (isset($_SESSION['user_id']) || isset($_SESSION["ten"])) {
    if (isset($_SESSION['username'])) {
        $menuItem = "<span class='logout'><a href='guest_register.php'>Logout</a></span";
        $name = $_SESSION['username'];
    } else {
        $name = "Guest";
        $menuItem = "<span class='register'><a href='guest_register.php'>Register</a></span";
    }

    // grab ten table
    require "php/includes/ten.include.php";

    ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1">
  <link rel="stylesheet" href="css/user_pages.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <title>MP - Table 0 - 9</title>
</head>

<body onclick="">
  <header class="mobile-hide">
    <nav>
      <p class="nav__message">Hi, <span> <?=$name?></span></p>

      <ul class="nav__ul">
        <li><a href="user_home.php">Home</a></li>
        <li>Practice</a></li>
        <ul class="ul-practice">
          <li><a href="practice_numbers.php">Numbers</a></li>
          <li><a href="practice_cards.php">Cards</a></li>
        </ul>
        <li>Tables</li>
        <ul class="ul-tables">
          <li id="this"><a href="ten.php">0 - 9</a></li>
          <li><a href="hundred.php">00 - 99</a></li>
          <li><a href="cards.php">Cards</a></li>
        </ul>
        <!-- <li><a href="statistics.php">Statistics</a></li> -->
        <li class="resources"><a href="resources.php">Resources</a></li>
        <li class="about"><a href="about.php">About</a></li>
        <li><?=$menuItem?></li>
      </ul>
    </nav>
  </header>

  <button class="mobile-button">
    <p>hamburger menu</p>
    <div class="burger-container">
      <span class="middle"></span>
      <svg class="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.1 151.64">
        <path
          d="M71.66,563.16c40.05-29.66,40.05-29.66,80.1,0-9.17-47.54-41-29.66-41-151.64C110.72,533.5,79.76,517,71.66,563.16Z"
          transform="translate(-71.66 -411.52)" style="fill:#f6ae2d" />
      </svg>
    </div>
  </button>

  <main class="main-ten">

    <h1 class="userpage-title"><span>Table:</span> 0 - 9</h1>

    <form id="js-ten-table" class="ten-table update-form" autocomplete="off">
      <div class="buttons">
        <button class="edit-button">edit table</button>
        <button class="h-hide save-changes" type="submit">save edit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nr.</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <!-- create table with 10 rows from 0 - 9 -->
          <?php for ($rownr = 0; $rownr < 10; $rownr++) {?>
          <tr id='<?=$rownr?>'>
            <td class='nr-cell'><?=$rownr?></td>
            <td class='letter-cell js-non-editable'><?=$res_ten[$rownr]['letter'];?></td>
            <td class='h-hide js-editable letter-cell'><input name='<?=$rownr?>-letter' type='text'
                value='<?=$res_ten[$rownr]['letter'];?>'></td>
          </tr>
          <?php }?>
        </tbody>
      </table>
    </form>

    <p class="update-message"><span>Note:</span></br>
      Changes saved to this table will automatically pass on to the corresponding letters in your 00
      - 99 table.</p>

  </main>

  <script src="js/user_pages.js"></script>
</body>

</html>

<?php } else {
    header("location:index.php");
}

?>