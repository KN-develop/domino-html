import MobileDetect from "mobile-detect";

export function onlyVerticalMobile() {
    const md = new MobileDetect(window.navigator.userAgent);
    const mobile = md.mobile();
    const tablet = md.tablet();
    let timer = null;
    const TIMEOUT = 250;
    const alertMessage = document.querySelector('.js-vertical-alert');

    console.log({mobile, tablet});
    const handler = () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            if ((mobile || tablet) && document.documentElement.clientHeight < document.documentElement.clientWidth) {
                alertMessage.style.display = 'flex';
            } else {
                alertMessage.style.display = 'none';
            }
        }, TIMEOUT);
    }

    window.addEventListener('resize', handler);
    handler();
}