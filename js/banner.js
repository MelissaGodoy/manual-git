setInterval(escreveComandos,500);

comandos  = "git pull;git commit;git status;git add;git checkout;git fetch;git branch; git rm;git clone;git";
comandosId  = "comando1;comando2;comando3;comando4;comando5;comando6;comando7;comando8;comando9;comando10";
comandos = comandos.split(";",10);
comandosId = comandosId.split(";",10);
i=0;

function escreveComandos(){

    var p = document.getElementById(String(comandosId[i]));

    if(i<10){

        var texto = document.createTextNode(comandos[i]);
        p.appendChild(texto);
    }

    i++;
}