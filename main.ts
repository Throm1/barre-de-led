let strip = neopixel.create(DigitalPin.P0, 14, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.pause(1000)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
    strip.show()
})
