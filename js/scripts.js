//Services
let services = {
    elem: document.querySelector('section.services'),
    init: function() {
        if (this.elem) {
            const actionsParent = this.elem.querySelector('.service-actions'),
                  actions = actionsParent.querySelectorAll('.service-action'),
                  panelsParent = this.elem.querySelector('.service-panels'),
                  panels = panelsParent.querySelectorAll('.service-panel');

            let autoplay = true;

            if (actions) {

                //create autoplay loop
                function autoplayLoop() {
                    setTimeout(function () {

                        //stop the loop if timing is tight
                        if (!autoplay) {
                            return false;
                        }

                        let activePanel = panelsParent.querySelector('.service-active'),
                            activePanelId = activePanel.dataset.id;

                        //set nextActivePanel + nextActiveAction
                        let nextActive = ++activePanelId;

                        //loop to first target if at last item
                        if (nextActive > panels.length) {
                            nextActive = 1;
                        }

                        for (let i = 0; i < actions.length; i++) {
                            actions[i].classList.remove('service-active')
                            panels[i].classList.remove('service-active')
                        }

                        actionsParent.querySelector('.service-action[data-id="'+nextActive+'"]').classList.add('service-active');
                        panelsParent.querySelector('.service-panel[data-id="'+nextActive+'"]').classList.add('service-active');

                        //prevent the loop from running if a user event has occured
                        if (autoplay) {
                            autoplayLoop();
                        }

                    }, 8000);
                }

                //run autoPlay
                autoplayLoop();

                //loop through actions for click events
                for(let i = 0; i < actions.length; i++) {
                    actions[i].addEventListener('click', function() {

                        autoplay = false;

                        for (let x = 0; x < actions.length; x++) {
                            actions[x].classList.remove('service-active')
                            panels[x].classList.remove('service-active')
                        }

                        console.log(this.dataset.id)
                        actionsParent.querySelector('.service-action[data-id="'+this.dataset.id+'"]').classList.add('service-active');
                        panelsParent.querySelector('.service-panel[data-id="'+this.dataset.id+'"]').classList.add('service-active');

                    })
                }
            }
        }
    },
}.init();

//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function() {
        if (this.elem) {
            this.elem.addEventListener('change', function(e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            });
        }
    }
}.init();

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>');

//Accordion
document.addEventListener('DOMContentLoaded', function() {
    let accordion = document.querySelectorAll('.accordion-title');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            let panel = this.nextElementSibling;

            if (panel.style.maxHeight){
                this.classList.remove('open');
                panel.style.maxHeight = null;
                panel.setAttribute('aria-hidden', true);
                panel.setAttribute('aria-expanded', false);
            } else {
                this.classList.add('open');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.setAttribute('aria-hidden', false);
                panel.setAttribute('aria-expanded', true);
            }
        });
    }
});

//Flickity Carousel
$('.carousel .group').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: true,
    autoPlay: 8000,
});

//Universal Tables
$('table').wrap("<div class='universal-table'></div>");
