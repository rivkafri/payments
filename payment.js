const PaymentShape = {
    card,
    cash,
    check
}
class User {
    #name;
    #phoneNumber;
    constructor(name, phone) {
        this.#name = name;
        this.#phoneNumber = phone;
    }
    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    setPhoneNumber(phone) {
        this.#phoneNumber = phone;
    }
    getPhoneNumber() {
        return this.#phoneNumber;
    }
}
//
const paymentList = new Array();
//
class Payment {
    static ID = 0;
    #id;
    #date;
    #sum;
    #description;
    #status;
    #user
    constructor(date, sum, description, status, name, phone) {
        this.#id = ++this.ID;
        this.#date = date;
        this.#sum = sum;
        this.#description = description;
        this.#status = status;
        this.#user = new User(name, phone);
    }
    setDate(date) {
        this.#date = date;
    }
    getDate() {
        return this.#date;
    }
    setSum(sum) {
        this.#sum = sum;
    }
    getSum() {
        return this.#sum;
    }
    setDescription(des) {
        this.#description = des;
    }
    getDescription() {
        return this.#description;
    }
    setStatus(status) {
        this.#status = status;
    }
    getStatus() {
        return this.#status;
    }
    // setUser() {
    //     this.#user = status;
    // }
    getUser() {
        return this.#user;
    }

    getId() {
        return this.#id;
    }
    //פונקציות
    //יצירת תשלום
    CreatePayment(p) {
        if (p != undefined) {
            paymentList.push(p);
            console.log("creatPayment1");
        }
    }
    //חיפוש לי id
    searchById(id) {
        const ans = this.paymentList.filter(f => f.getId() === id);
        return ans;
    }
    //החזר
    createRepayment(id) {
        const ans = this.searchById(id);
        const newList = this.paymentList.filter(f => f !== ans);
        paymentList = newList;
        console.log("createRepayment1");
    }
    //עדכון
    update(id, sum) {
        const ans = this.searchById(id);
        ans.setDate = sum;
    }
}

class CardPayment extends Payment {
    #fourNumbers;
    constructor(date, sum, description, status, name, phone, fourNumbers) {
        super(date, sum, description, status, name, phone);
        this.#fourNumbers = fourNumbers;
    }
    setFourNumbers(four) {
        this.#fourNumbers = four;
    }
    getFourNumbers() {
        return this.#fourNumbers;
    }
    //פונקציות
    //יצירת תשלום
    CreatePayment(p) {
        if (p != undefined) {
            paymentList.push(p);
            console.log("CreatePayment2");
        }
    }
    //החזר
    createRepayment(id) {
        const ans = this.searchById(id);
        const newList = this.paymentList.filter(f => f !== ans);
        paymentList = newList;
        console.log("createRepayment2");
    }
}
class SlickPayment extends CardPayment {
    #idPayment;
    constructor(date, sum, description, status, name, phone, fourNumbers, id) {
        super(date, sum, description, status, name, phone, fourNumbers);
        this.#idPayment = id;
    }
    setIdPayment(id) {
        this.#idPayment = id;
    }
    getIdPayment() {
        return this.#idPayment;
    }
}
