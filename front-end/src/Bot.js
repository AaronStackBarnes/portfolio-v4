import React from "react";

const Bot = bot => {
  let { name, photos, bio, birth_date, pos_info } = bot.fullProfile;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Bio: {bio}</p>
      <p>Birth Date: {birth_date}</p>
      <p>Location: {`${pos_info.city.name} ${pos_info.state.name}`}</p>
      {photos.map(photo => (
        <img
          key={photo.url}
          alt="bot profile"
          className="profilePic"
          src={photo.url}
        />
      ))}
    </div>
  );
};

export default Bot;
