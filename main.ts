input.onButtonPressed(Button.A, function () {
    enablePingPong = false
    sonnenbogen.setSunColor(Colors.Yellow)
})
input.onButtonPressed(Button.AB, function () {
    sonnenbogen.setSunColor(Colors.White)
})
input.onButtonPressed(Button.B, function () {
    enablePingPong = true
    sonnenbogen.setSunColor(Colors.Red)
})
let enablePingPong = false
let anzahlLEDs = 197
let breiteSonne = 10
sonnenbogen.init(
DigitalPin.P0,
breiteSonne,
255,
5,
anzahlLEDs
)
sonnenbogen.setSunColor(Colors.Yellow)
let geschwindigkeit = 100
enablePingPong = false
sonnenbogen.moveSunAutomatically(geschwindigkeit)
basic.forever(function () {
    if (enablePingPong) {
        if (sonnenbogen.getPositionHead() > anzahlLEDs) {
            sonnenbogen.changeDirection()
        }
        if (sonnenbogen.getPositionHead() < breiteSonne) {
            sonnenbogen.changeDirection()
        }
    }
})
