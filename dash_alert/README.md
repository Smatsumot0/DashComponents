# Dash Alert

Dash Alert is a Dash component library.
Alert component for Dash.

### Installation
***

    $ pip install dash_alert


### Properties
***

- id (string)
- message (dash component; require)

    Message to be displayed in the alert.

- title: (dash component)

    Alert Title.

- buttons: (list[dict])

    Button list for alerts.

    - title (string; require)

        Button Title.

    - value (string | int | float; require)

        Value returned when a button is pressed.

    - color (string)

        Button theme color

- value (string | int | float; readonly)

    Value of button pressed.

- is_open (bool)

    Alerts are open or not.

- duration (int)

    Drawing time for opening and closing animation (milliseconds).

- output_target

    For targets in Output. Does not affect anything internally.