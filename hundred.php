<?php
session_start();

if (isset($_SESSION['user_id']) || isset($_SESSION['nr00'])) {
    if (isset($_SESSION['username'])) {
        $menuItem = "<span class='logout'><a href='guest_register.php'>Logout</a></span";
        $name = $_SESSION['username'];
    } else {
        $name = "Guest";
        $menuItem = "<span class='register'><a href='guest_register.php'>Register</a></span";
    }

    // grab 100 table
    require "php/includes/hundred.include.php";

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
  <title>MP - Table 00 - 99</title>
</head>

<body onclick="">
  <header class="mobile-hide">
    <nav>
      <p class="nav__message">Hi, <span><?=$name?></span></p>

      <ul class="nav__ul">
        <li><a href="user_home.php">Home</a></li>
        <li>Practice</a></li>
        <ul class="ul-practice">
          <li><a href="practice_numbers.php">Numbers</a></li>
          <li><a href="practice_cards.php">Cards</a></li>
        </ul>
        <li>Tables</li>
        <ul class="ul-tables">
          <li><a href="ten.php">0 - 9</a></li>
          <li id="this"><a href="hundred.php">00 - 99</a></li>
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


  <main class="main-hundred">
    <h1 class="userpage-title"><span>Table:</span> 00 - 99</h1>

    <form id="js-hundred-table" class="table-hundred update-form" autocomplete="off">

      <div class="buttons">
        <button class="edit-button">edit table</button>
        <button class="h-hide save-changes" type="submit">save edit</button>
      </div>

      <div class="display-options">
        <p>Display options:</p>

        <div class="checkbox-wrapper">
          <label class="checkbox">
            <input type="checkbox" name="action" class="js-action-checkbox" id="action">
            <span class="custom-checkbox"></span>
          </label>
          <label class="checkbox-label" for="action">action</label>
        </div>

        <div class="checkbox-wrapper">
          <label class="checkbox">
            <input type="checkbox" name="object" class="js-object-checkbox" id="object">
            <span class="custom-checkbox"></span>
          </label>
          <label class="checkbox-label" for="object">object</label>
        </div>
      </div>

      <table>
        <thead>
          <tr class="thead">
            <th>Nr.</th>
            <th>Letters</th>
            <th>Person</th>
            <th class="js-action-cell h-hide">Action</th>
            <th class="js-object-cell h-hide">Object</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <!-- create table with 100 rows from 00 - 99 -->
          <?php

    for ($x = 0; $x < 100; $x++) {
        // if nr < 10, add preceding 0
        if ($x < 10) {$rownr = 0 . $x;} else { $rownr = $x;}?>
          <tr id='nr<?=$rownr?>' class='droparea'>
            <td class='droparea nr-cell'><?=$rownr?></td>

            <td class='droparea letter-cell'><?=$res_hundred[$x]['letters']?></td>

            <td class='droparea js-non-editable person-cell-min-width'><?=$res_hundred[$x]['person']?></td>
            <td class='droparea js-editable person-cell h-hide'><input maxlength='50' name='<?=$rownr?>-person-desktop'
                type='text' value='<?=$res_hundred[$x]['person']?>'></td>

            <td class='droparea js-non-editable js-action-cell h-hide'><?=$res_hundred[$x]['action']?></td>
            <td class='droparea js-editable action-cell h-hide js-action-cell'><input maxlength='150'
                name='<?=$rownr?>-action-desktop' type='text' value='<?=$res_hundred[$x]['action']?>'></td>

            <td class='droparea js-non-editable js-object-cell h-hide'><?=$res_hundred[$x]['object']?></td>
            <td class='droparea js-editable object-cell h-hide js-object-cell'><input maxlength='50'
                name='<?=$rownr?>-object-desktop' type='text' value='<?=$res_hundred[$x]['object']?>'></td>

            <td class='droparea image-cell'>
              <div class='<?=$res_hundred[$x]['yesornoimage']?>'><?=$res_hundred[$x]['yesorno']?></div>

              <div class='preview h-hide <?=$res_hundred[$x]['yesornoimage']?>'>

                <figure>
                  <figcaption><?=$res_hundred[$x]['figcaption']?></figcaption>
                  <img src='<?=$res_hundred[$x]['src']?>' alt='nr <?=$rownr?> image preview'>
                  <button data-row='<?=$rownr?>' class='delete-image'>delete img</button>
                </figure>

                <div class='mobile-img-upload'>
                  <label for='mobile-img-input-<?=$rownr?>'>upload image</label>
                  <input type='file' id='mobile-img-input-<?=$rownr?>' class='mobile-img-input' name='mobile-img-input'
                    accept='image/*'>
                </div>

                <div class='mobile-pao h-hide-desktop'>
                  <p class='number'><?=$rownr?></p>

                  <div class='person-mobile'>
                    <span class='green bold'>Person:</span><br>
                    <span class='black minheight1rem'><?=$res_hundred[$x]['person']?></span>
                  </div>
                  <div class='person-mobile-editable h-hide'>
                    <span class='green bold'>Person:</span><br>
                    <input maxlength='50' name='<?=$rownr?>-person' type='text' value='<?=$res_hundred[$x]['person']?>'>
                  </div>

                  <div class='action-mobile'>
                    <span class='green bold'>Action:</span><br>
                    <span class='black minheight1rem'><?=$res_hundred[$x]['action']?></span>
                  </div>
                  <div class='action-mobile-editable h-hide'>
                    <span class='green bold'>Action:</span><br>
                    <textarea maxlength='150' name='<?=$rownr?>-action'><?=$res_hundred[$x]['action']?></textarea>
                  </div>

                  <div class='object-mobile'>
                    <span class='green bold'>Object:</span><br>
                    <span class='black'><?=$res_hundred[$x]['object']?></span>
                  </div>
                  <div class='object-mobile-editable h-hide'>
                    <span class='green bold'>Object:</span><br>
                    <input maxlength='50' name='<?=$rownr?>-object' type='text' value='<?=$res_hundred[$x]['object']?>'>
                  </div>

                </div>

              </div>
            </td>
          </tr>
          <?php }?>
        </tbody>
      </table>
    </form>
  </main>

  <script src="js/user_pages.js"></script>
</body>

</html>

<?php
} else {
    header("location:index.php");
}

?>