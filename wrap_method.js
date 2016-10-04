function createEmployee() {
    var that = this;
    var email = "...";

    return {
        pay: pay
    };

    function sendMail(email, amount) {
        //...
    }

    function pay(timesheet, payRate) {
        var amount = dispatchPay(timesheet, payRate);
        sendMail(email, amount);
    }

    function dispatchPay(timesheet, payRate) {
        var amount = createMoney();
        for (var i = 0; i < timesheet.length; i++){
            var time = timesheet[i];
            amount.add(time.getHours() * payRate)
        }
        payDispatcher.pay(that, amount);
        return amount;
    }
}

