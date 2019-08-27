import React, { Component } from 'react';
import TodoApp from './TodoApp';
import Button from './Button/Button';
import SunIcon from '../images/sun.svg';
import MoonIcon from '../images/moon.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkTheme: JSON.parse(localStorage.getItem('todoIsDarkTheme')) || false,
        };
        
        this.onChangeTheme = this.onChangeTheme.bind(this);
    }
    
    onChangeTheme() {
        const newTheme = !this.state.isDarkTheme;
        this.setState({ isDarkTheme: newTheme });
        localStorage.setItem('todoIsDarkTheme', JSON.stringify(newTheme));
    }

    render() {
        const { isDarkTheme } = this.state;
        const pageClassName = isDarkTheme ? 'wrapper theme-dark' : 'wrapper theme-light';
        const icon = isDarkTheme
            ? <SunIcon className="button__icon" />
            : <MoonIcon className="button__icon" />
        
        return (
            <div className={pageClassName}>
                <div className="page">
                    <header className="page-header">                        
                        <h1>TODOlist</h1>
                        <Button
                            type="button"
                            className="button_icon button_secondary"
                            title="Change theme"
                            onClick={this.onChangeTheme}
                        >
                            {icon}
                        </Button>
                    </header>
                    <TodoApp />
                </div>
            </div>
        );
    }
}

export default App;