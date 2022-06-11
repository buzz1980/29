let A = 0
basic.forever(function () {
    A = pins.digitalReadPin(DigitalPin.P1)
    if (A > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
