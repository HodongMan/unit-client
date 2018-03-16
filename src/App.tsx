import * as React from 'react';
import { Navbar, Header } from './components';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
            </div>
        );
    }
}

export default App;
