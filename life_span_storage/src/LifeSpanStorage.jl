
module LifeSpanStorage
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.1.5"

include("jl/''_lifespanstorage.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "life_span_storage",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "life_span_storage.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "life_span_storage.min.js.map",
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
