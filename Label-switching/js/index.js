/**
内容详情轮播
*/
$(function(){
    // 获取到所有的li元素
    $(".xiang_lis > span").click(function () {
    // 给当前li 添加类，给所有的兄弟元素移除类
    $(this).addClass("active1").siblings().removeClass("active1");
    // 让当前菜单对应的内容展示出来，并让内容的所有兄弟元素隐藏起来
    var index = $(this).index(); // 获取到当前元素的索引号
    $(".detail > div").eq(index).addClass('selected').siblings("div").removeClass("selected");
    });
});
