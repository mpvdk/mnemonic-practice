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
  <title>MP - Resources</title>
</head>

<body id="resources">
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
        <li id="this" class="resources">Resources</li>
        <li class="about"><a href="about.php">About</a></li>
        <li><?=$menuItem?></li>
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

  <main class="main-resources">
    <h1 class="userpage-title">Resources</h1>
    <div class="resource-section-container">

      <div class="resource-section">
        <h1 class="resource-section__title">First off</h1>
        <ul class="resource-section__list">
          <li class="list__item">
            <a href="https://en.wikipedia.org/wiki/Method_of_loci" target="_blank">Memory Palace -
              <span class="lower-opacity">Wikipedia</span></a>
          </li>
          <li class="list__description">
            <a href="https://en.wikipedia.org/wiki/Method_of_loci" target="_blank">What all the <span
                class="italic">cool kids</span> are using
              (e.g. Hannibal, Sherlock, Patrick Jane)<span class="italic"></span></a>
          </li>
          <li class="list__item">
            <a href="https://en.wikipedia.org/wiki/Moonwalking_with_Einstein" target="_blank">Moonwalking with Einstein
              -
              <span class="lower-opacity">Wikipedia</span></a>
          </li>
          <li class="list__description">
            <a href="https://en.wikipedia.org/wiki/Moonwalking_with_Einstein" target="_blank"><span class="italic">The
                Art and
                Science of Remembering Everything</span> - Book by Joshua Foer</a>
          </li>
          <li class="list__item">
            <a href="https://www.google.com" target="_blank">Google</a>
          </li>
          <li class="list__description">
            <a href="https://www.google.com" target="_blank">Fucking use it</a>
          </li>
        </ul>
      </div>

      <div class="resource-section">
        <h1 class="resource-section__title">Number systems</h1>
        <ul class="resource-section__list">
          <li class="list__item">
            <a href="https://en.wikipedia.org/wiki/Mnemonic_major_system" target="_blank">Major system - <span
                class="lower-opacity">Wikipedia</span></a>
          </li>
          <li class="list__description">
            <a href="https://en.wikipedia.org/wiki/Mnemonic_major_system" target="_blank">Introduction to the Major
              System</a>
          </li>
          <li class="list__item">
            <a href="https://en.wikipedia.org/wiki/Dominic_system" target="_blank">Dominic system - <span
                class="lower-opacity">Wikipedia</span></a>
          </li>
          <li class="list__description">
            <a href="https://en.wikipedia.org/wiki/Dominic_system" target="_blank">Introduction to the Dominic
              System</a>
          </li>
          <li class="list__item">
            <a href="https://artofmemory.com/wiki/Person-Action-Object_(PAO)_System" target="_blank">PAO System -
              <span class="lower-opacity">ArtOfMemory Wiki</span></a>
          </li>
          <li class="list__description">
            <a href="https://artofmemory.com/wiki/Person-Action-Object_(PAO)_System" target="_blank">Introduction
              to the Person-Action-Object system</a>
          </li>
        </ul>
      </div>

      <div class="resource-section">
        <h1 class="resource-section__title">General</h1>
        <ul class="resource-section__list">
          <li class="list__item">
            <a href="https://en.wikipedia.org/wiki/Art_of_memory" target="_blank">Art of memory - <span
                class="lower-opacity">Wikipedia</span></a>
          </li>
          <li class="list__description">
            <a href="https://en.wikipedia.org/wiki/Art_of_memory" target="_blank">Introduction to the concept of the
              "art of memory"</a>
          </li>
          <li class="list__item">
            <a href="https://en.wikipedia.org/wiki/Art_of_memory" target="_blank">Link system - <span
                class="lower-opacity">Wikipedia</span></a>
          </li>
          <li class="list__description">
            <a href="https://en.wikipedia.org/wiki/Mnemonic_link_system" target="_blank">Very useful for more than just
              numbers, but especially usefull when combined with the Major- or Dominic system. Unlike the Memory Palace
              system it doesn't require visualization of rooms and/or routes with pegs - just an initial primer.</a>
          </li>
        </ul>
      </div>

      <div class="resource-section">
        <h1 class="resource-section__title">Community</h1>
        <ul class="resource-section__list">
          <li class="list__item">
            <a href="https://forum.artofmemory.com" target="_blank">Art of Memory Forum</a>
          </li>
          <li class="list__description">
            <a href="https://forum.artofmemory.com" target="_blank">Active forum related to memory techniques</a>
          </li>
          <li class="list__item">
            <a href="https://www.reddit.com/r/Mnemonics" target="_blank">/r/Mnemonics</a>
          </li>
          <li class="list__description">
            <a href="https://www.reddit.com/r/Mnemonics" target="_blank">A subreddit dedicated to mnemonics</a>
          </li>
        </ul>
      </div>
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