# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''TouchableComponent <- function(children=NULL, id=NULL, className=NULL, n_clicks=NULL) {
    
    props <- list(children=children, id=id, className=className, n_clicks=n_clicks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TouchableComponent',
        namespace = 'touchable_component',
        propNames = c('children', 'id', 'className', 'n_clicks'),
        package = 'touchableComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
