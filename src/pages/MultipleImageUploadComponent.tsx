import React, { Component, ChangeEvent } from 'react';
import { message, Spin } from "antd";
import { AirbnbData, OwnerData } from '../App';

interface MultipleImageUploadComponentState {
  files: FileList | null;
  uploading: boolean;
}

interface MultipleImageUploadComponentProps {
  ownerData: OwnerData[];
  airbnbData: AirbnbData[];
}

export default class MultipleImageUploadComponent extends Component<MultipleImageUploadComponentProps, MultipleImageUploadComponentState> {
  constructor(props: MultipleImageUploadComponentProps) {
    super(props);
    this.state = {
      files: null,
      uploading: false,
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      this.setState({ files: e.target.files });
    }
  }

  uploadFiles(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(this.state.files);

    if (this.state.files) {
      this.setState({ uploading: true }); // Set uploading to true

      const formData = new FormData();
      for (let i = 0; i < this.state.files.length; i++) {
        formData.append('images[]', this.state.files[i]);
      }

      const { ownerData, airbnbData } = this.props;
      const admiData = JSON.parse(sessionStorage.getItem('admin') || '{}');
      const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
      const loggedAdminAirbnbs = airbnbData.filter(
        (airbnb: AirbnbData) => airbnb.admin_id === loggedAdmin?.id
      );
      const lastAirbnbId = loggedAdminAirbnbs[loggedAdminAirbnbs.length - 1].id;

      formData.append('airbnb_id', String(lastAirbnbId)); // Add the lastAirbnbId to the form data

      fetch('http://127.0.0.1:4000/airbnb_images', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Response from server:', data);
          message.success('Images added successfully');
          this.setState({ uploading: false }); // Set uploading back to false
        })
        .catch((error) => {
          console.error('Error:', error);
          message.error('Failed to Upload Images');
          this.setState({ uploading: false }); // Set uploading back to false
        });
    }
  }

  render() {
    const { files, uploading } = this.state;
    const { ownerData, airbnbData } = this.props;


    const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
    const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
    const loggedAdminAirbnbs = airbnbData.filter((airbnb: AirbnbData) => airbnb.admin_id === loggedAdmin?.id);
    const lastAirbnbId = loggedAdminAirbnbs.length > 0 ? loggedAdminAirbnbs[loggedAdminAirbnbs.length - 1].id : null;


    // const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
    // const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
    // const loggedAdminAirbnbs = airbnbData.filter((airbnb: AirbnbData) => airbnb.admin_id ===  loggedAdmin?.id);
    // const lastAirbnbId = loggedAdminAirbnbs[loggedAdminAirbnbs.length - 1].id : null ;

    return (
      <div className="justify-evenly mt-2">
        <form>
          <div className="form-group multi-preview flex flex-row">
            {Array.from(files || []).map((file, i) => (
              <img className="w-20 h-20 p-1" src={URL.createObjectURL(file)} alt="Preview" key={i} />
            ))}
          </div>

          <div className="form-group">
            <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
          </div>

          <button type="button" className="bg-[#95873C] text-center text-white p-2 w-1/4 mt-2" onClick={this.uploadFiles}>
            {uploading ? (
              <Spin />
            ) : (
              "Upload"
            )}
          </button>
        </form>
      </div>
    );
  }
}
