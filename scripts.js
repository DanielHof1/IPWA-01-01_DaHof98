const { createApp } = Vue;


createApp({
    data() {
        return {
            istRegistriert: false,

            uebergabeArt: 'abholung',
            adresse: {
                name: '',
                vorname: '',
                strasse: '',
                plz: '',
                stadt: ''
            },
            spende: {
                kleidungsart: '',
                krisengebiet: ''
            }
        }
    },

    methods: {
        registrieren() {
            if (this.spende.kleidungsart === '' || this.spende.krisengebiet === '') {
                alert("Bitte wähle eine Kleidungsart und ein Krisengebiet aus!");
                return;
            }

            if (this.uebergabeArt === 'abholung') {
                if (this.adresse.name === '' || this.adresse.vorname === '' || this.adresse.strasse === '' || this.adresse.plz === '' || this.adresse.stadt === '') {
                    alert("Bitte gib deine vollständige Adresse an!");
                    return;
                }
                if (!this.adresse.plz.startsWith('64')) {
                    alert("Wir holen leider nur im Bereich 64xxx ab. Bitte bringen Sie die Spende vorbei");
                    return;
                }
            }

            const jetzt = new Date();
            this.registrierungsDatum = jetzt.toLocaleString('de-DE');

            this.istRegistriert = true;
        }

    }

}).mount('#app');