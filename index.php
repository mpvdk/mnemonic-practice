<?php
session_start();
if (!(isset($_SESSION['user_id']) || isset($_SESSION['ten']))) {?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900&display=swap"
    rel="stylesheet">

  <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">

  <title>Mnemonic Practice</title>
</head>

<body>
  <div class="about">about
  </div>

  <header class="header">
    <h1 class="header__title">MNEMONIC PRACTICE</h1>
    <p class="header__description">GET GENIUS<span class="asterisk">*</span></p>
    <p class="asterisk-explainer"><span>*</span> Not really though. Please don't hold me accountable for your lack of
      genius.</p>
  </header>

  <div class="about-expanded about__container h-hide">
    <div class="about__connect">
      <a href="https://github.com/mpvdk" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 998.67">
          <path
            d="M512,0C229.1,0,0,229.1,0,512,0,738.6,146.6,929.9,350.1,997.8c25.6,4.5,35.2-10.9,35.2-24.3,0-12.2-.6-52.5-.6-95.4-128.6,23.7-161.9-31.4-172.2-60.2-5.8-14.7-30.7-60.2-52.5-72.3-17.9-9.6-43.5-33.3-.6-33.9,40.3-.6,69.1,37.1,78.7,52.5,46.1,77.4,119.7,55.7,149.1,42.2,4.5-33.3,17.9-55.7,32.6-68.5-113.9-12.8-233-57-233-252.8,0-55.7,19.8-101.8,52.5-137.6-5.1-12.8-23-65.3,5.1-135.7,0,0,42.9-13.4,140.8,52.5a482.18,482.18,0,0,1,256,0C739.1,197.7,782,211.8,782,211.8c28.2,70.4,10.2,122.9,5.1,135.7,32.6,35.8,52.5,81.3,52.5,137.6,0,196.5-119.7,240-233.6,252.8,18.6,16,34.6,46.7,34.6,94.7,0,68.5-.6,123.5-.6,140.8,0,13.4,9.6,29.4,35.2,24.3C877.4,929.9,1024,737.9,1024,512,1024,229.1,794.9,0,512,0Z"
            style="fill-rule:evenodd" />
        </svg>
      </a>
      <a href="http://www.linkedin.com/in/martijn-van-den-kerkhof" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.1 382">
          <path
            d="M347.4,0H34.6A34.61,34.61,0,0,0,0,34.6V347.5A34.59,34.59,0,0,0,34.6,382H347.5a34.61,34.61,0,0,0,34.6-34.6V34.6A34.76,34.76,0,0,0,347.4,0ZM118.2,329.8a10.07,10.07,0,0,1-10.1,10.1H65.3a10.07,10.07,0,0,1-10.1-10.1V150.4a10.07,10.07,0,0,1,10.1-10.1h42.8a10.07,10.07,0,0,1,10.1,10.1ZM86.7,123.4a40.7,40.7,0,1,1,40.7-40.7A40.67,40.67,0,0,1,86.7,123.4ZM341.9,330.7a9.18,9.18,0,0,1-9.2,9.2H286.8a9.18,9.18,0,0,1-9.2-9.2V246.5c0-12.6,3.7-55-32.8-55-28.3,0-34.1,29.1-35.2,42.1v97.1a9.18,9.18,0,0,1-9.2,9.2H156a9.18,9.18,0,0,1-9.2-9.2V149.6a9.18,9.18,0,0,1,9.2-9.2h44.4a9.18,9.18,0,0,1,9.2,9.2v15.7c10.5-15.8,26.1-27.9,59.3-27.9,73.6,0,73.1,68.7,73.1,106.5l-.1,86.8Z" />
        </svg>
      </a>
    </div>
    <h1 class="userpage-title about__title">About</h1>
    <p class="about__text">
      <span class="name">Mnemonic Practice</span> is a web-app aimed at providing tools to practice
      mnemonic number systems and playing card memorization.<br><br>
      It is currently in beta, and the extent to which I will develop it depends mostly on the future circumstances
      of
      my employment as well as the popularity of this website.<br><br>
      I'm <span class="name">Martijn</span>, an aspiring software engineer and developer, and I made this website to
      practice PHP and MySQL.
      If you have any comments you can post them on
      <a href="" target="_blank">github.</a> <br><br>
      For personal inquiries visit <a href="https://www.wannabeengineer.com" target="_blank">my website</a> or find
      me
      on
      <a href="https://www.linkedin.com/in/martijn-van-den-kerkhof/" target="_blank">LinkedIn.</a>
    </p>
  </div>

  <main>

    <div class="fp-card login" id="login">
      <h1 class="fp-card__heading login__heading">Login</h1>
      <form class="login__form content h-hide2">
        <div class="input-wrapper input-wrapper-id">
          <input type="text" name="id-login" class="js-id-login" id="id-login">
          <label for="id-login">Username or email:</label>
        </div>
        <div class="input-wrapper input-wrapper-password">
          <input type="password" name="pwd-login" class="js-pwd-login" id="pwd-login">
          <label for="pwd-login">Password:</label>
        </div>
        <p class="login__message"></p>
        <button type=submit>login</button>
        <p class="forgot-password">forgot password</p>
      </form>
    </div>

    <div class="fp-card guest" id="guest">
      <h1 class="fp-card__heading guest__heading">Guest</h1>
      <div class="content h-hide2 guest">
        <p>You're about to use this web-app as a <span>Guest</span>. Any changes you make to your tables are stored with
          the help of
          a <span>cookie</span>. <br><br>
          This is a volatile and device-dependent way of storing
          information. You can <span>register</span> at any time from the main menu to copy your tables to the server
          database for
          <span>safer</span> storage, accessible from <span>any device</span>.
        </p>
        <button class="guest-button" ;>Continue as Guest</button>
      </div>
    </div>

    <div class="fp-card register" id="register">
      <h1 class="fp-card__heading">Register</h1>
      <form class="register__form content h-hide2">

        <div class="input-wrapper js-input-wrapper-username">
          <input type="text" name="username" class="username__input" autocomplete="off" id="username">
          <label for="username">Username</label>
          <div class="form-message">
            <ul>
              <li>3 - 20 characters</li>
              <li>a-z, A-Z</li>
              <li>0 - 9</li>
              <li>"-" and "_"</li>
            </ul>
          </div>
        </div>

        <div class="input-wrapper js-input-wrapper-email">
          <input type="text" name="email" class="email__input" autocomplete="off" id="email">
          <label for="email">Email</label>
          <p class="form-message">Invalid e-mail address</p>
        </div>

        <div class="input-wrapper js-input-wrapper-pwd">
          <input type="password" name="pwd" class="pwd__input" id="pwd">
          <label for="pwd">Password</label>
          <p class="form-message">Password must be at least 8 characters</p>
        </div>

        <div class="input-wrapper js-input-wrapper-pwd-repeat">
          <input type="password" name="pwd-repeat" class="pwd-repeat__input" id="pwd-repeat">
          <label for="pwd-repeat">Confirm password</label>
          <p class="form-message">Passwords don't match</p>
        </div>

        <p class="form-message-general"></p>
        <button type=submit>register</button>
      </form>
    </div>

    <button class="back-button h-hide">back</button>
  </main>

  <script src="js/index.js"></script>
  <script src="js/registration.js"></script>
</body>

</html>

<?php
} else {
    // user is logged in or session vars found. Redirect to user home page
    header("location:user_home.php");
}