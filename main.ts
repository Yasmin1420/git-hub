basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("Hello!")
        basic.pause(100)
        basic.showLeds(`
            # . . # .
            . # . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
})
