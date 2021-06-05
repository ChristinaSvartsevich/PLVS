
let allInputs = document.getElementsByTagName("input");


let inpName = allInputs[0];
let inpMail = allInputs[1];
let inpPassword = allInputs[2];
let inpConfirmPass = allInputs[3];
let chekInp = allInputs[4];
console.log(allInputs)



let btn = document.getElementsByTagName("button")[0];
let btnShow = document.getElementsByTagName("button")[1];
let arr = [];

btn.addEventListener("click", () => {

    if (chekInp.checked) {
        if (inpName.value && inpMail.value && inpPassword.value && inpConfirmPass.value ) {
            if (inpPassword.value === inpConfirmPass.value) {
                let user = new User(inpName.value, inpMail.value, inpPassword.value);
                user.showUser();
                user.render();
            } else alert("Check your password")
    
            
        } else alert("заполните поля")

        
    }


})

btnShow.addEventListener("click", () => {
    arr.forEach((i) => {
        i.render()
    });
})


class User {
    constructor(name, email, password) {
        this.counter = ++i
        this.id = `id${this.counter}`;
        
        this.name = name;
        this.email = email;
        this.password = password;
        this.interface = `
        <p> User ${this.counter} </p>
        <p> Username is ${this.name} </p>
        <p> Email is ${this.email} </p>
        <p> Password is ${this.password} </p>
    `;
    }

    showUser() {
        console.log(this);
    }

    render() {

        let cont = document.querySelector(".showUser");
        let use = document.createElement("div");
        use.id = this.id;
        use.classList.add("User");
        use.innerHTML = this.interface;
        cont.appendChild(use);




    }

    rerender(){
        this.interface = `
        <p> User ${this.counter} </p>
        <p> Username is ${this.name} </p>
        <p> Email is ${this.email} </p>
        <p> Password is ${this.password} </p>
    `
        let elem = document.getElementById(this.id)
        elem.innerHTML = "";
        elem.innerHTML = this.interface;

    }


}



let i = 0;
