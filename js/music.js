/**
 * Created by Administrator on 2017/3/21.
 */
window.onload=function () {
    //创建曲库
    let database=[
        {id:'c1',name:'七月上',src:'music/七月上.mp3',icon:'img/img1.jpg',bigimg:'bigimg/big1.jpg',author:'Jam',album:'七月上',lyrics:[
            {time:'0:00',lyrics:'七月上 - JAM'},
            {time:'0:09',lyrics:'词：Jam 曲：Jam'},
            {time:'0:13',lyrics:'我化尘埃飞扬'},
            {time:'0:17',lyrics:'追寻赤裸逆翔'},
            {time:'0:21',lyrics:'奔去七月刑场'},
            {time:'0:25',lyrics:'时间烧灼滚烫'},
            {time:'0:29',lyrics:'回忆撕毁臆想'},
            {time:'0:33',lyrics:'路上行走匆忙'},
            {time:'0:37',lyrics:'难能可贵世上'},
            {time:'0:41',lyrics:'散播留香磁场'},
            {time:'0:49',lyrics:'我欲乘风破浪'},
            {time:'0:51',lyrics:'踏遍黄沙海洋'},
            {time:'0:53',lyrics:'与其误会一场'},
            {time:'0:55',lyrics:'也要不负勇往'},
            {time:'0:57',lyrics:'我愿你是个谎'},
            {time:'1:00',lyrics:'从未出现南墙'},
            {time:'1:02',lyrics:'笑是神的伪装'},
            {time:'1:04',lyrics:'笑是强忍的伤'},
            {time:'1:06',lyrics:'就让我走向你'},
            {time:'1:08',lyrics:'走向你的床'},
            {time:'1:10',lyrics:'就让我看见你'},
            {time:'1:13',lyrics:'看见你的伤'},
            {time:'1:15',lyrics:'我想你就站在'},
            {time:'1:17',lyrics:'站在大漠边疆'},
            {time:'1:19',lyrics:'我想你就站在'},
            {time:'1:21',lyrics:'站在七月上'},
            {time:'1:38',lyrics:'我化尘埃飞扬'},
            {time:'1:42',lyrics:'追寻赤裸逆翔'},
            {time:'1:46',lyrics:'奔去七月刑场'},
            {time:'1:50',lyrics:'时间烧灼滚烫'},
            {time:'1:54',lyrics:'回忆撕毁臆想'},
            {time:'1:59',lyrics:'路上行走匆忙'},
            {time:'2:03',lyrics:'难能可贵世上'},
            {time:'2:07',lyrics:'散播留香磁场'},
            {time:'2:15',lyrics:'我欲乘风破浪'},
            {time:'2:17',lyrics:'踏遍黄沙海洋'},
            {time:'2:19',lyrics:'与其误会一场'},
            {time:'2:21',lyrics:'也要不负勇往'},
            {time:'2:23',lyrics:'我愿你是个谎'},
            {time:'2:25',lyrics:'从未出现南墙'},
            {time:'2:27',lyrics:'笑是神的伪装'},
            {time:'2:30',lyrics:'笑是强忍的伤'},
            {time:'2:32',lyrics:'就让我走向你'},
            {time:'2:34',lyrics:'走向你的床'},
            {time:'2:36',lyrics:'就让我看见你'},
            {time:'2:38',lyrics:'看见你的伤'},
            {time:'2:40',lyrics:'我想你就站在'},
            {time:'2:42',lyrics:'站在大漠边疆'},
            {time:'2:45',lyrics:'我想你就站在'},
            {time:'2:47',lyrics:'站在七月上'},

        ]},
        {id:'c2',name:'刚好遇见你',src:'music/刚好遇见你.mp3',icon:'img/img2.jpg',bigimg:'bigimg/big2.jpg',author:'李玉刚',album:'刚好遇见你'},
        {id:'c3',name:'认真的雪',src:'music/认真的雪.mp3',icon:'img/img3.png',bigimg:'bigimg/big3.jpg',author:'薛之谦',album:'未完成'},
        {id:'c4',name:'岁月神偷',src:'music/岁月神偷.mp3',icon:'img/img4.jpg',bigimg:'bigimg/big4.jpg',author:'金玟岐',album:'金玟岐作品集'},
    ];
    //将曲库加入播放列表
    //获取要加入歌曲的列表
    let lists=document.querySelector('.list .ul');
    // console.log(lists);
    database.forEach((obj)=>{
        let li=document.createElement('li');
        li.innerHTML=`<span class="iconfont"></span>
                    <span>${obj.name}</span>
                    <span>${obj.author}</span>
                    <span class="iconfont icon-iconfont05 del"></span>
                `;
        li.id=obj.id;
        lists.appendChild(li);
    });
    //让默认的当前的li选中
    let current=0;//定义一个全局变量，存储当前被选中的下标
    lists.children[current].classList.add('active');//当前的被选中
    //将歌词加入页面
    // let lyric=document.querySelector('.lyric');
    // database[current].lyrics.forEach((obj,万能钥匙)=>{
    //     //创建一个li
    //     let li=document.createElement('li');
    //     li.innerHTML=`${obj.lyrics}`;
    //     li.id='c'+万能钥匙;
    //     lyric.appendChild(li);
    // })
    //点击播放按钮进行判断，如果播放，那么暂停，对应的图标变化，播放状态也改变；如果是暂停做相应的变化
    //获取播放按钮
    let play=document.querySelector('.play');
    let audio=document.querySelector('audio');
    let lis=lists.querySelectorAll('li');
    play.onclick=function () {
        let span=play.querySelector('span');//获取播放下的span
        if(audio.paused){//判断是否暂停.暂停就播放
            audio.play();//播放
            //切换至播放按钮
            span.classList.remove('icon-bofang');
            span.classList.add('icon-weibiaoti1');
            //加播放状态
            lis[current].children[0].classList.add('icon-yinle');
        }else {
            //暂停播放
            audio.pause();
            //切换至暂停按钮
            span.classList.remove('icon-weibiaoti1');
            span.classList.add('icon-bofang');
            //移除播放状态
            lis[current].children[0].classList.remove('icon-yinle');
        }
    }

    //当浏览器可以播放时触发，用到的事件是：canplay。
    let stutusbar=document.querySelector('.stutus .bar');
    audio.oncanplaythrough=function () {
        //让播放条的加载条的宽度从0变最大；
        //获取进度条的宽度
        let wbar=stutusbar.offsetWidth;
        // console.log(wbar);
        // console.log(stutusbar);
        //获取加载条
        let load=stutusbar.querySelector('.load');
        //让加载条的宽度从0变到wbar
        load.style.width=wbar+'px';

    }
    //当播放的当前位置改变时，事件timeupdate触发
    //获取time
    let time=document.querySelector('.time');
    //获取played
    let played=document.querySelector('.played');
    //获取circle
    let circle=document.querySelector('.circle');
    audio.ontimeupdate=function () {
        //获取当前音频的总时长
        let totaltime=getTime(audio.duration);
        //获取当前音频播放到的位置
        let presenttime=getTime(audio.currentTime);
        //将time设置到页面中去
        //将当前的时间赋给time下的span
        time.children[0].innerHTML=presenttime;
        time.children[2].innerHTML=totaltime;
        //得到当前时间与总时间的比值
        let nn=audio.currentTime/audio.duration;
        //给played的width一个不断变化的值
        played.style.width=nn*405+'px';
        //给circle的left一个不断变化的值
        circle.style.left=nn*405-10+'px';

        //让歌词动起来
        //获取当前播放的歌曲的歌词lyrics
        let lyrtime=database[current].lyrics;
        // console.log(lyrtime);
        //遍历 返回当前歌曲的时间和歌词的时间对应相等的下标
        lyrtime.forEach((obj,index)=>{
            if (obj.time == getTime(audio.currentTime)) {
                //让下标对应的li添加样式，ul.lyric下的孩子的第lyrn个孩子
                lyric.children[index].style.color = 'red';
            }
        });
        //     let n=万能钥匙;
        //     if(万能钥匙<=5){
        //         万能钥匙=0;
        //     }else {
        //         万能钥匙=万能钥匙-5;
        //     }
        //     lyric.innerHTML='';//赋空
        //     for(let i=0;i<database[current].lyrics.length-1;i++){
        //         let li=document.createElement('li');
        //         li.innerHTML=`${obj.lyrics}`;
        //         li.id='c'+i;
        //         lyric.appendChild(li);
        //     }
        //     let mm=lyric.children.findIndex((val)=>{
        //         return val.id=='c'+n;
        //     });
        //     lyric.children[mm].style.color='red';
        // });
        //重绘

        //当一首歌曲结束自动播放下一首
        while(audio.currentTime==audio.duration){
            song('next');
        }
    }
    //得到歌曲时间的函数
    function getTime(time) {
        let m=parseInt(time/60);
        let s=Math.trunc(time)%60>=10?Math.trunc(time)%60:'0'+Math.trunc(time)%60;
        return m+':'+s;
    }
    //点击//点击进度条获取offsetX和offsetWidth的比值，这个比值*总时间就是当前播放时间，设置当前的播放时间
    //获取进度条 上面获取了stutusbar
    // audio.oncanplaythrough=function () {
    stutusbar.onclick=function (e) {
        //获取点击后的offsetX和offsetWidth
        //设置时间
        audio.currentTime=audio.duration*e.offsetX/stutusbar.offsetWidth;
        audio.play();
        author.children[0].innerHTML=database[current].author;
        author.children[2].innerHTML=database[current].name;
        play.children[0].classList.remove('icon-bofang');
        play.children[0].classList.add('icon-weibiaoti1');
        lists.children[current].children[0].classList.add('icon-yinle');
    }
    // };
    //拖拽事件,拖的是圆。失败了。。。
    let stutusbarw=stutusbar.offsetWidth;
    let circlew=circle.offsetWidth;
    circle.onmousedown=function (e) {
        let circleo=e.offsetX;
        console.log(circleo);
        stutusbar.onmousemove=function (e) {
            let circlec=e.clientX;
            console.log(circlec);
            let newleft=circlec-circleo;
            console.log(newleft);
            circle.style.left=newleft+'px';
        }
        stutusbar.onmouseup=function () {
            stutusbar.onmousemove=null;
        }
    }
    //音量
    let volume=document.querySelector('.volume');
    let vol=volume.querySelector('.vol');
    let volumbar=volume.querySelector('.bar');
    let nowvol;
    let volumeplayed=volume.querySelector('.played');
    let volumecircle=volume.querySelector('.circle');
    vol.onclick=function () {
        if(audio.volume){
            nowvol=audio.volume;
            audio.volume=0;
            vol.children[0].classList.remove('icon-shengyin');
            vol.children[0].classList.add('icon-jingyin');
        }else {
            audio.volume=nowvol;
            vol.children[0].classList.add('icon-shengyin');
            vol.children[0].classList.remove('icon-jingyin');
        }
    }
    //音量点击
    volumbar.onclick=function (e) {
        audio.volume=e.offsetX/volumbar.offsetWidth;
    };
    //音量改变
    audio.onvolumechange=function () {
        volumeplayed.style.width=audio.volume*volumbar.offsetWidth+'px';
        volumecircle.style.left=audio.volume*volumbar.offsetWidth-10+'px';
    }
    //列表的双击事件
    //事件委派
    let author=document.querySelector('.stutus .author');
    let box=document.querySelector('.box');
    lists.ondblclick=function (e) {
        let obj=e.target;
        if(obj.nodeName=='SPAN'){
            let par=obj.parentNode;
            // console.log(par);
            let pp=par.parentNode;
            // console.log(pp);
            let idname=par.id;
            let result=database.findIndex((obj,index)=>{
                return obj.id==idname;
            });
            //移除所有的active
            [...pp.children].forEach((obj)=>{
                obj.classList.remove('active');
            });
            pp.children[result].classList.add('active');
            //点击后就播放
            audio.src=database[result].src;
            box.style.backgroundImage=`url(${database[result].bigimg})`;
            document.querySelector('.icon').style.backgroundImage=`url(${database[result].icon})`;
            // console.log(box.style.backgroundImage);
            author.children[0].innerHTML=database[result].author;
            author.children[2].innerHTML=database[result].name;
            play.children[0].classList.remove('icon-bofang');
            play.children[0].classList.add('icon-weibiaoti1');
            [...pp.children].forEach((obj)=>{
                obj.children[0].classList.remove('icon-yinle');
            })
            par.children[0].classList.add('icon-yinle');
            audio.play();
            current=result;
        }
    }

    //删除
    //如果目标对象的class名字是删除的
    let del=document.querySelectorAll('.del');
    del.forEach((obj)=>{
        obj.onclick=function () {
            if(obj.parentNode.className=='active'){
                return;
            };
            let idname=obj.parentNode.id;
            let result=database.findIndex((obj)=>{
                return obj.id==idname;
            });
            if(current>result){
                current--;
            }
            database.splice(result,1);
            lists.removeChild(obj.parentNode);
        }
    })

    //下一曲
    let next=document.querySelector('.next');
    let previous=document.querySelector('.previous');
    next.onclick=function () {
        song('next');
    }
    previous.onclick=function () {
        song('previous');
    }
    //封装个函数
    let way='next';
    function song(way='next') {
        if(way=='next'){
            current++;
            if(current>=lists.children.length){
                current=0;
            }
        }else if(way=='previous'){
            current--;
            if(current<0){
                current=lists.children.length-1;
            }
        }
        [...lists.children].forEach((obj)=>{
            obj.children[0].classList.remove('icon-yinle');
            obj.classList.remove('active');
        })
        lists.children[current].classList.add('active');
        //点击后就播放
        audio.src=database[current].src;
        audio.play();
        author.children[0].innerHTML=database[current].author;
        author.children[2].innerHTML=database[current].name;
        play.children[0].classList.remove('icon-bofang');
        play.children[0].classList.add('icon-weibiaoti1');
        lists.children[current].children[0].classList.add('icon-yinle');
        box.style.backgroundImage=`url(${database[current].bigimg})`;
        document.querySelector('.icon').style.backgroundImage=`url(${database[current].icon})`;
    }

    //菜单
    let menu=document.querySelector('.menu span');
    let divlist=document.querySelectorAll('.list');
    menu.onclick=function () {
        divlist[0].classList.toggle('choose');
    }

}