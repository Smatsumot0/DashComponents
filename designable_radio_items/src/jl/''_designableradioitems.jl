# AUTO GENERATED FILE - DO NOT EDIT

export ''_designableradioitems

"""
    ''_designableradioitems(;kwargs...)

A DesignableRadioItems component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `n_clicks` (Real; optional)
- `name` (String; optional)
- `options` (Array; required)
- `readonly` (Bool; optional)
- `value` (String | Real; optional)
"""
function ''_designableradioitems(; kwargs...)
        available_props = Symbol[:id, :className, :n_clicks, :name, :options, :readonly, :value]
        wild_props = Symbol[]
        return Component("''_designableradioitems", "DesignableRadioItems", "designable_radio_items", available_props, wild_props; kwargs...)
end

