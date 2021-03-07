// function resizeApplication() {
//      // ="50%";
//
//     // let btn = document.getElementById('lf1').innerText
//     let btn = document.getElementsByClassName('btn3')
//     console.log(btn)
//
//     let stateApplication = document.querySelector('.application')
//
//     console.log(stateApplication)
//
//     if (btn == "LF 448") {
//         stateApplication.style.width = "448px"
//         console.log(stateApplication.clientWidth)
//     }
//
//     if (btn == "LF 1200") {
//         stateApplication.style.width = "448px"
//         console.log(stateApplication.clientWidth)
//     }
//
//
//     // if (state.clientWidth) {
//     //     state.style.width = "448px"
//     // } else {
//     //     state = "1200px"
//     // }
//
//     // state = document.getElementsByClassName('btn3').namedItem()
//     //
//     // console.log(state)
// }


// let state = document.getElementsByClassName('btn3').item(0)
// console.log(state)
//
// state = state.clientWidth
// console.log(state)

// let btn = document.getElementById('btn3')
// console.log(btn)

// Array.from(btn).forEach((el) => {
//     console.log(el.textContent)
// })


function resizeApplication() {
    // document.getElementById('btn3').onclick = function () {
    //     console.log("d")
    // }
}

// let fl448 = document.getElementById('fl448')
// console.log(fl448)
//
// let fl1200 = document.getElementById('fl1200')
// console.log(fl1200)

let btn = document.getElementsByClassName('btn3')

//     let stateApplication = document.querySelector('.application')
//
//     console.log(stateApplication)
//
//     if (btn == "LF 448") {
//         stateApplication.style.width = "448px"
//         console.log(stateApplication.clientWidth)
//     }
//
//     if (btn == "LF 1200") {
//         stateApplication.style.width = "448px"
//         console.log(stateApplication.clientWidth)
//     }


let stateApplication = document.querySelector('.application')
stateApplication.style.width = "358px"
console.log(stateApplication.clientWidth.valueOf())

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        // btnClick = btn[i]
        // console.log(btnClick)

        console.log(this.innerHTML)
        console.log(stateApplication)

        if (this.innerHTML == "LF") {
            // btn.style.width= "448px"
            console.log("--> Click")
            // stateApplication.style.width = "600px"
            console.log(stateApplication.clientWidth.valueOf())

        }

        if (this.innerHTML == "358") {
            // btn.style.width= "448px"
            console.log("--> Click")
            stateApplication.style.width = "358px"
            console.log(stateApplication.clientWidth.valueOf())

            var stack = document.querySelector('.stack')
            // console.log(stack);
            stack.style.width = "30%"
            
            var sidebar = document.querySelector('.sidebar')
            console.log(sidebar.clientWidth);
            sidebar.style.minWidth = "257px"      
        }

        if (this.innerHTML == "1100") {
            // btn.style.width= "448px"
            console.log("--> Click")
            stateApplication.style.width = "1100px"
            console.log(stateApplication.clientWidth.valueOf())

        }
    }
 }

console.log(btn)

console.log("===>");

window.onload = function() {
    var stack = document.querySelector('.stack')
    stack.style.width = "30%"
    var sidebar = document.querySelector('.sidebar')
    console.log(sidebar.clientWidth);
    sidebar.style.minWidth = "257px"    
}


