radio.onReceivedString(function (receivedString) {
    niveauSignal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (niveauSignal < -83) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 1023, 1023, 91, 103, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.stopMelody(MelodyStopOptions.All)
    } else if (niveauSignal < -63) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 1801, 1801, 170, 183, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.stopMelody(MelodyStopOptions.All)
    } else if (niveauSignal < -53) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 2693, 2785, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.stopMelody(MelodyStopOptions.All)
    } else if (niveauSignal < -43) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 3540, 3631, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.stopMelody(MelodyStopOptions.All)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
})
let niveauSignal = 0
basic.showIcon(IconNames.Pitchfork)
radio.setGroup(1)
