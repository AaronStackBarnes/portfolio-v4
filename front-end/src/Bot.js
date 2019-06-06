import React from "react";

const Bot = bot => {
  return (
    <div>
      <div className="profileHeader">
        <img
          alt="bot profile picture"
          src={`http://167.99.235.109${bot.profilePicturePath.replace(
            "/downloads",
            ""
          )}`}
        />
        <div>
          <p>Name: {`${bot.firstName} ${bot.lastName}`}</p>
          <p>Handle: {bot.handle}</p>
          <p>Last Post: {bot.lastPost}</p>
          <p>Last Login: {bot.lastLogin}</p>
        </div>
      </div>
      <p>{`${
        bot.firstName
      } sounds like the twitter user (or combination of users) ${
        bot.voice
      }`}</p>
      <p>{`His interests include: ${bot.interests.join(" ")}`}</p>
    </div>
  );
};

export default Bot;
