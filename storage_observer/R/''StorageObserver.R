# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''StorageObserver <- function(id=NULL, clear=NULL, interval=NULL, limit=NULL) {
    
    props <- list(id=id, clear=clear, interval=interval, limit=limit)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'StorageObserver',
        namespace = 'storage_observer',
        propNames = c('id', 'clear', 'interval', 'limit'),
        package = 'storageObserver'
        )

    structure(component, class = c('dash_component', 'list'))
}
