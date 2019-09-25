window.addEventListener('DOMContentLoaded', (event) => {
    /* SITE NAV */
    document.querySelector('body').classList.add('js');
    let menu = document.querySelector('#site-menu');
    let menuLink = document.querySelector('#site-menu-link');
    menuLink.addEventListener('click', clickEvent => {
        console.log('koser')
        menu.classList.toggle('active');
        return false;
    });



    /* INLINE AUDIO */
    let playButtons = document.querySelectorAll(".js-episode-inline button");
    Array.from(playButtons).forEach(playButton => {
        playButton.addEventListener('click', clickEvent => {
            let audio = clickEvent.target.parentElement.querySelector('audio');
            let button = clickEvent.target;

            if (audio.paused) {
                playAudio(audio, button);
            } else {
                pauseAudio(audio, button);
            }
        });
    });

    async function playAudio(audio, button) {
        try {
            await audio.play();
            button.classList.add("playing");
            button.innerText = 'Pause';
        } catch(err) {
            button.classList.remove("playing");
            button.innerText = 'Play';
        }
    }

    async function pauseAudio(audio, button) {
        await audio.pause();
        button.classList.remove("playing");
        button.innerText = 'Play';
    }



    /* TABS */
    let tabs = document.querySelectorAll('.tab');
    Array.from(tabs).forEach(tab => {
        tab.addEventListener('click', clickEvent => {
            clickEvent.preventDefault();
            clickEvent.target.classList.toggle('active');
            clickEvent.target.parentElement.querySelector('.panel').classList.toggle('active');
        });
    });
});