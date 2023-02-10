# AUTO GENERATED FILE - DO NOT EDIT

export ''_mobiledropdown

"""
    ''_mobiledropdown(;kwargs...)

A MobileDropdown component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `clearable` (Bool; optional)
- `notfoundMsg` (String; optional)
- `options` (Array; optional)
- `value` (String | Real; optional)
"""
function ''_mobiledropdown(; kwargs...)
        available_props = Symbol[:id, :className, :clearable, :notfoundMsg, :options, :value]
        wild_props = Symbol[]
        return Component("''_mobiledropdown", "MobileDropdown", "mobile_dropdown", available_props, wild_props; kwargs...)
end

