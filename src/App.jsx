import React from "react";
// import "isomorphic-fetch";
// import "es6-promise"; // Failed to compile error: ./src/App.jsx Module not found: Can't resolve 'es6-promise' in 'C:\Users\johnw\Documents\Source\reactjs-reacting-to-apis\src'
import FilmCards from "./FilmCards";
import PersonCards from "./PersonCards";
import LogoPlaceholder from "./LogoPlaceholder";

class App extends React.Component {
    state = {
        filmsLoaded: false,
        peopleLoaded: false,
        filmsData: [],
        peopleData: []
    };
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            // .then(res => console.log(res))
            .then(res => res.json())
            .then(data => {
                this.setState({ filmsData: data });
                // console.log(this.state.filmsData);
            });
        fetch("https://ghibliapi.herokuapp.com/people")
            // .then(res => console.log(res))
            .then(res => res.json())
            .then(data => {
                this.setState({ peopleData: data });
            });
    }
    handleLoadFilmsClick = () => this.setState({ filmsLoaded: true, peopleLoaded: false });
    handleLoadPeopleClick = () => this.setState({ filmsLoaded: false, peopleLoaded: true });
    render() {
        if (this.state.filmsLoaded && !this.state.peopleLoaded) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <button onClick={this.handleLoadFilmsClick} className="btn btn-primary m-2">Load Films</button>
                            <button onClick={this.handleLoadPeopleClick} className="btn btn-primary m-2">Load People</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <main className="py-3 d-flex justify-content-between align-items-center">
                                <span className="font-weight-bold col-2 p-2 text-right">Film Title</span>
                                <span className="font-weight-bold col-6 p-2 text-left">Film Description</span>
                            </main>
                            <ul>
                                {/* Testing text */}
                                {this.state.filmsData?.map((film, i) => (
                                    <FilmCards key={`film-${i}`} filmsArray={film} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else if (!this.state.filmsLoaded && this.state.peopleLoaded) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <button onClick={this.handleLoadFilmsClick} className="btn btn-primary m-2">Load Films</button>
                            <button onClick={this.handleLoadPeopleClick} className="btn btn-primary m-2">Load People</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <main className="py-3 ml-3 d-flex justify-content-start align-items-center">
                                <span className="font-weight-bold col-3 p-2 ml-4">Name</span>
                                <span className="font-weight-bold col-3 p-2 ml-4">Age</span>
                                <span className="font-weight-bold col-3 p-2 ml-4">Gender</span>
                            </main>
                            <ul>
                                {this.state.peopleData?.map((person, i) => (
                                    <PersonCards key={`person-${i}`} peopleArray={person} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <button onClick={this.handleLoadFilmsClick} className="btn btn-primary m-2">Load Films</button>
                            <button onClick={this.handleLoadPeopleClick} className="btn btn-primary m-2">Load People</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 m-2">
                            <LogoPlaceholder />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default App;