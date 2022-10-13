// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function hideallbibs()
{
    var el = document.getElementsByTagName("pre") ;
    for (var i = 0 ; i < el.length ; ++i) {
                el[i].style.display = 'none' ;
    }
}

function togglebib(paperid)
{
    var bib = document.getElementById(paperid) ;
        if (bib.style.display == 'none') {
            bib.style.display = 'block' ;
        } else {
            bib.style.display = 'none' ;
        }
}

//function hideallabs()
//{
    //var el = document.getElementsByTagName("div") ;
    //for (var i = 0 ; i < el.length ; ++i) {
        //if (el[i].className == "paper") {
            //var spans = el[i].getElementsByTagName("span") ;
            //for (var j = 0; j < spans.length; ++j) {
                //if (spans[j].className == "blurb") {
                  //spans [j] .style.display = 'none' ;
                //}
            //}
        //}
    //}
//}

//function toggleabs(paperid)
//{
    //var el = document.getElementById(paperid) ;
    //var abs = el.getElementsByTagName('span') ;
    //if (abs.length > 0) {
        //if (abs [0] .style.display == 'none') {
            //abs [0] .style.display = 'block' ;
        //} else {
            //abs [0] .style.display = 'none' ;
        //}
    //}
//}
