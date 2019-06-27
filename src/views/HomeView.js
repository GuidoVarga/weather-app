import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../App.scss';

class Home extends React.Component {
    
    render() {
        
        return (
            <div className="root-view">
                <Header/>
                <div className="root-container">
                    
                    <label>HOLA</label>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Home;