import $ from 'jquery';

const scrollToAnchor = function(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
};

export default {
    scrollToAnchor
}