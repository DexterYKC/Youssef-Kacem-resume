// const contactForm =  document.getElementById('contact-form')
// const contactMessage = document.getElementById('contact-message')

//     const sendEmail =  (e) => {
//         e.preventDefault()
//         emailjs.sendForm('service_xk154nj','template_ax0oncq','#contact-form','DaJuq-KGo8sz9-za2')
//             .then(() => {
//                 contactMessage.textContent = 'Le message a été envoyé avec success ✅ '

//                 setTimeout(() => {
//                     contactMessage.textContent = ' '
//                 }, 500)
//             })
//     }

//     contactForm.addEventListener('submit', sendEmail)



const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_05qrjop', 'template_ax0oncq', '#contact-form', 'uuYIkHRwILo3_OyWq')
        .then(() => {
            contactMessage.textContent = 'Le message a été envoyé avec succès ✅';

            // Set a delay before clearing the message, e.g., 5000 milliseconds (5 seconds)
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)
            contactForm.reset() // Adjust the time as needed
        })
        .catch((error) => {
            // It's helpful to log or display the error for debugging
            console.error('Failed to send the form: ', error);
            contactMessage.textContent = 'Une erreur s\'est produite lors de l\'envoi du message ❌';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)

            
        });
};

contactForm.addEventListener('submit', sendEmail);


document.getElementById('popupButton').onclick = function() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
};

document.getElementById('closeButton').onclick = function() {
    var popup = document.getElementById('popup');
    popup.classList.add('hidden');
};
