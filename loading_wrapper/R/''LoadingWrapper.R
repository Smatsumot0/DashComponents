# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''LoadingWrapper <- function(children=NULL, id=NULL, className=NULL, ignores=NULL, interval=NULL, is_loading=NULL, is_stop=NULL, targetClassName=NULL) {
    
    props <- list(children=children, id=id, className=className, ignores=ignores, interval=interval, is_loading=is_loading, is_stop=is_stop, targetClassName=targetClassName)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LoadingWrapper',
        namespace = 'loading_wrapper',
        propNames = c('children', 'id', 'className', 'ignores', 'interval', 'is_loading', 'is_stop', 'targetClassName'),
        package = 'loadingWrapper'
        )

    structure(component, class = c('dash_component', 'list'))
}
