'use strict';
const form = document.querySelector('#booking');
if (form) {
  const departure = form.elements.depart;
  const returning = form.elements.retour;
  const agency = form.elements.agence;
  const vehicle = form.elements.vehicule;
  const today = new Date();
  const localDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  departure.min = localDate;
  returning.min = localDate;
  function validate() {
    returning.min = departure.value || localDate;
    returning.setCustomValidity(returning.value && departure.value && returning.value <= departure.value ? 'Le retour doit être après le départ.' : '');
    vehicle.setCustomValidity(vehicle.selectedIndex === 1 && agency.value !== 'Agen' ? 'Le fourgon est disponible au départ d’Agen uniquement.' : '');
  }
  form.addEventListener('input', validate);
  form.addEventListener('change', validate);
  form.addEventListener('submit', event => {
    event.preventDefault();
    validate();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `Bonjour Seavan,\n\nJe souhaite un devis pour mon séjour.\nAgence : ${data.get('agence')}\nVéhicule : ${data.get('vehicule')}\nDépart : ${data.get('depart')}\nRetour : ${data.get('retour')}\nPrénom : ${data.get('prenom')}\nE-mail : ${data.get('email')}\n\n${data.get('message')}`;
    const mail = document.createElement('a');
    mail.href = `mailto:contact@sea-van.com?subject=${encodeURIComponent('Demande de devis road trip')}&body=${encodeURIComponent(body)}`;
    mail.textContent = 'Ouvrir mon application e-mail pour envoyer la demande ↗';
    const status = document.querySelector('#status');
    status.replaceChildren('Votre demande est préparée. Vérifiez puis envoyez l’e-mail dans votre messagerie. ', mail);
  });
}
