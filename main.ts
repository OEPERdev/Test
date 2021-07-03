input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
})
edubitSoundBit.onEvent(SoundSensorCompareType.MoreThan, 300, function () {
    basic.showString("The process has been interrupted .Please try again.")
    music.playMelody("C5 B A G F E D C ", 1575)
    edubitRgbBit.showColor(0x000000)
    basic.pause(1000)
    control.reset()
})
let Start = 0
edubitRgbBit.clear()
edubitTrafficLightBit.toggleLed(LedColor.Yellow)
let LoadSuccess = randint(0, 1)
for (let index = 0; index < randint(1, 5); index++) {
    basic.showString("Loading...")
    music.playMelody("C - C - C - E - ", 705)
}
if (LoadSuccess == 1) {
    edubitTrafficLightBit.toggleLed(LedColor.Green)
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    Start = 1
    basic.showString("Success")
}
if (LoadSuccess == 0) {
    edubitTrafficLightBit.toggleLed(LedColor.Red)
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    Start = 0
    basic.showString("Loading failed, please try again.")
}
if (Start == 1) {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    edubitRgbBit.showRainbow()
    basic.pause(200)
    basic.showString("Hi there.")
    music.playMelody("C5 B A G A B C5 - ", 120)
}
basic.forever(function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 100)
    if (input.isGesture(Gesture.Shake)) {
        basic.showString("Loading canceled.")
        edubitRgbBit.setPixelColor(0, 0xff0000)
        edubitRgbBit.setPixelColor(1, 0xff8000)
        edubitRgbBit.setPixelColor(2, 0xffff00)
        edubitRgbBit.setPixelColor(3, 0x000000)
        basic.pause(100)
        edubitRgbBit.clear()
    }
})
