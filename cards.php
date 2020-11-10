<?php
session_start();

if (isset($_SESSION['user_id']) || isset($_SESSION['ten'])) {
    if (isset($_SESSION['username'])) {
        $menuItem = "<span class='logout'><a href='guest_register.php'>Logout</a></span";
        $name = $_SESSION['username'];
    } else {
        $name = "Guest";
        $menuItem = "<span class='register'><a href='guest_register.php'>Register</a></span";
    }

    // grab cards table
    require "php/includes/cards.include.php";

    ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1">
  <link rel=" stylesheet" href="css/user_pages.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <title>MP - Table: playing cards</title>
</head>

<body onclick="">
  <div class="global-error-message h-hide"></div>

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
          <li><a href="ten.php">0 - 9</a></li>
          <li><a href="hundred.php">00 - 99</a></li>
          <li id="this"><a href="cards.php">Cards</a></li>
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


  <main class="main-cards">
    <h1 class="userpage-title"><span>Table:</span> playing cards</h1>

    <form id="js-cards-table" class="table-cards update-form" autocomplete="off">

      <div class="buttons">
        <button class="edit-button">edit table</button>
        <button class="h-hide save-changes" type="submit">save edit</button>
      </div>

      <table>
        <thead>
          <tr class="thead">
            <th>Card</th>
            <th>Association</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          <!-- create table with 53 rows for all cards -->
          <?php foreach ($res_cards as $card) {?>
          <tr id='<?=$card['card']?>' class='droparea'>
            <td class='droparea card-cell'><?=$card['value']?> <span
                class='<?=$card['color']?>'><?=$card['suit']?></span></td>

            <td class='droparea js-non-editable association-cell-min-width'><?=$card['association']?></td>
            <td class='droparea js-editable association-cell h-hide'><input name='<?=$card['card']?>' type='text'
                value='<?=$card['association']?>'></td>

            <td class='droparea image-cell'>
              <div class='<?=$card['yesornoimage']?>'><?=$card['yesorno']?></div>

              <div class='preview h-hide <?=$card['yesornoimage']?>'>

                <figure>
                  <figcaption><?=$card['figcaption']?></figcaption>
                  <img src='<?=$card['src']?>' alt='nr <?=$card['card']?> image preview'>
                  <button data-row='<?=$card['value']?>-<?=$card['suit']?>' class='delete-image'>delete img</button>
                </figure>

                <div class='mobile-img-upload'>
                  <label for='mobile-img-input-<?=$card['card']?>'>upload image</label>
                  <input type='file' id='mobile-img-input-<?=$card['card']?>' class='mobile-img-input'
                    name='mobile-img-input' accept='image/*'>
                </div>

                <div class='mobile-card h-hide-desktop'>
                  <p class='card'><span class='<?=$card['color']?>'><?=$card['value'] . $card['suit']?></span></p>
                  <div class='card-association-mobile'>
                    <span class='green bold'>Association:</span><br>
                    <span class='black'><?=$card['association']?></span>
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

<?php } else {
    header("location:index.php");
}

?>