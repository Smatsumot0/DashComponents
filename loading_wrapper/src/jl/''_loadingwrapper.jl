# AUTO GENERATED FILE - DO NOT EDIT

export ''_loadingwrapper

"""
    ''_loadingwrapper(;kwargs...)
    ''_loadingwrapper(children::Any;kwargs...)
    ''_loadingwrapper(children_maker::Function;kwargs...)


A LoadingWrapper component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `ignores` (Array of Strings; optional)
- `interval` (Real; optional)
- `is_loading` (Bool; optional)
- `is_stop` (Bool; optional)
- `targetClassName` (String; required)
"""
function ''_loadingwrapper(; kwargs...)
        available_props = Symbol[:children, :id, :className, :ignores, :interval, :is_loading, :is_stop, :targetClassName]
        wild_props = Symbol[]
        return Component("''_loadingwrapper", "LoadingWrapper", "loading_wrapper", available_props, wild_props; kwargs...)
end

''_loadingwrapper(children::Any; kwargs...) = ''_loadingwrapper(;kwargs..., children = children)
''_loadingwrapper(children_maker::Function; kwargs...) = ''_loadingwrapper(children_maker(); kwargs...)

