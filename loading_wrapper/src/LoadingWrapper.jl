
module LoadingWrapper
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.2.18"

include("jl/''_loadingwrapper.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "loading_wrapper",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "loading_wrapper.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "loading_wrapper.min.js.map",
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
