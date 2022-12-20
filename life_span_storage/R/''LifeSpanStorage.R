# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''LifeSpanStorage <- function(id=NULL, data=NULL, limit=NULL, reload=NULL, storage_type=NULL) {
    
    props <- list(id=id, data=data, limit=limit, reload=reload, storage_type=storage_type)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LifeSpanStorage',
        namespace = 'life_span_storage',
        propNames = c('id', 'data', 'limit', 'reload', 'storage_type'),
        package = 'lifeSpanStorage'
        )

    structure(component, class = c('dash_component', 'list'))
}
