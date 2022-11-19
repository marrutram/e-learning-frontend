import React, { Component, createContext } from "react";

export const globalC = createContext();

export class Gprov extends Component {
    state = {
        authLogin: null,
        authLoginerror: null
    };
    componentDidMount() {
        var localData = JSON.parse(localStorage.getItem("loginDetail"));
        if (localData) {
            this.setState({
                authLogin: localData
            });
        }
    }

    loginData =  () => {
        localStorage.setItem("loginDetail", JSON.stringify({user: "Yusmery"}));
    };

    logout =  () => {
        localStorage.setItem("loginDetail", null);
    };

    render() {
        // console.log(localStorage.getItem("loginDetail"));
        return (
            <globalC.Provider
                value={{
                    ...this.state,
                    loginData: this.loginData
                }}
            >
                {this.props.children}
            </globalC.Provider>
        );
    }
}
