const $ = (s) => document.querySelector(s);

const date = $('#date');
const day = $('#day');
const month = $('#month');
const year = $('#year');

const now = new Date();
date.textContent = now.getDate();
day.textContent = getDayOfWeek(now.getDay());
month.textContent = getMonthText(now.getMonth());
year.textContent = now.getFullYear();

function getDayOfWeek(d) {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d] || 'Unknown';
}

function getMonthText(m) {
  return [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ][m] || 'Unknown';
}
