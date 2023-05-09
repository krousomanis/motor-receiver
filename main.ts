radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 30)
        basic.showNumber(1)
    } else if (receivedNumber == 2) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 30)
        basic.showNumber(2)
    } else if (receivedNumber == 3) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        basic.showNumber(3)
    }
})
radio.setGroup(1)
