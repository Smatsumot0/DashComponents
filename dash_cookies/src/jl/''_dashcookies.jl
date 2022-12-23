# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashcookies

"""
    ''_dashcookies(;kwargs...)

A DashCookies component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; required)
- `data` (String | Real | Array | Dict; optional)
- `max_age` (Real; optional)
"""
function ''_dashcookies(; kwargs...)
        available_props = Symbol[:id, :data, :max_age]
        wild_props = Symbol[]
        return Component("''_dashcookies", "DashCookies", "dash_cookies", available_props, wild_props; kwargs...)
end

