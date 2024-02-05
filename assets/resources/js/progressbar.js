export default function updateProgressBar() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercentage = (scrollTop / scrollHeight) * 100;
  document.getElementById("myProgressBar").style.width = scrollPercentage + "%";
}