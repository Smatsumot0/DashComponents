# AUTO GENERATED FILE - DO NOT EDIT

export ''_orientationobserver

"""
    ''_orientationobserver(;kwargs...)

An OrientationObserver component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional)
- `before_orientation` (String; optional)
- `orientation` (String; optional)
"""
function ''_orientationobserver(; kwargs...)
        available_props = Symbol[:id, :before_orientation, :orientation]
        wild_props = Symbol[]
        return Component("''_orientationobserver", "OrientationObserver", "orientation_observer", available_props, wild_props; kwargs...)
end

