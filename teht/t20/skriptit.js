

function x() {
    class Lemmikit {
        constructor(laji, väri, synt) {
            this.laji = laji;
            this.väri = väri;
            this.synt = synt;
        }
        ika() {
            let date = new Date();
            return date.getFullYear() - this.synt;
        }
    }
    //Koira, ruskea ja 2013
    // Tulosta olion tiedot muodossa: Lemmikkini on koira, se on ruskea ja iältään 7 vuotta.
    let lem = new Lemmikit("koira", "ruskea", 2013);
    document.getElementById("p1").innerHTML =
        `Lemmikkini on ${lem.laji}, se on ${lem.väri} ja iältään ${lem.ika()} vuotta.`;
}