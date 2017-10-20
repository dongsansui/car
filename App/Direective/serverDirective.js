/**
 * Created by John on 2017/10/19.
 */
app.directive("server", function () {
    return {
        restrict:"EA",
        templateUrl:"./App/Views/template/_carServer.html",
        link:function(scope,ele,attr){
            var parent = $(ele).find(".lunbo");
            var hengL = $(ele).find(".heng-lunbo");
            var mySwiper = new Swiper(parent,{
                autoplay:1000,
                pagination:".swiper-pagination",
                paginationClickable:true
            });
            var heng = new Swiper(hengL,{
                autoplay:1000,
                slidesPerView: 2.5
            })
        }
    }
});