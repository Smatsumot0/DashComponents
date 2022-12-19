# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''LifeSpanStorage <- function(id=NULL, data=NULL) {
    
    props <- list(id=id, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LifeSpanStorage',
        namespace = 'life_span_storage',
        propNames = c('id', 'data'),
        package = 'lifeSpanStorage'
        )

    structure(component, class = c('dash_component', 'list'))
}
