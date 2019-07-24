const container = document.querySelector("#output")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const purchase = document.querySelector("#name").value 
    const location = document.querySelector("#location").value 

    container.innerHTML += `
        <section>
        <p>I can purchase ${purchase} at ${location}.
        </section>
    `
})