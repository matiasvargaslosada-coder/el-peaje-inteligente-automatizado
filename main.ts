input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Hello!")
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
