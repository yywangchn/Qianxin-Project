var carousel = document.querySelector('.carousel');
        var ul = carousel.querySelector('ul');
        var ol = document.querySelector('ol');
        for (var i = 0; i < ul.children.length; i++) {
            //创建li
            var li = document.createElement('li');
            //记录当前li的索引号，设置自定义属性
            li.setAttribute('index', i);
            //往ol里面添加li
            ol.appendChild(li);
            //小圆圈的排他思想，点击期中一个小圆圈时，其他小圆圈不添加背景颜色
            //生成小圆圈的同时添加点击事件
            li.addEventListener('click', function () {
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                //给当前点击的li添加current类名
                this.className = 'current';
                //ul移动的距离 小圆圈的索引号 * 图片的宽度 注意是负值
                //获取索引号
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                var carouselWidth = carousel.offsetWidth;
                // console.log(carouselWidth);
                // console.log(index);
                var target = - carouselWidth * index;
                // console.log(target);
                animate(ul, target);
            })
        }
        //往ol里面添加current类
        ol.children[0].className = 'current';
        console.log(ol.children.className);
        //克隆第一张图片（li）把他放进（ul）里面
        var fister = ul.children[0].cloneNode(true);
        console.log(fister);
        ul.appendChild(fister);
        
        var num = 0;
        //控制下面的小圆圈
        var circle = 0;
        //flag为节流阀
        var flag = true ;
        //自动播放轮播图
        var timer = setInterval(function(){
            // //手动调用定时器
            // right.click()
            if(flag){
                flag = false;//关闭节流阀
             if(num == 5){
                ul.style.left = 0 ;
                 num = 0 ;
             }
            }
             num++;
             var carouselWidth = carousel.offsetWidth;
             animate(ul, - num * carouselWidth,function(){
                 flag = true;//打开节流阀
             })
         //点击右侧按钮小圆圈跟随一起变化
             circle++;
         //当小圆圈移动到最后一个时；把它的值改为0，回到第一个
             if(circle == ol.children.length){
                 circle = 0;
             }
             //排他思想
             for(var i=0;i<ol.children.length;i++){
              ol.children[i].className = '';
             }
            ol.children[circle].className = 'current';
           
        },3000);
        function animate (obj,target,callback){
            clearInterval(obj.timer)
            //obj.timer 给不同的元素添加了不同的定时器
            obj.timer =  setInterval(function(){
            if(obj.offsetLeft == target){
                clearInterval(obj.timer);
                //回调函数
                if(callback){
                    //调用函数
                    callback();
                }
            }
            //缓动动画移动：
            //1.每次加1，改为每次步长变小的值
            //2.核心算法：（目标位置 - 现在位置）/10
            //3.步长写在定时器里面
            //4.把步长值取整，不要出线小数的问题，向上取整
            var step =(target - obj.offsetLeft) / 10;
            // console.log(target - obj.offsetLeft);

            if(step > 0){
                step = Math.ceil((target - obj.offsetLeft) / 10);
            }else {
                step = Math.floor((target - obj.offsetLeft) / 10);
            }
            obj.style.left = obj.offsetLeft + step + 'px' ;
            
        },15)
        }