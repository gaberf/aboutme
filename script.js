var topButton = document.getElementById("topButton");

window.onscroll = function() {
    checkButtonShow();
}

function checkButtonShow() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function jumpToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function sub() {
    window.open('https://www.youtube.com/channel/UC3vTQpO_BOr9c8eQ1axqWQQ?sub_confirmation=1');
}

function newvid() {
    window.open('https://www.youtube.com/watch?v=5hA0OGYCn6E');
}

function takeSurvey() {
    window.open('https://bit.ly/3yBL54k');
}