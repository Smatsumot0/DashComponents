
module MobileDropdown
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.2.9"

include("jl/''_mobiledropdown.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "mobile_dropdown",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "mobile_dropdown.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "mobile_dropdown.min.js.map",
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
