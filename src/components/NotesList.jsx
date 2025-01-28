import React from "react";
import NotesItem from "./NotesItem";
import Button from "./Button";
import { IoMdAddCircleOutline } from "react-icons/io";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
      foundNotes: props.activeKeyword
        ? this.props.notes.filter((note) =>
            note.title.toLowerCase().includes(props.activeKeyword.toLowerCase())
          )
        : this.props.notes,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  handleAdd() {
    this.props.navigate("/add");
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundNotes: this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        ),
      };
    });
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <div className="list-item-container">
        <SearchBar
          search={this.onSearch}
          defaultKeyword={this.props.activeKeyword}
        />
        <h1>{this.props.pageName}</h1>
        <div className="list-item">
          {this.state.foundNotes.length > 0 ? (
            this.state.foundNotes.map((note) => (
              <NotesItem key={note.id} notes={note} />
            ))
          ) : (
            <p>Tidak ada catatan.</p>
          )}
        </div>
        <div className="action-button">
          <Button
            onClick={() => this.handleAdd()}
            icon={<IoMdAddCircleOutline size={60} />}
          />
        </div>
      </div>
    );
  }
}

NotesList.propTypes = {
  notes: PropTypes.array,
  activeKeyword: PropTypes.string,
  navigate: PropTypes.func,
  onSearch: PropTypes.func,
  pageName: PropTypes.string,
};

export default NotesList;
