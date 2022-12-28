# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashrotate

"""
    ''_dashrotate(;kwargs...)

A DashRotate component.

Keyword arguments:
- `id` (String; optional)
- `delay` (Real; optional)
- `message` (a list of or a singular dash component, string or number; optional)
- `orientation` (String; optional)
- `reload` (Bool; optional)
- `timing` (String; optional)
"""
function ''_dashrotate(; kwargs...)
        available_props = Symbol[:id, :delay, :message, :orientation, :reload, :timing]
        wild_props = Symbol[]
        return Component("''_dashrotate", "DashRotate", "dash_rotate", available_props, wild_props; kwargs...)
end

