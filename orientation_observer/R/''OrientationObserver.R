# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''OrientationObserver <- function(id=NULL, before_orientation=NULL, orientation=NULL) {
    
    props <- list(id=id, before_orientation=before_orientation, orientation=orientation)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'OrientationObserver',
        namespace = 'orientation_observer',
        propNames = c('id', 'before_orientation', 'orientation'),
        package = 'orientationObserver'
        )

    structure(component, class = c('dash_component', 'list'))
}
