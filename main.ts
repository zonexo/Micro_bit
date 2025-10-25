pins.analogWritePin(AnalogPin.P0, 1023)
basic.showIcon(IconNames.Happy)
basic.pause(500)
let moisture = pins.analogReadPin(AnalogPin.P0)
basic.showNumber(moisture)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.pause(500)
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P0)
    basic.pause(300)
    basic.showNumber(moisture)
    if (moisture < 150) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.Heart)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
    }
})
