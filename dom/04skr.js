'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    const tyylit = {
        suu: { vari: 'red', viiva: 'orange', viivanLeveys: 5 },
        silma: { vari: 'white', viiva: 'black', viivanLeveys: 2 },
        nena: { vari: 'blue', viiva: 'orange', viivanLeveys: 5 },
    };
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        //x y leveys korkeus vari
        piirraSuorakaide('suu', 150, 250, 100, 25, false);
        piirraSuorakaide('nena', 190, 200, 20, 20, false);
        piirraSuorakaide('silma', 155, 155, 25, false);
        piirraSuorakaide('silma', 255, 155, 25, false);
        konteksti.font = '40pt Serif';
        konteksti.fillStyle = 'green';
        konteksti.fillText('Naama', 150, 40);
        konteksti.font = '80pt Serif';
        konteksti.strokeStyle = 'green';
        konteksti.strokeText('X', 300, 250);
    }
    function piirra(x, y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'blue';
        konteksti.lineWidth = 3;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
    function piirraSuorakaide(osa, x, y, lev, kork, onReuna = true) {
        konteksti.save();
        konteksti.fillStyle = tyylit[osa].vari;
        konteksti.fillRect(x, y, lev, kork);
        if (onReuna) {
            konteksti.lineWidth = tyylit[osa].viivanLeveys;
            konteksti.strokeStyle = tyylit[osa].viiva;
            konteksti.strokeRect(x, y, lev, kork);
        }
        konteksti.restore();
    }
})();