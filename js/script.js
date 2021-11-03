/* Consegna L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo). */


//una volta creata una struttura base sull'html provando le dimensioni.
    //1.creo tre varianti di gioco Facile,Medio,Difficile
        //1.1 Creo una funzione generale che mi faciliti la creazione dei contenitori
        //1.2 la variante Facile sara un contenitore con griglia a 100
        //1.3 la variante Media sara un  contenitore con griglia a 81
        //1.4 la variante Difficile sara un  contenitore con griglia a 49


    //2.chiedo all'utente a che difficolta vuole giocare
         //2.2 se l'utente sceglie Facile 
            // apparira la griglia a 100
         //2.3 se l'utente sceglie Medio
            // apparira la griglia a 81
         //2.4 se l'utente scleglie Difficile
             // apparira la griglia a 49

    //3.faccio si che i quadrati siano cambiati di colore tramite il click

    const difficoltaScelta = prompt("scegli tra FACILE,MEDIO,DIFFICILE");
    const numeroDiquadrati = document.getElementById("campominato");
   
    let livello;
    if(difficoltaScelta === "facile"){
        livello = 49;
    }else if(difficoltaScelta === "medio"){
        livello = 81;
    }else if (difficoltaScelta === "difficile"){
        livello = 100;
    };

    let RisultatoLiv;
    if(livello === 49){
        RisultatoLiv = "facile"
    }else if(livello === 81){
        RisultatoLiv = "medio"
    }else if(livello ===100){
        RisultatoLiv = "difficile"
    };

for (let i = 0; i < livello; i++){
    let creaQuadrati = generaElemento("div",RisultatoLiv);
    creaQuadrati.addEventListener("click", 
        function(){
            creaQuadrati.classList.add("active");
   });
    numeroDiquadrati.append(creaQuadrati);
    
   }

  
   

    
    //FUNZIONI

   
    function generaElemento(elementoGen,classAD){
        let node = document.createElement(elementoGen);
        node.classList.add(classAD);
        return node
    }

  
    