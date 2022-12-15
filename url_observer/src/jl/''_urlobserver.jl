# AUTO GENERATED FILE - DO NOT EDIT

export ''_urlobserver

"""
    ''_urlobserver(;kwargs...)

An UrlObserver component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional)
- `pathname` (String; optional)
"""
function ''_urlobserver(; kwargs...)
        available_props = Symbol[:id, :pathname]
        wild_props = Symbol[]
        return Component("''_urlobserver", "UrlObserver", "url_observer", available_props, wild_props; kwargs...)
end

