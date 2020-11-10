<?php
session_start();

if (isset($_SESSION['user_id']) || isset($_SESSION['ten'])) {
    if (isset($_SESSION['username'])) {
        $name = $_SESSION['username'];
        $menuItem = "<span class='logout'><a href='guest_register.php'>Logout</a></span";
    } else {
        $name = "Guest";
        $menuItem = "<span class='register'><a href='guest_register.php'>Register</a></span";
    }

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
  <title>MP - Practice numbers</title>
</head>

<body>
  <header class="mobile-hide">
    <nav>
      <p class="nav__message">Hi, <span> <?=$name?></span></p>

      <ul class="nav__ul">
        <li><a href="user_home.php">Home</a></li>
        <li>Practice</li>
        <ul class="ul-practice">
          <li id="this">Numbers</li>
          <li><a href="practice_cards.php">Cards</a></li>
        </ul>
        <li>Tables</li>
        <ul class="ul-tables">
          <li><a href="ten.php">0 - 9</a></li>
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


  <main class="practice-numbers">

    <h1 class="userpage-title">Practice - numbers</h1>

    <div class="practice__options">

      <div class="options__range">
        <p class="options__title">Range:</p>
        <p class="options__message range-message"></p>
        <div class="flex-row">
          <div>
            <label for="rangeMin" class="options__subtitle">Min</label>
            <input name="rangeMin" id="rangeMin" class="min" class="" type="number" min="00" max="98" value="00">
          </div>
          <div>
            <label for="rangeMax" class="options__subtitle">Max</label>
            <input name="rangeMax" id="rangeMax" class="max" class="" type="number" min="01" max="99" value="99">
          </div>
        </div>
      </div>


      <div class="options__mode">
        <p class="options__title">Mode:</p>
        <p class="options__message mode-message"></p>
        <div class="flex-row">

          <div class="options__mode__from">
            <p class="options__subtitle">From:</p>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-from" id="from-number" class="mode-input" data-selection="number">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-number">number</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-from" id="from-letters" class="mode-input" data-selection="letters">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-letters">letters</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-from" id="from-name" class="mode-input" data-selection="name">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-name">person</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-from" id="from-action" class="mode-input" data-selection="action">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-action">action</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-from" id="from-object" class="mode-input" data-selection="object">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-object">object</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-from" id="from-image" class="mode-input" data-selection="image">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-image">image</label>
            </div>
          </div>

          <div class=" options__mode__to">
            <p class="options__subtitle">To:</p>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-to" id="to-number" class="mode-input" data-selection="number">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="to-number">number</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-to" id="to-letters" class="mode-input" data-selection="letters">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="to-letters">letters</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-to" id="to-name" class="mode-input" data-selection="name">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="to-name">person</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-to" id="to-action" class="mode-input" data-selection="action">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="to-action">action</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-to" id="to-object" class="mode-input" data-selection="object">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="to-object">object</label>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="game-expand">
      <button class="game-expand__button">expand game</button>
      <p>(recommended when cueing <span class="italic">images</span>)</p>
    </div>

    <div class="practice__game">
      <div class="close__game"></div>

      <div class="game__input__wrapper">
        <label for="game__input">Your answer</label>
        <input class="game__input" id="game__input" type="text" placeholder="your answer" autocomplete="off">
      </div>

      <div class="game__answer">
        <p class="game__message blurry"></p>
        <button class="game__button">show</button>
      </div>

      <div class="game__cue">
        <p class="cue__title">cue:</p>
        <p class="cue"></p>
      </div>

    </div>
  </main>

  <script src="js/practice_numbers.js"></script>
</body>

</html>

<?php
} else {
    // user not logged in. Go back to home page
    header("location:index.php");
}