# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DesignableRadioItems <- function(id=NULL, className=NULL, n_clicks=NULL, name=NULL, options=NULL, readonly=NULL, value=NULL) {
    
    props <- list(id=id, className=className, n_clicks=n_clicks, name=name, options=options, readonly=readonly, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DesignableRadioItems',
        namespace = 'designable_radio_items',
        propNames = c('id', 'className', 'n_clicks', 'name', 'options', 'readonly', 'value'),
        package = 'designableRadioItems'
        )

    structure(component, class = c('dash_component', 'list'))
}
