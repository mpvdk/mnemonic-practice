<?php
session_start();
if (isset($_GET['newguest']) && !isset($_SESSION['ten'])) {
    // guest without session vars. Create new session vars
    include "php/includes/create-session-ten.include.php";
    include "php/includes/create-session-hundred.include.php";
    include "php/includes/create-session-cards.include.php";
}
if (isset($_SESSION['user_id'])) {?>
<!--
=========================
PAGE FOR REGISTERED USERS
=========================
-->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/user_pages.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900&display=swap"
    rel="stylesheet">
  <title>MP - Homepage</title>
</head>

<body id="user-home" onload="init();">
  <header class="mobile-hide">
    <nav>
      <p class="nav__message">Hi, <span> <?php echo $_SESSION['username']; ?></span></p>

      <ul class="nav__ul">
        <li id="this">Home</li>
        <li>Practice</a></li>
        <ul class="ul-practice">
          <li><a href="practice_numbers.php">Numbers</a></li>
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
        <li class="logout">Logout</li>
      </ul>
    </nav>
  </header>
  <button class="mobile-button">
    <p>hamburger menu</p>
    <div class="burger-container"><span class="middle"></span>
      <svg class="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.1 151.64">
        <path
          d="M71.66,563.16c40.05-29.66,40.05-29.66,80.1,0-9.17-47.54-41-29.66-41-151.64C110.72,533.5,79.76,517,71.66,563.16Z"
          transform="translate(-71.66 -411.52)" style="fill:#f6ae2d" />
      </svg>
    </div>
  </button>

  <main class="main-home">
    <h1 class="welcome-message">
      Welcome back,<br>
      <span><?=$_SESSION['username']?></span>
    </h1>

    <div class="intro-stack">

      <div class="intro-stack__element intro-animation">
        <h1 class="intro-stack__element__header" data-section="intro">
          What's this about?
          <svg viewBox="0 0 28.68 28.68">
            <line x1="3.38" y1="3.38" x2="25.3" y2="25.3"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
            <line x1="3.38" y1="25.3" x2="25.3" y2="3.38"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
          </svg>
        </h1>
        <div class="intro-stack__element__content">
          <div id="animation_container">
            <canvas id="canvas"></canvas>
            <div id="dom_overlay_container"></div>
          </div>
        </div>
      </div>

      <div class="intro-stack__element intro-mnemonics">
        <h1 class="intro-stack__element__header" data-section="mnemonics">Mnemonics?
          <svg class="rotate" viewBox="0 0 28.68 28.68">
            <line x1="3.38" y1="3.38" x2="25.3" y2="25.3"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
            <line x1="3.38" y1="25.3" x2="25.3" y2="3.38"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
          </svg>
        </h1>
        <div class="intro-stack__element__content">
          <div class="create-height"></div>
          <div id="animation_container2">
            <canvas id="canvas2"></canvas>
            <div id="dom_overlay_container2"></div>
          </div>

        </div>
      </div>

      <div class="intro-stack__element intro-website">
        <h1 class="intro-stack__element__header" data-section="website">This website
          <svg class="rotate" viewBox="0 0 28.68 28.68">
            <line x1="3.38" y1="3.38" x2="25.3" y2="25.3"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
            <line x1="3.38" y1="25.3" x2="25.3" y2="3.38"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
          </svg>
        </h1>
        <div class="intro-stack__element__content">
          <img src="images/resources/this-website.svg" alt="">
        </div>

      </div>
    </div>

    <div class="user-details">

      <form class="user-home-form" id="username-edit">
        <div class="field-wrapper js-input-wrapper-username">
          <label for="username">Username</label>
          <p class="form-message"></p>
          <input autocomplete="off" id="home-username" disabled="disabled" type="text" name="username"
            class="username__input" value="<?=$_SESSION['username']?>">
          <button class="cancel-user-edit">cancel</button>
          <button class="user-home-edit">edit</button>
        </div>
      </form>

      <form class="user-home-form" id="email-edit">
        <div class="field-wrapper js-input-wrapper-email">
          <label for="email">Email</label>
          <p class="form-message"></p>
          <input id="home-email" autocomplete="off" disabled="disabled" type="text" name="email" class="email__input"
            value="<?=$_SESSION['email']?>">
          <button class="cancel-user-edit">cancel</button>
          <button class="user-home-edit">edit</button>
        </div>
      </form>

      <form class="user-home-form">
        <div class="field-wrapper">
          <label for="join-date">Join date</label>
          <input disabled="disabled" type="text" name="join-date"
            value="<?=date("F jS Y", strtotime($_SESSION['join_date']))?>">
        </div>
      </form>

      <form class="user-home-form pwreset__form">
        <div class="field-wrapper js-input-wrapper-pwd">
          <label for="new-pwd">Set new password</label>
          <p class="form-message form-message-general pwd"></p>
          <input type="text" autocomplete="off" class="js-new-pwd pwd__input" name="new-pwd" id="user-home-new-pwd"
            placeholder="new password">
        </div>
        <div class="field-wrapper fold-away js-input-wrapper-pwd-repeat">
          <label for="new-pwd-repeat"></label>
          <p class="form-message"></p>
          <input type="text" class=" js-new-pwd-repeat pwd-repeat__input" name="new-pwd-repeat"
            id="user-home-new-pwd-repeat" placeholder="repeat password">
          <button type="submit" autocomplete="off" class="new-pwd-button">save</button>
        </div>
      </form>

    </div>
  </main>

  <script src="js/user_pages.js"></script>
  <script src="js/registration.js"></script>
  <script src="js/createjs.js"></script>
  <script src="js/mnemonics.js"></script>
  <script src="js/intro.js"></script>
</body>

</html>

<?php
} else if (isset($_SESSION['ten'])) {?>

<!--
=====================
PAGE FOR GUEST USERS
=====================
-->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/user_pages.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <title>MP - Homepage</title>
  <script src="js/createjs.js"></script>
  <script src="js/mnemonics.js"></script>
  <script src="js/intro.js"></script>
</head>

<body id="user-home" onload="init();">
  <header class="mobile-hide">
    <nav>
      <p class="nav__message">Hi, <span>Guest</span></p>

      <ul class="nav__ul">
        <li id="this">Home</li>
        <li>Practice</a></li>
        <ul class="ul-practice">
          <li><a href="practice_numbers.php">Numbers</a></li>
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
        <li class="register"><a href='guest_register.php'>Register</a></li>
      </ul>
    </nav>
  </header>
  <button class="mobile-button">
    <p>hamburger</p>
    <div class="burger-container"><span class="middle"></span>
      <svg class="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.1 151.64">
        <path
          d="M71.66,563.16c40.05-29.66,40.05-29.66,80.1,0-9.17-47.54-41-29.66-41-151.64C110.72,533.5,79.76,517,71.66,563.16Z"
          transform="translate(-71.66 -411.52)" style="fill:#f6ae2d" />
      </svg>
    </div>
  </button>

  <main class="main-home guest">
    <h1 class="welcome-message">
      Hi there, <span>Guest</span>!
    </h1>

    <div class="intro-stack">

      <div class="intro-stack__element intro-animation">
        <h1 class="intro-stack__element__header" data-section="animation">
          What's this about?
          <svg viewBox="0 0 28.68 28.68">
            <line x1="3.38" y1="3.38" x2="25.3" y2="25.3"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
            <line x1="3.38" y1="25.3" x2="25.3" y2="3.38"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
          </svg>
        </h1>
        <div class="intro-stack__element__content">
          <div id="animation_container">
            <canvas id="canvas"></canvas>
            <div id="dom_overlay_container"></div>
          </div>
        </div>
      </div>

      <div class="intro-stack__element intro-mnemonics">
        <h1 class="intro-stack__element__header" data-section="mnemonics">Mnemonics?
          <svg class="rotate" viewBox="0 0 28.68 28.68">
            <line x1="3.38" y1="3.38" x2="25.3" y2="25.3"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
            <line x1="3.38" y1="25.3" x2="25.3" y2="3.38"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
          </svg>
        </h1>
        <div class="intro-stack__element__content">
          <div class="create-height"></div>
          <div id="animation_container2">
            <canvas id="canvas2"></canvas>
            <div id="dom_overlay_container2"></div>
          </div>
        </div>
      </div>

      <div class="intro-stack__element intro-website">
        <h1 class="intro-stack__element__header" data-section="website">This website
          <svg class="rotate" viewBox="0 0 28.68 28.68">
            <line x1="3.38" y1="3.38" x2="25.3" y2="25.3"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
            <line x1="3.38" y1="25.3" x2="25.3" y2="3.38"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6.766077041625977px" />
          </svg>
        </h1>
        <div class="intro-stack__element__content">
          <img src="images/resources/this-website.svg" alt="">
        </div>

      </div>
    </div>
  </main>

  <script src="js/user_pages.js"></script>
  <script src="js/registration.js"></script>
</body>

</html>

<?php
} else {
    // user not logged in nor session vars found. Go back to index
    header("location:index.php");
}