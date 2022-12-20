# AUTO GENERATED FILE - DO NOT EDIT

export ''_iosscrollwrapper

"""
    ''_iosscrollwrapper(;kwargs...)
    ''_iosscrollwrapper(children::Any;kwargs...)
    ''_iosscrollwrapper(children_maker::Function;kwargs...)


An IosScrollWrapper component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
"""
function ''_iosscrollwrapper(; kwargs...)
        available_props = Symbol[:children, :id]
        wild_props = Symbol[]
        return Component("''_iosscrollwrapper", "IosScrollWrapper", "ios_scroll_wrapper", available_props, wild_props; kwargs...)
end

''_iosscrollwrapper(children::Any; kwargs...) = ''_iosscrollwrapper(;kwargs..., children = children)
''_iosscrollwrapper(children_maker::Function; kwargs...) = ''_iosscrollwrapper(children_maker(); kwargs...)

