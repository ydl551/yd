var music = document.getElementById('music');
var audio = document.getElementById('audio');
var main = document.getElementsByClassName('main')[0];
var main_ = document.getElementsByClassName('main_')[0];
var story = document.getElementById('word');
var s = document.getElementById('show');
var i = 0;
var timer = null;

music.onclick = function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


//��ʼ��swiper
var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlideChangeEnd: function (swiper) {
        var slideAry = swiper.slides;
        /*���еĻ���*/
        var trueSlideNum = slideAry.length - 2;
        /*��ʵ�Ļ���ĸ���*/
        var lastNum = trueSlideNum + 1;
        /*���һ�����������*/
        /*��õ�ǰ���������*/
        var curIn = swiper.activeIndex;
        if (curIn == 4) {
            main.style.display = 'block';
            setTimeout(function () {
                timer = setInterval(function () {
                    s.innerHTML = story.innerHTML.substring(0, i);
                    i++;
                    if (s.innerHTML == story.innerHTML) {
                        clearInterval(timer);
                    }
                }, 170);
            }, 1500);

        } else {
            main.style.display = 'none';
            s.innerHTML = '';
            i = 0;
            clearInterval(timer);

        }
        if (curIn == 2) {
            main_.style.display = 'block';
        } else {
            main_.style.display = 'none';
        }
        [].forEach.call(slideAry, function (item, index) {
            item.id = null;
            if (curIn == index) {
                /*��һ�Ÿ���ʵ�������һ����һ���ģ����һ�Ÿ���ʵ����ĵ�һ����һ��*/
                switch (curIn) {
                    case 0 :
                        item.id = "page" + trueSlideNum;
                        break;
                    case lastNum :
                        item.id = "page1";
                        break;
                    default :
                        item.id = "page" + curIn;

                }
            }

        })

    }
})

