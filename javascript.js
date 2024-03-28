const lightbulbSwitch = document.querySelector('#lightbulb-switch');
let isLightbulbOn = false;
const lightbulbImage = document.querySelector('#lightbulb-image');

lightbulbSwitch.addEventListener ('click', function() {
        if (isLightbulbOn) {
            lightbulbImage.src = 'off.png'
            isLightbulbOn = false;
        } else {
            lightbulbImage.src = 'on.png'
            isLightbulbOn = true;
        }
        console.log(isLightbulbOn);
    })

