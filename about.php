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

    ?>

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
  <title>MP - About</title>
</head>

<body id="about">
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
          <li><a href="cards.php">Cards</a></li>
        </ul>
        <!-- <li><a href="statistics.php">Statistics</a></li> -->
        <li class="resources"><a href="resources.php">Resources</a></li>
        <li id="this" class="about">About</li>
        <li><?=$menuItem?> </li>
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

  <main class="main-about">
    <h1 class="userpage-title">About</h1>
    <div class="about__container">
      <div class="about__connect">
        <a href="https://github.com/mpvdk" target="_blank" rel="noreferrer">
          <p>github icon</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 998.67">
            <path
              d="M512,0C229.1,0,0,229.1,0,512,0,738.6,146.6,929.9,350.1,997.8c25.6,4.5,35.2-10.9,35.2-24.3,0-12.2-.6-52.5-.6-95.4-128.6,23.7-161.9-31.4-172.2-60.2-5.8-14.7-30.7-60.2-52.5-72.3-17.9-9.6-43.5-33.3-.6-33.9,40.3-.6,69.1,37.1,78.7,52.5,46.1,77.4,119.7,55.7,149.1,42.2,4.5-33.3,17.9-55.7,32.6-68.5-113.9-12.8-233-57-233-252.8,0-55.7,19.8-101.8,52.5-137.6-5.1-12.8-23-65.3,5.1-135.7,0,0,42.9-13.4,140.8,52.5a482.18,482.18,0,0,1,256,0C739.1,197.7,782,211.8,782,211.8c28.2,70.4,10.2,122.9,5.1,135.7,32.6,35.8,52.5,81.3,52.5,137.6,0,196.5-119.7,240-233.6,252.8,18.6,16,34.6,46.7,34.6,94.7,0,68.5-.6,123.5-.6,140.8,0,13.4,9.6,29.4,35.2,24.3C877.4,929.9,1024,737.9,1024,512,1024,229.1,794.9,0,512,0Z"
              style="fill-rule:evenodd" />
          </svg>
        </a>
        <a href="http://www.linkedin.com/in/martijn-van-den-kerkhof" target="_blank" rel="noreferrer">
          <p>linkedin icon</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.1 382">
            <path
              d="M347.4,0H34.6A34.61,34.61,0,0,0,0,34.6V347.5A34.59,34.59,0,0,0,34.6,382H347.5a34.61,34.61,0,0,0,34.6-34.6V34.6A34.76,34.76,0,0,0,347.4,0ZM118.2,329.8a10.07,10.07,0,0,1-10.1,10.1H65.3a10.07,10.07,0,0,1-10.1-10.1V150.4a10.07,10.07,0,0,1,10.1-10.1h42.8a10.07,10.07,0,0,1,10.1,10.1ZM86.7,123.4a40.7,40.7,0,1,1,40.7-40.7A40.67,40.67,0,0,1,86.7,123.4ZM341.9,330.7a9.18,9.18,0,0,1-9.2,9.2H286.8a9.18,9.18,0,0,1-9.2-9.2V246.5c0-12.6,3.7-55-32.8-55-28.3,0-34.1,29.1-35.2,42.1v97.1a9.18,9.18,0,0,1-9.2,9.2H156a9.18,9.18,0,0,1-9.2-9.2V149.6a9.18,9.18,0,0,1,9.2-9.2h44.4a9.18,9.18,0,0,1,9.2,9.2v15.7c10.5-15.8,26.1-27.9,59.3-27.9,73.6,0,73.1,68.7,73.1,106.5l-.1,86.8Z" />
          </svg>
        </a>
      </div>
      <p class="about__text">
        <span class="name">Mnemonic Practice</span> is a web-app aimed at providing tools to practice
        mnemonic number systems and playing card memorization.<br><br>
        It is currently in beta, and the extent to which I will develop it depends mostly on the future circumstances of
        my employment as well as the popularity of this website.<br><br>
        I'm <span class="name">Martijn</span>, an aspiring software engineer and developer, and I made this website to
        practice PHP and MySQL, and to generally test, practice, and improve my web design and development skills.
        If you have any comments you can post them on
        <a href="" target="_blank">github.</a> <br><br>
        For personal inquiries visit <a href="https://www.wannabeengineer.com" target="_blank">my website</a> or find me
        on
        <a href="https://www.linkedin.com/in/martijn-van-den-kerkhof/" target="_blank">LinkedIn.</a>
      </p>
    </div>
  </main>

  <script src="js/user_pages.js"></script>
</body>

</html>

<?php
} else {
    // user not logged in. Go back to home page
    header("location:index.php");
}