import * as React from 'react';
import { Navbar, Header, IndexDescript, Footer, IndexLocation } from './components';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <IndexDescript />
                <IndexLocation />
                <Footer />
            </div>
        );
    }
}

export default App;
