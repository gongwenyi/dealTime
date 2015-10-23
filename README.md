# dealTime
倒计时效果
1.使用说明
  1.1 此插件基于jQuery
  1.2 调用方法 dealTime.init($('.className'));可以为页面上所有拥有这个类名的标签调用此方法。
  1.3 倒计时的时间设置：通过自定义属性data-time设置
  1.4 data-time设置值的格式有如下几种：data-time="12:03:33"; data-time="12:3:3"; data-time="3:33"; data-time="33"; data-time=""; 如果为空或者没有该
      属性，则使用默认值24:00:00，格式错误也会使用默认值。
