# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''IosScrollWrapper <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'IosScrollWrapper',
        namespace = 'ios_scroll_wrapper',
        propNames = c('children', 'id'),
        package = 'iosScrollWrapper'
        )

    structure(component, class = c('dash_component', 'list'))
}
