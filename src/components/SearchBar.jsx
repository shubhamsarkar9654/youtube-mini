import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handelSubmit = (event) => {
        event.preventDefault()

        this.props.handleTermSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <div>
                <form className="search-bar ui segment" onSubmit={this.handelSubmit}>
                    <div className="ui form">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
