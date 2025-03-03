
    document.addEventListener("DOMContentLoaded", function () {
        const hourHand = document.querySelector('.hour-hand');
        const minuteHand = document.querySelector('.minute-hand');
        const secondHand = document.querySelector('.second-hand');

        const markers = document.querySelectorAll('.marker');

        markers.forEach((value, key) => {
            value.style.transform = `rotate(${key * 30}deg) translate(0, 135px)`;
        })

        function setClock() {
            const now = new Date();

            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();

            // Calculate degrees
            const secondDegrees = ((seconds / 60) * 360) + 90;
            const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
            const hourDegrees = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;

            // Apply transformations
            secondHand.style.transform = `translate(-100%) rotate(${secondDegrees}deg)`;
            minuteHand.style.transform = `translate(-100%) rotate(${minuteDegrees}deg)`;
            hourHand.style.transform = `translate(-100%) rotate(${hourDegrees}deg)`;
        }

        setInterval(setClock, 1000);
        setClock();
    });


