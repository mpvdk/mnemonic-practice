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
  <title>MP - Practice cards</title>
</head>

<body>
  <header class="mobile-hide">
    <nav>
      <p class="nav__message">Hi, <span> <?=$name?></span></p>

      <ul class="nav__ul">
        <li><a href="user_home.php">Home</a></li>
        <li>Practice</a></li>
        <ul class="ul-practice">
          <li><a href="practice_numbers.php">Numbers</a></li>
          <li id="this">Cards</li>
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


  <main class="practice-cards">

    <h1 class="userpage-title">Practice - playing cards</h1>

    <div class="practice__options">

      <div class="options__range">
        <p class="options__title">Range:</p>
        <p class="options__message range-message"></p>
        <div class="options__range__lists">

          <div class="checkbox-wrapper all">
            <label class="checkbox">
              <input type="checkbox" checked="true" name="range-all" id="range-all" class="mode-input"
                data-selection="all">
              <span class="custom-checkbox"></span>
            </label>
            <label class="checkbox-label" for="range-all">All</label>
          </div>

          <div class="checkbox-wrapper" id="hearts">
            <label class="checkbox">
              <input type="checkbox" checked="true" name="range-hearts" id="range-hearts" class="mode-input"
                data-selection="hearts">
              <span class="custom-checkbox"></span>
            </label>
            <label class="checkbox-label" for="range-hearts">Hearts</label>
          </div>
          <div class="checkbox-wrapper" id="spades">
            <label class="checkbox">
              <input type="checkbox" checked="true" name="range-spades" id="range-spades" class="mode-input"
                data-selection="spades">
              <span class="custom-checkbox"></span>
            </label>
            <label class="checkbox-label" for="range-spades">Spades</label>
          </div>
          <div class="checkbox-wrapper" id="diamonds">
            <label class="checkbox">
              <input type="checkbox" checked="true" name="range-diamonds" id="range-diamonds" class="mode-input"
                data-selection="diamonds">
              <span class="custom-checkbox"></span>
            </label>
            <label class="checkbox-label" for="range-diamonds">Diamonds</label>
          </div>
          <div class="checkbox-wrapper" id="clubs">
            <label class="checkbox">
              <input type="checkbox" checked="true" name="range-clubs" id="range-clubs" class="mode-input"
                data-selection="clubs">
              <span class="custom-checkbox"></span>
            </label>
            <label class="checkbox-label" for="range-clubs">Clubs</label>
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
                <input type="radio" name="mode-from" id="from-card" class="mode-input" data-selection="card">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-card">card</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-from" id="from-association" class="mode-input"
                  data-selection="association">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="from-association">association</label>
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
                <input type="radio" name="mode-to" id="to-card" class="mode-input" data-selection="card">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="to-card">card</label>
            </div>

            <div class="checkbox-wrapper">
              <label class="checkbox">
                <input type="radio" name="mode-to" id="to-association" class="mode-input" data-selection="association">
                <span class="custom-checkbox"></span>
              </label>
              <label class="checkbox-label" for="to-association">association</label>
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

  <script src="js/practice_cards.js"></script>
</body>

</html>

<?php
} else {
    // user not logged in. Go back to home page
    header("location:index.php");
}