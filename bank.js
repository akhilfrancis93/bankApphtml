class Bank {

    static getAccountdetails() {


        var accountdetails = {
            1000: { name: "akhil", accno: 1000, password: "testone", balance: 5000 },
            1001: { name: "vipeesh", accno: 1001, password: "testtwo", balance: 4000 },
            1002: { name: "arun", accno: 1002, password: "testthree", balance: 6000 },
            1003: { name: "anu", accno: 1003, password: "testfour", balance: 7000 }
        }
        return accountdetails
    }

    static authenticate(accno, password) {
        let accountdetails = Bank.getAccountdetails()
        if (accno in accountdetails) {
            if (password == accountdetails[accno]["password"]) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else {
            return 0;
        }
    }
    static login() {
        var accno = document.querySelector("#accno").value;
        var password = document.querySelector("#pwd").value;
        var user = Bank.authenticate(accno, password)
        if (user == 1) {
            alert("login success")
            window.location.href="account2.html"
        }
        else if (user == -1) {
            alert("incorrect password");
        }
        else {
            alert("invalid account number");
        }

    }
}
