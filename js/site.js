window.addEventListener('DOMContentLoaded', (event) => {
    let hide = element => element.classList.add('hidden');
    let show = element => element.classList.remove('hidden');



    /* SITE NAV */
    document.querySelector('body').classList.add('js');
    let siteNavPanes = document.querySelectorAll('.js-site-nav');
    let menuLink = document.querySelector('#site-nav-link');
    menuLink.addEventListener('click', clickEvent => {
        Array.from(siteNavPanes).forEach(pane => {
            pane.classList.toggle('active');
        });
        return false;
    });



    /* AUDIO */
    async function playAudio(audio, buttons) {
        try {
            await audio.play();
            hide(buttons.querySelector('.play'));
            show(buttons.querySelector('.pause'));
        } catch(err) {
            show(buttons.querySelector('.play'));
        }
    }

    async function pauseAudio(audio, buttons) {
        await audio.pause();
        hide(buttons.querySelector('.pause'));
        show(buttons.querySelector('.play'));
    }

    let activateAudioButton = clickEvent => {
        let audio = clickEvent.target.closest('.episode').querySelector('audio');
        let buttons = clickEvent.target.closest('.js-media-buttons');

        if (audio.paused) {
            playAudio(audio, buttons);
        } else {
            pauseAudio(audio, buttons);
        }
    };

    let blockMediaButtons = document.querySelectorAll(".js-media-buttons");
    let inlinePlayButtons = document.querySelectorAll(".js-episode-inline button");
    Array.from(blockMediaButtons).forEach(button => button.addEventListener('click', activateAudioButton));
    Array.from(inlinePlayButtons).forEach(button => button.addEventListener('click', activateAudioButton));



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