# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashCookies <- function(id=NULL, data=NULL, max_age=NULL) {
    
    props <- list(id=id, data=data, max_age=max_age)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashCookies',
        namespace = 'dash_cookies',
        propNames = c('id', 'data', 'max_age'),
        package = 'dashCookies'
        )

    structure(component, class = c('dash_component', 'list'))
}
