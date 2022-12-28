# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DashNotice <- function(id=NULL, badge_color=NULL, border_color=NULL, color=NULL, duration=NULL, icon_color=NULL, max_length=NULL, notices=NULL, position=NULL, remove_timing=NULL, sort=NULL, timeout=NULL, value=NULL) {
    
    props <- list(id=id, badge_color=badge_color, border_color=border_color, color=color, duration=duration, icon_color=icon_color, max_length=max_length, notices=notices, position=position, remove_timing=remove_timing, sort=sort, timeout=timeout, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashNotice',
        namespace = 'dash_notice',
        propNames = c('id', 'badge_color', 'border_color', 'color', 'duration', 'icon_color', 'max_length', 'notices', 'position', 'remove_timing', 'sort', 'timeout', 'value'),
        package = 'dashNotice'
        )

    structure(component, class = c('dash_component', 'list'))
}
