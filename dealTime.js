;(function($, window, document, undefined){
  function dealTime(ele){
    var self = this;
    this.$ele = ele;
    this.defalutTime = "24:00:00";  //设置一个默认倒计时时间
    
    var totalSecond = this.transformToSecond(this.getSetting());
    this.showDealTime(totalSecond);
  }
  dealTime.prototype = {
    getSetting : function(){  //获取倒计时的总时间
      var time = this.$ele.attr('data-time');
      time = (time && time!="") ? time : this.defalutTime;
      this.$ele.html(time);
      return time;
    },
    transformToSecond : function(str){  //计算总共的秒数
      var arr = str.split(":"); //用:切割时间字符串
      var hour = minute = second = totalSecond = 0;
      if(arr.length ==1){
        hour = 0;
        minute = 0;
        second = parseInt(arr[0]);
      }else if(arr.length == 2){
        hour = 0;
        minute = parseInt(arr[0]);
        second = parseInt(arr[1]);
      }else if(arr.length == 3){
        hour = parseInt(arr[0]),  //时
        minute = parseInt(arr[1]), //分
        second = parseInt(arr[2]); //秒
      }else{
        hour = 24;
      }
      totalSecond = hour*60*60 + minute*60 + second;
      return totalSecond;
    },
    transformToTimeString : function(totalSecond){  //将秒数转换为hh:mm:ss
      //根据秒数计算时分秒数
      var hour = parseInt(totalSecond/3600),
          formatHour = this.formatTime(hour),
          minute = parseInt(totalSecond/60)-hour*60,
          formatMinute = this.formatTime(minute),
          formatSecond = this.formatTime(parseInt(totalSecond%60));
      return formatHour+":"+formatMinute+":"+formatSecond;
    },
    formatTime : function(number){  //格式化时分秒
      number = number<10 ? ('0'+number) : number;
      return number;
    },
    showDealTime : function(totalSecond){ //显示剩余时间
      var self = this;
      var timer = setInterval(function(){
        if(totalSecond==0){ //倒计时结束
          clearInterval(timer);
          return false;
        }
        totalSecond--;
        var dealtime = self.transformToTimeString(totalSecond);
        self.$ele.html(dealtime);
      },1000);
    }
  };
  dealTime.init = function(ele){
    var _this = this;
    ele.each(function(){
      new _this($(this));
    });
  };
  window['dealTime'] = dealTime;
})(jQuery, window, document);