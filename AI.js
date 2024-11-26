/* Script For Nav Bar*/
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0%') {
        sidebar.style.right = '-50%';
    } else {
        sidebar.style.right = '0%';
    }
}

const menuIcon = document.getElementById("menuIcon");
        const socialIcons = document.getElementById("socialIcons");
        const tempMessage = document.getElementById("tempMessage");

        menuIcon.addEventListener("click", () => {
            socialIcons.style.display = socialIcons.style.display === "flex" ? "none" : "flex";
            menuIcon.classList.toggle("active");
            if (menuIcon.classList.contains("active")) {
                menuIcon.textContent = "X";
                showTempMessage("Help Menu", 2000);
            } else {
                menuIcon.textContent = "+";
            }
        });

        function showTempMessage(message, duration) {
            tempMessage.textContent = message;
            tempMessage.style.opacity = 1;
            setTimeout(() => {
                tempMessage.style.opacity = 0;
            }, duration);
        }

        function redirectTo(page) {
            const message = document.querySelector('.social-icon[data-message="Contact Us"]');
            showTempMessage(message.dataset.message, 2000);
            setTimeout(() => {
                window.location.href = page;
            }, 2000);
        }

        const socialIconsList = document.querySelectorAll('.social-icon');
        socialIconsList.forEach(icon => {
            icon.addEventListener('click', () => {
                showTempMessage(icon.dataset.message, 2000);
            });
        });
        
        function redirectToWhatsApp() {
    const url = "https://wa.me/03033032032?text=Hi! I just visited your website *https://sindh-etp.github.io/sindh-etp* and would like to get more information.";
    window.location.href = url;
}
