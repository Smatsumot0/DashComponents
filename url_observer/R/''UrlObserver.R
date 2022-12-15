# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''UrlObserver <- function(id=NULL, pathname=NULL) {
    
    props <- list(id=id, pathname=pathname)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'UrlObserver',
        namespace = 'url_observer',
        propNames = c('id', 'pathname'),
        package = 'urlObserver'
        )

    structure(component, class = c('dash_component', 'list'))
}
