
module TouchableComponent
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "2.1.16"

include("jl/''_touchablecomponent.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "touchable_component",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "touchable_component.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "touchable_component.min.js.map",
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
