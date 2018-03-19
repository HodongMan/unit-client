import * as React from 'react';
import { Navbar, Header, IndexDescript, Footer } from './components';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <IndexDescript />
                <Footer />
            </div>
        );
    }
}

export default App;
