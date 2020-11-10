<?php
session_start();
if (isset($_SESSION['ten']) && !isset($_SESSION['user_id'])) {?>

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
</head>

<body id="user-home">
  <header class="mobile-hide">
    <nav>
      <p class="nav__message">Hi, <span>Guest</span></p>

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
          <li><a href="cards.php">Cards</a></li>
        </ul>
        <!-- <li><a href="statistics.php">Statistics</a></li> -->
        <li class="resources"><a href="resources.php">Resources</a></li>
        <li class="about"><a href="about.php">About</a></li>
        <li id="this" class="register">Register</li>
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

  <main class="main-guest-register">
    <h1 class="userpage-title">
      <span class="pink">Hello, </span>stranger
    </h1>
    <p class="guest-register-text">
      You are currently using this website as a <span class="bold">guest</span>. This means that
      any changes you make to the tables are saved with the help of <span class="bold">cookies</span>.
      <br><br>
      This is a <span class="italic">volatile</span> and <span class="italic">device-dependent</span> way
      of
      storing these tables, and it is not recommended.
      <br><br>
      If you <span class="bold">register</span>, <span class="pink bold">your current cookie tables will be
        copied to the server database</span>. This is much <span class="italic">safer</span>
      and allows you to access your tables from <span class="italic">any device</span>.
    </p>

    <form class="register__form" id="guest-register">

      <div class="guest-register-title"><span>Register</span>
        <p>From stranger to friend in one simple form</p>
      </div>

      <div class="field-wrapper js-input-wrapper-username">
        <label for="username">Username</label>
        <div class="form-message">
          <ul>
            <li>3 - 20 characters</li>
            <li>a-z, A-Z</li>
            <li>0 - 9</li>
            <li>"-" and "_"</li>
          </ul>
        </div>
        <input type="text" name="username" class="username__input" autocomplete="off" placeholder="Username"
          id="username">
      </div>

      <div class="field-wrapper js-input-wrapper-email">
        <label for="email">Email</label>
        <p class="form-message">Invalid e-mail address</p>
        <input type="text" name="email" class="email__input" autocomplete="off" placeholder="Email address" id="email">
      </div>

      <div class="field-wrapper js-input-wrapper-pwd">
        <label for="pwd">Password</label>
        <p class="form-message">Password must be at least 8 characters</p>
        <input type="password" name="pwd" class="pwd__input" placeholder="Password" id="pwd">
      </div>

      <div class="field-wrapper js-input-wrapper-pwd-repeat">
        <label for="pwd-repeat">Repeat password</label>
        <p class="form-message">Passwords don't match</p>
        <input type="password" name="pwd-repeat" placeholder="Repeat password" class="pwd-repeat__input"
          id="pwd-repeat">
      </div>

      <p class="form-message general-message"></p>
      <button type="submit" autocomplete="off" class="register-button">Register</button>
    </form>
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