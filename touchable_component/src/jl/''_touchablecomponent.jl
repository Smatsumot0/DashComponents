# AUTO GENERATED FILE - DO NOT EDIT

export ''_touchablecomponent

"""
    ''_touchablecomponent(;kwargs...)
    ''_touchablecomponent(children::Any;kwargs...)
    ''_touchablecomponent(children_maker::Function;kwargs...)


A TouchableComponent component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `n_clicks` (Real; optional)
"""
function ''_touchablecomponent(; kwargs...)
        available_props = Symbol[:children, :id, :className, :n_clicks]
        wild_props = Symbol[]
        return Component("''_touchablecomponent", "TouchableComponent", "touchable_component", available_props, wild_props; kwargs...)
end

''_touchablecomponent(children::Any; kwargs...) = ''_touchablecomponent(;kwargs..., children = children)
''_touchablecomponent(children_maker::Function; kwargs...) = ''_touchablecomponent(children_maker(); kwargs...)

