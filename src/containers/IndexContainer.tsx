import * as React from 'react';

import { Navbar, Header, IndexDescript, Footer, IndexLocation, IndexImageList } from '../components';

export default class IndexContainer extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <IndexDescript />
                <IndexImageList />
                <IndexLocation />
                <Footer />
            </div>
        );
    }
}