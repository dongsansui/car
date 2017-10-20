/**
 * Created by John on 2017/10/19.
 */
$(".header-title").on("click","li", function () {
    $(this).addClass("active").siblings().removeClass("active")
})