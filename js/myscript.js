if (document.location.href.indexOf("/cmp/") >= 0) {
    fixComaration();
}


function fixComparation() {
    var same_val = document.getElementsByClassName("same-val");
    for (var i in same_val) {
        if (same_val.hasOwnProperty(i)) {
            var sameVal = same_val[i].style;
            console.log(sameVal);
            if (sameVal !== undefined) {
                sameVal.heigth = "30px";
            }
        }
    }
}
