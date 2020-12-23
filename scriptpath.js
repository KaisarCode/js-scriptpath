// Get base path from script
function scriptPath(fl) {
    var pth = '';
    var scripts = document.querySelectorAll('script');
    for (i = 0; i < scripts.length; ++i) {
        var scr = scripts[i];
        if (scr.attributes.src) {
            var src = scr.attributes.src.value;
            var mtc = fl.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
            var rx = new RegExp(mtc+'$', 'gi');
            if (src.match(rx) !== null) {
                pth = src.replace(rx, '');
            }
        }
    } return pth;
}
