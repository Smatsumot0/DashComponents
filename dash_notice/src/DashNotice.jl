
module DashNotice
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.1.1"

include("jl/''_dashnotice.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_notice",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_notice.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_notice.min.js.map",
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
