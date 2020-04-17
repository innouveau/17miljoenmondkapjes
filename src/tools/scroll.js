import $ from 'jquery';

const scrollToAnchor = function(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('.app').animate({scrollTop: aTag.offset().top},'slow');
};

export default {
    scrollToAnchor
}