$(document).ready(function() {
    $("#message").text("开始找蛮蛮！！");
    $("#yes").hide();
    $("#no").hide();
});

function start() {
    $("#start").hide();
    $("#yes").show();
    $("#no").show();
    $("#message").text("这只喵是蛮蛮吗！");
}

function chooseYes() {
    const srcNow = document.getElementById("picture").src;
    if (srcNow.indexOf('yes') > -1) {
        $("#judge-message").text("对！是蛮蛮！");
    } else {
        $("#judge-message").text("这才不是蛮蛮！");
    }
    displayNextCat();
}

function chooseNo() {
    const srcNow = document.getElementById("picture").src;
    if (srcNow.indexOf('yes') == -1) {
        $("#judge-message").text("对！这不是蛮蛮！");
    } else {
        $("#judge-message").text("你连蛮蛮都不认识！揍你!");
    }

    displayNextCat();
}

function displayNextCat() {
    let cats = ["1.jpg", "2_yes.jpg", "3.jpg", "4_yes.jpg", "5.jpg", "6.jpg"];
    document.getElementById("picture").src = `cats/${cats[Math.floor(Math.random() * cats.length)]}`;
}