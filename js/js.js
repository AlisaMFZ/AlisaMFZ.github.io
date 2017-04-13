

    el: 'body',
    components: { UiHeader },
    data: {
    },
    //初始化
    ready: function() {
        this.initFreeScroll();
    },
    methods: {
        //滚动初始化
        initFreeScroll: function () {
            Vue.nextTick(function () {
                var $ul = $('.rotaryTable-List ul');
                var $lis = $ul.find('li');
                var liHeight = $lis.height();
                if($lis.length > 4) {
                    if($lis.length % 2 == 1) {
                        $ul.append('<p class="ui-nowrap">&nbsp;</p>');
                    }
                    setInterval(function() { //终于解决了安卓滚动重影问题！！！背景色
                        $ul.css({
                            '-webkit-transform':'translate3d(0,-10px,0)',
                            '-webkit-transition':'-webkit-transform .5s'
                        });
                        setTimeout(function () {
                            $ul.css({
                                '-webkit-transform': 'translate3d(0,0,0)',
                                '-webkit-transition': null
                            });
                            $ul.append($ul.children().first());
                            $ul.append($ul.children().first());
                        }, 500);
                    }, 3000);
                }
            })
        },
    }
