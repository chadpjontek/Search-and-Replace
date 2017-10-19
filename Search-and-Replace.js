function myReplace(str, before, after) {
    // Is before uppercase?
    if (isUpper(before)) {
        after = after.charAt(0).toUpperCase() + after.slice(1).toLowerCase();
    } else {
        after.toLowerCase();
    }
    // Replace before with after
    str = str.replace(before, after);
    return str;
}

function isUpper(str) {
    re = /^[A-Z]/;
    return (re.test(str));
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
