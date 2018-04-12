import * as React from 'react';

import { Navbar, Header, IndexDescript, Footer, IndexImageList } from '../components';

export default class IndexContainer extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
        this.navbarScrollEvent();
    }

    navbarScrollEvent() {
        
        if (window) {
            window.addEventListener('scroll', (event: Event) => {
                let navbar: Element = document.getElementsByClassName('navbar')[0];
                if (window.scrollY > 50) {
                    this.addClass(navbar, 'shrink-nav');
                } else {
                    this.removeClass(navbar, 'shrink-nav');
                }
            });
        }        
    }

    addClass(element: Element, className: string) {
        // element.className += ' ' + className;
        element.classList.add(className);
    }

    removeClass(element: Element, className: string) {
        // const check: RegExp = new RegExp('(\\s|^)' + className + '(\\s|$)');
        // element.className = element.className.replace(check, ' ').trim();
        element.classList.remove(className);
    }

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <IndexDescript />
                <IndexImageList />
                <Footer />
            </div>
        );
    }
}