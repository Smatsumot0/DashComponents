# Loading Wrapper

Loading Wrapper is a Dash component library.
Component to get whether Loading of Dash Core Components is Loading or not.

### Installation
***

    $ pip install loading_wrapper


### Properties
***

- children (dash component)
- id (string)
- className (string)
- targetClassName (string; require)

    Class of target to be monitored for appearance or non-appearance.

- interval (number; default: 1000)

    Monitoring interval.

- ignores (list[string])

    List of data-loading_ignore attributes of the Loading component to be excluded from monitoring.

- is_loading (bool)

    loading or not loading.

- is_stop (bool; default: false)

    Or discontinue surveillance.