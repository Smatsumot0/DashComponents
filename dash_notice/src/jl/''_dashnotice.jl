# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashnotice

"""
    ''_dashnotice(;kwargs...)

A DashNotice component.

Keyword arguments:
- `id` (String; required)
- `badge_color` (String; optional)
- `border_color` (String; optional)
- `color` (String; optional)
- `duration` (Real; optional)
- `icon_color` (String; optional)
- `max_length` (Real; optional)
- `notices` (Array of Dicts; optional)
- `position` (String; optional)
- `remove_timing` (String; optional)
- `sort` (String; optional)
- `timeout` (String; optional)
- `value` (String | Real; optional)
"""
function ''_dashnotice(; kwargs...)
        available_props = Symbol[:id, :badge_color, :border_color, :color, :duration, :icon_color, :max_length, :notices, :position, :remove_timing, :sort, :timeout, :value]
        wild_props = Symbol[]
        return Component("''_dashnotice", "DashNotice", "dash_notice", available_props, wild_props; kwargs...)
end

