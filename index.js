$(document).ready(function() {
    load();
    $("#message").text("嗷呜！来挑战啊！！");
    $("#start").text("开始找蛮蛮！！");

    $(".choose-option").on('click', function() {
        let clickedId = $(this).data('id');
        judgeAnswer(clickedId);
    });
});

function load() {
    cats = shuffle(["1.jpg", "2_yes.jpg", "3.jpg", "4_yes.jpg", "5.jpg", "6.jpg", "7_yes.jpg"]);
    pictureIndex = 0;
    $("#yes").hide();
    $("#no").hide();
    $("#start").show();
}

function start() {
    $("#start").hide();
    $("#yes").show();
    $("#no").show();
    $('#point').text('0');
    $('#wrong').text('0');
    $("#message").text("这只喵是蛮蛮吗！");
    document.getElementById("picture").src = `cats/${cats[pictureIndex]}`;
}

function judgeAnswer(clickedId) {
    const srcNow = document.getElementById("picture").src;
    if (clickedId === 'yes') {
        if (srcNow.indexOf('yes') > -1) {
            $("#message").text("答对啦！是蛮蛮！");
            $("#point").text(`${parseInt($('#point').text()) + 1}`);
        } else {
            $("#message").text("答错啦！这才不是蛮蛮！");
            $("#wrong").text(`${parseInt($('#wrong').text()) + 1}`);
        }
    } else {
        if (srcNow.indexOf('yes') == -1) {
            $("#message").text("答对啦！这不是蛮蛮！");
            $("#point").text(`${parseInt($('#point').text()) + 1}`);
        } else {
            $("#message").text("你连蛮蛮都不认识！揍你!");
            $("#wrong").text(`${parseInt($('#wrong').text()) + 1}`);
        }
    }
    if (pictureIndex == cats.length - 1) {
        setTimeout("finishGame()", 1000);
    } else {
        pictureIndex += 1;
        setTimeout("displayCat(pictureIndex)", 1000);
    }
}

function displayCat(pictureIndex) {
    $("#message").text("这只喵是蛮蛮吗！");
    document.getElementById("picture").src = `cats/${cats[pictureIndex]}`;
}

function finishGame() {
    const point = $('#point').text();
    const wrong = $('#wrong').text();
    point == cats.length ?
        $("#message").text(`游戏结束！答对${point}题 答错${wrong}题！棒棒的！`) :
        point > wrong ?
        $("#message").text(`游戏结束！答对${point}题 答错${wrong}题！还不错！`) :
        $("#message").text(`游戏结束！答对${point}题 答错${wrong}题！小心蛮蛮挠你！`);
    load();
    document.getElementById("picture").src = "defaultCat.jpg";

    $("#start").text("再来一次！！");
}

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}