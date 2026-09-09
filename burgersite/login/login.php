<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Account Access</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="frame">

    <!-- Left editorial panel -->
    <aside class="panel-info">
      <div class="panel-info__inner">
        <p class="mark">No. 04 / Access</p>
        <h1 class="headline" id="headline">Sign in to<br>continue.</h1>
        <p class="sub" id="subline">Your work is saved exactly where you left it.</p>

        <ul class="ticks" id="ticks">
          <li>Picks up your last session</li>
          <li>Nothing to reconfigure</li>
          <li>Takes about ten seconds</li>
        </ul>
      </div>
      <p class="foot">Keep this device private — sign out on shared computers.</p>
    </aside>

    <!-- Right form panel -->
    <main class="panel-form">

      <nav class="switcher" role="tablist" aria-label="Choose form">
        <button type="button" class="switcher__btn is-active" id="tab-login" role="tab" aria-selected="true" aria-controls="form-login">Sign in</button>
        <button type="button" class="switcher__btn" id="tab-register" role="tab" aria-selected="false" aria-controls="form-register">Create account</button>
        <span class="switcher__bar" id="switcherBar"></span>
      </nav>

      <!-- LOGIN FORM -->
      <form class="form is-active" id="form-login" novalidate>
        <div class="field">
          <label for="login-email">Email</label>
          <input type="email" id="login-email" name="email" autocomplete="email" placeholder="you@example.com">
          <p class="error" id="err-login-email"></p>
        </div>

        <div class="field">
          <div class="field__row">
            <label for="login-password">Password</label>
            <button type="button" class="link-btn" id="toggle-login-pw">Show</button>
          </div>
          <input type="password" id="login-password" name="password" autocomplete="current-password" placeholder="Your password">
          <p class="error" id="err-login-password"></p>
        </div>

        <label class="check">
          <input type="checkbox" id="login-remember">
          <span>Keep me signed in on this device</span>
        </label>

        <button type="submit" class="submit">Sign in</button>

        <p class="status" id="status-login" aria-live="polite"></p>
      </form>

      <!-- REGISTER FORM -->
      <form class="form" id="form-register" novalidate>
        <div class="field-pair">
          <div class="field">
            <label for="reg-first">First name</label>
            <input type="text" id="reg-first" name="first" autocomplete="given-name" placeholder="Alex">
            <p class="error" id="err-reg-first"></p>
          </div>
          <div class="field">
            <label for="reg-last">Last name</label>
            <input type="text" id="reg-last" name="last" autocomplete="family-name" placeholder="Rivera">
            <p class="error" id="err-reg-last"></p>
          </div>
        </div>

        <div class="field">
          <label for="reg-email">Email</label>
          <input type="email" id="reg-email" name="email" autocomplete="email" placeholder="you@example.com">
          <p class="error" id="err-reg-email"></p>
        </div>

        <div class="field">
          <div class="field__row">
            <label for="reg-password">Password</label>
            <button type="button" class="link-btn" id="toggle-reg-pw">Show</button>
          </div>
          <input type="password" id="reg-password" name="password" autocomplete="new-password" placeholder="At least 8 characters">
          <div class="strength" aria-hidden="true">
            <span id="strength-bar"></span>
          </div>
          <p class="error" id="err-reg-password"></p>
        </div>

        <div class="field">
          <label for="reg-confirm">Confirm password</label>
          <input type="password" id="reg-confirm" name="confirm" autocomplete="new-password" placeholder="Type it again">
          <p class="error" id="err-reg-confirm"></p>
        </div>

        <label class="check">
          <input type="checkbox" id="reg-terms">
          <span>I agree to the Terms and Privacy Notice</span>
        </label>
        <p class="error" id="err-reg-terms"></p>

        <button type="submit" class="submit">Create account</button>

        <p class="status" id="status-register" aria-live="polite"></p>
      </form>

    </main>
  </div>

<script src="script.js"></script>
</body>
</html>