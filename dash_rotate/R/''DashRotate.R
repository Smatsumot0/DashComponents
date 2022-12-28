# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashRotate <- function(id=NULL, delay=NULL, message=NULL, orientation=NULL, reload=NULL, timing=NULL) {
    
    props <- list(id=id, delay=delay, message=message, orientation=orientation, reload=reload, timing=timing)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashRotate',
        namespace = 'dash_rotate',
        propNames = c('id', 'delay', 'message', 'orientation', 'reload', 'timing'),
        package = 'dashRotate'
        )

    structure(component, class = c('dash_component', 'list'))
}
