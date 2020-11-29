import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';

const AddImage = ({ profile, setProfile }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image?.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      swal('Sweet!', 'Your image has been updated!', 'success');
    } catch (error) {
      swal('Error', 'Oops, something went wrong.');
    }
  };
  return (
    <div>
      <div className="mt-4">
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <label for="image">
            <input
              type="file"
              name="image"
              id="image"
              style={{ display: 'none' }}
              onChange={handleImageSelect}
            />
            <img
              src={
                preview
                  ? preview
                  : currentUser?.avatar
                  ? currentUser.avatar
                  : 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
              }
              alt="profile-picture"
              width={250}
              height={250}
              roundedCircle
            />
          </label>
          <button type="submit" size="sm" className="mt-4">
            Save Image
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddImage;
{
  /* <div className="imageContainer">
<img
src={
preview
? preview
: currentUser?.avatar
? currentUser?.avatar
: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
}
    
  alt="profile-picture"
  width={250}
  height={250}
  roundedCircle
/>
</div>
<form onSubmit={handleSubmit}>
<input type="file" accept="image/*" onChange={handleImageSelect} />
<button className="button bgBlack" type="submit">
  Save Image
</button>
</form> */
}
