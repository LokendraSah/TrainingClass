const myPromise = new Promise(
    (resolve,reject) => {
        console.log("Processing...");
        setTimeout(
            () => reject("sucessfully Resolved"),
        4000,
    )
    });
    myPromise.then(
        (res) => console.log(res),
    ).catch(
        (e) => console.log("Error:",e),
    );
