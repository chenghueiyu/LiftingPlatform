function doJoystickcontrol () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 100)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 160)
    a = Math.map(0, 520, 1023, 0, 150)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 100 + a)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 160 - a)
}
function doButton_control () {
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P8P9, ModuleWorld_Digital.enButton.Press)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        for (let index = 0; index < 20; index++) {
            sound = input.soundLevel()
            led.plotBarGraph(
            sound,
            255
            )
            basic.pause(50)
        }
        basic.pause(1000)
        score = Math.round(Math.map(sound, 0, 255, 0, 9))
        basic.showNumber(sound)
        score = Math.map(sound, 0, 255, 0, 150)
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 100 + sound)
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 160 - sound)
        basic.pause(1000)
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 100)
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 160)
        basic.pause(1000)
        control.reset()
    }
}
let score = 0
let sound = 0
let a = 0
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 100)
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 160)
basic.forever(function () {
    doJoystickcontrol()
    doButton_control()
})
