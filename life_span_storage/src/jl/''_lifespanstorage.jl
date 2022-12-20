# AUTO GENERATED FILE - DO NOT EDIT

export ''_lifespanstorage

"""
    ''_lifespanstorage(;kwargs...)

A LifeSpanStorage component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; required)
- `data` (String | Real | Array | Dict; optional)
- `limit` (Real; optional)
- `reload` (Bool; optional)
- `storage_type` (optional)
"""
function ''_lifespanstorage(; kwargs...)
        available_props = Symbol[:id, :data, :limit, :reload, :storage_type]
        wild_props = Symbol[]
        return Component("''_lifespanstorage", "LifeSpanStorage", "life_span_storage", available_props, wild_props; kwargs...)
end

