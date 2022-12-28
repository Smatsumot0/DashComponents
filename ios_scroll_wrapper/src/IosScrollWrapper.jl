
module IosScrollWrapper
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.0.3"

include("jl/''_iosscrollwrapper.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "ios_scroll_wrapper",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "ios_scroll_wrapper.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "ios_scroll_wrapper.min.js.map",
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
