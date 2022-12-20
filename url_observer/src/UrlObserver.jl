
module UrlObserver
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.0.10"

include("jl/''_urlobserver.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "url_observer",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "url_observer.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "url_observer.min.js.map",
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
