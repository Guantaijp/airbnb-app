import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
// import Profile from "../images/images.jpeg";
import Profile from "../../images/images.jpeg";
import { message } from "antd";
import { OwnerData, } from "./Admin";


interface ProfilePageProps {
  ownerData: OwnerData[];
  setOwnerData: React.Dispatch<React.SetStateAction<OwnerData[]>>;
}

function ProfilePage(props: ProfilePageProps) {

  const { ownerData, setOwnerData } = props;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);



  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleImageUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const admiData = JSON.parse(sessionStorage.getItem("admin") || "{}");
  const loggedAdmin = ownerData.find((admin: OwnerData) => admin.id === admiData.id);
  const loggedAdminId = loggedAdmin?.id;
  const loggedAdminImage = loggedAdmin?.image;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();

    if (name !== "") {
      formData.append("name", name);
    } else {
      formData.append("name", loggedAdmin?.name || "");
    }

    if (email !== "") {
      formData.append("email", email);
    } else {
      formData.append("email", loggedAdmin?.email || "");
    }

    if (password) {
      formData.append("password", password);
    } else {
      // Check if loggedAdmin exists and has a password
      if (loggedAdmin && loggedAdmin.password) {
        formData.append("password", loggedAdmin.password);
      }
    }

    if (image) {
      formData.append("image", image);
    }

    fetch(`http://127.0.0.1:4000/admins/${loggedAdminId}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        message.success("Profile updated successfully");
        // Update the ownerData state with the new data
        setOwnerData((prevOwnerData) => {
          const updatedOwnerData = prevOwnerData.map((admin: OwnerData) => {
            if (admin.id === loggedAdminId) {
              // Update the matched admin with the new data
              return data;
            }
            return admin;
          });
          return updatedOwnerData;
        });
      })
      .catch((error) => {
        console.log(error);
        message.error("Profile update failed");
      })
      .finally(() => {
        setLoading(false); // Set loading state to false regardless of success or error
      });
  };

  useEffect(() => {
    // Set initial values for input fields
    if (loggedAdmin) {
      setName(loggedAdmin.name);
      setEmail(loggedAdmin.email);
      setPassword(loggedAdmin.password);

      if (typeof loggedAdmin.image === "string") {
        // If the image is a URL, set it directly
        setImage(null);
      } else {
        // If the image is a File object, set it as is
        setImage(loggedAdmin.image);
      }
    }
  }, [loggedAdmin]);

  return (
    <>
      <div className="justify-evenly w-full p-2">
        <p className="text-xl my-4">Profile</p>
        <div className="bg-white rounded-lg shadow-sm">
          <p className="text-xl p-2 text-white w-full bg-[#95873C]">
            My Profile
          </p>
          <div className="flex flex-col mx-8">
            <form className="flex flex-col my-8" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-center border-2 border-[#95873C] m-12">
                <div className="flex items-center p-10 flex-col">
                  <label
                    htmlFor="image"
                    className="text-lg font-bold cursor-pointer"
                  >
                    {loggedAdminImage ? (
                      <img
                        className="rounded-full w-40 h-40 text-center"
                        src={
                          typeof loggedAdminImage === "string"
                            ? loggedAdminImage
                            : URL.createObjectURL(loggedAdminImage)
                        }
                        alt="Profile"
                      />
                    ) : (
                      <img
                        className="rounded-full w-40 h-40 text-center"
                        src={Profile}
                        alt="Profile"
                      />
                    )}
                  </label>
                  <input
                    onChange={handleImageUrlChange}
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col mt-4 flex-grow">
                    <input
                      value={name}
                      type="text"
                      className="border border-gray-300 m-2 rounded-sm p-2"
                      placeholder="Name"
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <input
                      type="text"
                      value={email}
                      className="border border-gray-300 m-2 rounded-sm p-2"
                      placeholder="Email"
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <input
                      type="text"
                      value={password}
                      className="border border-gray-300 m-2 rounded-sm p-2"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#95873C] text-white rounded-sm p-2 my-4"
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update Profile"}
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
