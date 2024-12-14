const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    //promise.then(() => {console.log('Time out!')})
    await promise
    console.log('Time out!');
};

runTimeOut();