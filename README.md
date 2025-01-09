# Express - Crud

### Esercizio

**Milestone 1**

1. Come prima cosa, creiamo un controller per i nostri post, in una cartella `controllers.`
2. All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
3. Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
4. Testiamo su postman/thunder-client se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone

**Milestone 2**

1. Per iniziare, creiamo una cartella `data`  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller.
2. Ora passiamo ad implementare le logiche delle nostre CRUD:
- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (`console.log`) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

### Bonus

- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

### Esercizio Giorno 2

**Milestone 1**

1. Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.
- Impostiamo il verbo e l’endpoint corretti
- Selezioniamo il tab body e scegliamo il formato raw e JSON
- Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post

*Nota: se vogliamo avere delle immagini, inventiamole pure.*
*Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.*

**Milestone 2**

1. Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
2. Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log`

**Milestone 3**

1. Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
2. Testiamolo con postman.

**Milestone 4**

Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.

### Bonus

- Quelli del giorno prima, se non già fatti
- In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

### Esercizio Giorno 3

Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.
- Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

### Bonus
Creare un middleware che in caso di inserimento/modifica contolli la validità dei dati