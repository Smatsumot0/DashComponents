
module DesignableRadioItems
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.1.15"

include("jl/''_designableradioitems.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "designable_radio_items",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "designable_radio_items.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "designable_radio_items.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
