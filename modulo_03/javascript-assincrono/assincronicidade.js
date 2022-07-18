async function resolvePromise(){
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Esta mensagem aguardou 2 segundos para ser exibida. ");

        }, 2000);
        
    });

    let result;

    try{

        return result = await promise.then((result) => result + "Execução finalizada.");

    }
    catch(error){

        return result = error.message;

    }

}

console.log(await resolvePromise());