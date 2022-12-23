# AUTO GENERATED FILE - DO NOT EDIT

export ''_dashalert

"""
    ''_dashalert(;kwargs...)

A DashAlert component.

Keyword arguments:
- `id` (String; optional)
- `buttons` (Array of Dicts; required)
- `duration` (Real; optional)
- `is_open` (Bool; optional)
- `message` (a list of or a singular dash component, string or number; required)
- `output_target` (Bool | Real | String | Dict | Array; optional)
- `title` (a list of or a singular dash component, string or number; optional)
- `value` (String | Real; optional)
"""
function ''_dashalert(; kwargs...)
        available_props = Symbol[:id, :buttons, :duration, :is_open, :message, :output_target, :title, :value]
        wild_props = Symbol[]
        return Component("''_dashalert", "DashAlert", "dash_alert", available_props, wild_props; kwargs...)
end

