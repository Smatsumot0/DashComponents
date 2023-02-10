# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''MobileDropdown <- function(id=NULL, className=NULL, clearable=NULL, notfoundMsg=NULL, options=NULL, value=NULL) {
    
    props <- list(id=id, className=className, clearable=clearable, notfoundMsg=notfoundMsg, options=options, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MobileDropdown',
        namespace = 'mobile_dropdown',
        propNames = c('id', 'className', 'clearable', 'notfoundMsg', 'options', 'value'),
        package = 'mobileDropdown'
        )

    structure(component, class = c('dash_component', 'list'))
}
