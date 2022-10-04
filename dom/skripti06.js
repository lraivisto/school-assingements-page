'use strict';
(function () {
    let piirtoalusta;

    const tyylit = {
        suu: { vari: 'lightpink', viiva: 'orange', viivanLeveys: 0 },
        silma: { vari: 'red', viiva: 'black', viivanLeveys: 2 },
        iris: { vari: 'black', viiva: 'black', viivanleveys: 0 },
        nena: { vari: 'orange', viiva: 'orange', viivanLeveys: 5 },
        tausta: { vari: 'darkgreen', viiva: 'orange', viivanLeveys: 5 }
    };

    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        let konteksti = piirtoalusta.getContext('2d');
        let naama = new Naama(tyylit);
        naama.piirra(konteksti);
        konteksti.fillStyle = 'rgba(196, 77, 86)';
        konteksti.font = '40pt Serif';
        konteksti.fillText("häijy naama", 50, 350);

    }
})();