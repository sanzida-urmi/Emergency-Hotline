document.getElementById("card-container").addEventListener("click", function (e) {

    if (e.target.className.includes("love")) {
        document.getElementById("love-count").innerText = Number(document.getElementById("love-count").innerText) + 1;
    }
})

// call agin 


document.getElementById("card-container").addEventListener("click", function(e) {
    if (e.target.className.includes("call") || e.target.parentNode.className.includes("call")) {

        let btnContainer = e.target.className.includes("butn") ? e.target : e.target.parentNode

        const name = btnContainer.parentNode.parentNode.children[2].innerText
        const number = btnContainer.parentNode.parentNode.children[3].innerText
        if (parseInt(document.getElementById("coin-number").innerText) > 19) {
            alert("Calling " + name + " " + number)
            document.getElementById("coin-number").innerText = parseInt(document.getElementById("coin-number").innerText) - 20

            const card = btnContainer.parentNode.parentNode
            const banglaName = card.querySelector("h2").innerText;
            const time = new Date().toLocaleTimeString()


            const div = document.createElement("div")
            div.innerHTML = `
        <div class="mt-7 flex flex-col xl:flex-row justify-between items-center">
                <div class="">
                <h3>${banglaName}</h3>
                <p class="text-[#5c5c5c]">${number}</p>
            </div>
            <p class="mt-3 xl:mt-0">${time}</p>
            </div>
            `
            document.getElementById("history").appendChild(div);
        }
        else
            alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে")

    }
})



// copy 
document.getElementById("card-container").addEventListener("click", function (e) {
    if (e.target.className.includes("copy") || e.target.parentNode.className.includes("copy")) {
        
        let copyBtnContainer = e.target.className.includes("copyB") ? e.target : e.target.parentNode
        const copyText = copyBtnContainer.parentNode.parentNode.querySelector("h1").innerText
        navigator.clipboard.writeText(copyText)
        alert("নাম্বার কপি হয়েছে :" + copyText)
        document.getElementById("copyCount").innerText = parseInt(document.getElementById("copyCount").innerText) + 1
    }
})


    // call
    // document.getElementById("card-container").addEventListener("click", function (e) {

    //     const callBtn = e.target.closest(".call")
    //     if (callBtn) {
    //         const card = callBtn.closest(".card")

    //         const number = card.querySelector("h1").innerText;

    //         const name = card.querySelector("p").innerText;

    //         if (parseInt(document.getElementById("coin-number").innerText) > 19) {
    //             alert("Calling " + name + " " + number)

    //             document.getElementById("coin-number").innerText = parseInt(document.getElementById("coin-number").innerText) - 20

    //             const banglaName = card.querySelector("h2").innerText;
    //             const time = new Date().toLocaleTimeString()

    //             const div = document.createElement("div")
    //             div.innerHTML = `
    //         <div class="mt-7 flex flex-col xl:flex-row justify-between items-center">
    //                 <div class="">
    //                 <h3>${banglaName}</h3>
    //                 <p class="text-[#5c5c5c]">${number}</p>
    //             </div>
    //             <p class="mt-3 xl:mt-0">${time}</p>
    //             </div>
    //             `
    //             document.getElementById("history").appendChild(div);

    //         }
    //         else
    //             alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে")


    //     }
    // })



    // clear 
    document.getElementById("clr").addEventListener("click", function (e) {
    document.getElementById("history").innerHTML = ""
})