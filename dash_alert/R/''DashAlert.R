# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashAlert <- function(id=NULL, buttons=NULL, duration=NULL, is_open=NULL, message=NULL, output_target=NULL, title=NULL, value=NULL) {
    
    props <- list(id=id, buttons=buttons, duration=duration, is_open=is_open, message=message, output_target=output_target, title=title, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAlert',
        namespace = 'dash_alert',
        propNames = c('id', 'buttons', 'duration', 'is_open', 'message', 'output_target', 'title', 'value'),
        package = 'dashAlert'
        )

    structure(component, class = c('dash_component', 'list'))
}
