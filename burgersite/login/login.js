// ---------------------------------------------------------------
// Simple in-memory "database" of registered users.
// In a real app this validation/storage happens on a server.
// ---------------------------------------------------------------
const registeredUsers = new Map(); // email -> { first, last, password }

// ---------------------------------------------------------------
// Tab switching (Sign in / Create account)
// ---------------------------------------------------------------
const tabLogin    = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const formLogin    = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const switcherBar  = document.getElementById('switcherBar');

const headline = document.getElementById('headline');
const subline  = document.getElementById('subline');
const ticks    = document.getElementById('ticks');

const copy = {
  login: {
    headline: 'Sign in to<br>continue.',
    subline: 'Your work is saved exactly where you left it.',
    ticks: ['Picks up your last session', 'Nothing to reconfigure', 'Takes about ten seconds']
  },
  register: {
    headline: 'Set up your<br>account.',
    subline: 'A few details now save you from re-entering them later.',
    ticks: ['Free to create', 'No card required', 'Ready in under a minute']
  }
};

function setSwitcherPosition(btn){
  switcherBar.style.width = btn.offsetWidth + 'px';
  switcherBar.style.transform = `translateX(${btn.offsetLeft}px)`;
}

function updateSidePanel(mode){
  headline.style.opacity = 0;
  subline.style.opacity = 0;
  ticks.style.opacity = 0;
  setTimeout(() => {
    headline.innerHTML = copy[mode].headline;
    subline.textContent = copy[mode].subline;
    ticks.innerHTML = copy[mode].ticks.map(t => `<li>${t}</li>`).join('');
    headline.style.opacity = 1;
    subline.style.opacity = 1;
    ticks.style.opacity = 1;
  }, 120);
}

function activateTab(which){
  const loginActive = which === 'login';

  tabLogin.classList.toggle('is-active', loginActive);
  tabRegister.classList.toggle('is-active', !loginActive);
  tabLogin.setAttribute('aria-selected', loginActive);
  tabRegister.setAttribute('aria-selected', !loginActive);

  formLogin.classList.toggle('is-active', loginActive);
  formRegister.classList.toggle('is-active', !loginActive);

  setSwitcherPosition(loginActive ? tabLogin : tabRegister);
  updateSidePanel(loginActive ? 'login' : 'register');
}

tabLogin.addEventListener('click', () => activateTab('login'));
tabRegister.addEventListener('click', () => activateTab('register'));

// Initialize underline position after fonts/layout settle
window.addEventListener('load', () => setSwitcherPosition(tabLogin));
window.addEventListener('resize', () => {
  setSwitcherPosition(tabLogin.classList.contains('is-active') ? tabLogin : tabRegister);
});

// ---------------------------------------------------------------
// Password show/hide toggles
// ---------------------------------------------------------------
function wireToggle(buttonId, inputId){
  const btn = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  btn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    btn.textContent = isPassword ? 'Hide' : 'Show';
  });
}
wireToggle('toggle-login-pw', 'login-password');
wireToggle('toggle-reg-pw', 'reg-password');

// ---------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(fieldId, message){
  const input = document.getElementById(fieldId);
  const err = document.getElementById('err-' + fieldId);
  if (message){
    input.classList.add('has-error');
    err.textContent = message;
  } else {
    input.classList.remove('has-error');
    err.textContent = '';
  }
}

function setStatus(elId, message, type){
  const el = document.getElementById(elId);
  el.textContent = message;
  el.classList.remove('success', 'fail');
  if (type) el.classList.add(type);
}

// ---------------------------------------------------------------
// Password strength meter (registration only)
// ---------------------------------------------------------------
const regPassword = document.getElementById('reg-password');
const strengthBar = document.getElementById('strength-bar');

function scorePassword(pw){
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0-5
}

regPassword.addEventListener('input', () => {
  const score = scorePassword(regPassword.value);
  const pct = regPassword.value.length === 0 ? 0 : Math.min(100, (score / 5) * 100);
  strengthBar.style.width = pct + '%';
  strengthBar.style.background =
    score <= 1 ? '#B3261E' :
    score <= 3 ? '#C98A1B' :
                 '#1E7A46';
});

// ---------------------------------------------------------------
// LOGIN form submission
// ---------------------------------------------------------------
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  setStatus('status-login', '', null);

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  let valid = true;

  if (!email){
    setError('login-email', 'Enter your email.');
    valid = false;
  } else if (!EMAIL_RE.test(email)){
    setError('login-email', 'That doesn\'t look like a valid email.');
    valid = false;
  } else {
    setError('login-email', '');
  }

  if (!password){
    setError('login-password', 'Enter your password.');
    valid = false;
  } else {
    setError('login-password', '');
  }

  if (!valid) return;

  // Simulated auth check against in-memory store
  const user = registeredUsers.get(email.toLowerCase());
  if (!user){
    setStatus('status-login', 'No account found with that email. Try creating one instead.', 'fail');
    return;
  }
  if (user.password !== password){
    setStatus('status-login', 'Incorrect password. Please try again.', 'fail');
    return;
  }

  setStatus('status-login', `Welcome back, ${user.first}. You're signed in.`, 'success');
  formLogin.reset();
});

// ---------------------------------------------------------------
// REGISTER form submission
// ---------------------------------------------------------------
formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  setStatus('status-register', '', null);

  const first = document.getElementById('reg-first').value.trim();
  const last = document.getElementById('reg-last').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  const termsBox = document.getElementById('reg-terms');
  const termsErr = document.getElementById('err-reg-terms');

  let valid = true;

  if (!first){
    setError('reg-first', 'Required.');
    valid = false;
  } else setError('reg-first', '');

  if (!last){
    setError('reg-last', 'Required.');
    valid = false;
  } else setError('reg-last', '');

  if (!email){
    setError('reg-email', 'Enter your email.');
    valid = false;
  } else if (!EMAIL_RE.test(email)){
    setError('reg-email', 'That doesn\'t look like a valid email.');
    valid = false;
  } else if (registeredUsers.has(email.toLowerCase())){
    setError('reg-email', 'An account with this email already exists.');
    valid = false;
  } else {
    setError('reg-email', '');
  }

  if (!password){
    setError('reg-password', 'Enter a password.');
    valid = false;
  } else if (password.length < 8){
    setError('reg-password', 'Use at least 8 characters.');
    valid = false;
  } else {
    setError('reg-password', '');
  }

  if (!confirm){
    setError('reg-confirm', 'Confirm your password.');
    valid = false;
  } else if (confirm !== password){
    setError('reg-confirm', 'Passwords don\'t match.');
    valid = false;
  } else {
    setError('reg-confirm', '');
  }

  if (!termsBox.checked){
    termsErr.textContent = 'You need to agree before continuing.';
    valid = false;
  } else {
    termsErr.textContent = '';
  }

  if (!valid) return;

  registeredUsers.set(email.toLowerCase(), { first, last, password });
  setStatus('status-register', `Account created for ${first}. You can now sign in.`, 'success');
  formRegister.reset();
  strengthBar.style.width = '0%';

  // Convenience: hand the person straight to the sign-in tab, prefilled.
  setTimeout(() => {
    activateTab('login');
    document.getElementById('login-email').value = email;
  }, 900);
});