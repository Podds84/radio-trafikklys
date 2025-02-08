radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        radio.sendNumber(5)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedNumber == 2) {
        radio.sendNumber(6)
    }
})
radio.setGroup(22)
