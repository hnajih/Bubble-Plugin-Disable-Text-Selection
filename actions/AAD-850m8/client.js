function(properties, context) {
    CSS.supports("( -moz-user-select: none )") ? document.body.style.MozUserSelect="none" : document.body.style.userSelect="none"
}