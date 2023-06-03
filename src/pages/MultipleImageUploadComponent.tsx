import React, { Component, ChangeEvent } from 'react';

interface MultipleImageUploadComponentState {
  files: FileList | null;
}

export default class MultipleImageUploadComponent extends Component<{}, MultipleImageUploadComponentState> {
  constructor(props: {}) {// this is the constructor for the class MultipleImageUploadComponent which extends Component from react
    // the constructor is a function that is called when the class is instantiated
    super(props);// this is calling the constructor of the parent class Component
    this.state = {// this is setting the initial state of the class MultipleImageUploadComponent
      files: null,// this is setting the initial state of the variable files to null
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);// this is binding the function uploadMultipleFiles to the class MultipleImageUploadComponent
    this.uploadFiles = this.uploadFiles.bind(this);// this is binding the function uploadFiles to the class MultipleImageUploadComponent
  }

  uploadMultipleFiles(e: ChangeEvent<HTMLInputElement>) {// this is the function uploadMultipleFiles which takes in an event of type ChangeEvent<HTMLInputElement>
    if (e.target.files) {
      this.setState({ files: e.target.files });
    }
  }
  uploadFiles(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(this.state.files);
  
    if (this.state.files) {
      const formData = new FormData();
      for (let i = 0; i < this.state.files.length; i++) {
        formData.append('images[]', this.state.files[i]);
      }
  
      formData.append('airbnb_id', '2'); // Add the airbnb_id to the form data
  
      fetch('http://127.0.0.1:4000/airbnb_images', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from server:', data);
          // Handle the response data as needed
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occurred during the request
        });
    }
  }
  

  render() {
    return (

      <div className="justify-evenly w-full p-2">
        <p className="text-xl my-4">Profile</p>
        <div className="bg-white rounded-lg shadow-sm">
      <form>
        <div className="form-group multi-preview">
          {/* Rendering preview images code */}
        </div>
        <div className="form-group">
          <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
        </div>
        <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>
          Upload
        </button>
      </form>

      </div>
      </div>
    );
  }
}
