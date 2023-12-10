export  function saveOrderApi(orderData){

    return fetch("http://localhost:4000/order", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(orderData)
    })
    .then(resp => {
        if(!resp.ok) throw new Error("Failt to save Order");
        return resp.json()
    })

}