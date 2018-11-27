Vue.directive('markup', {
    inserted: (el, searchWord) => {
        const innerText = replaceString(el.innerText, search, searchWord;

    }
})

function relpaceString(source, search, replace) {
            const index = source.indexOf(search);
    if (index < 0) {
        return source;
    }
    return replaceString( source.replace(search, replace))
}
