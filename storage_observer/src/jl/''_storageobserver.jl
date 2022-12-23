# AUTO GENERATED FILE - DO NOT EDIT

export ''_storageobserver

"""
    ''_storageobserver(;kwargs...)

A StorageObserver component.

Keyword arguments:
- `id` (String; optional)
- `clear` (Bool; optional)
- `interval` (Real; optional)
- `limit` (Real; required)
"""
function ''_storageobserver(; kwargs...)
        available_props = Symbol[:id, :clear, :interval, :limit]
        wild_props = Symbol[]
        return Component("''_storageobserver", "StorageObserver", "storage_observer", available_props, wild_props; kwargs...)
end

