import React, { Fragment } from "react";
import moment from "moment";

const Match = match => {
  let { person, messages, harassmentScore, botTinderId, botName } = match;
  let name;
  let bio;
  let photos;
  if (person) {
    name = person.name;
    bio = person.bio;
    photos = person.photos;
  } else {
    name = "???";
    bio = "???";
    photos = [];
  }

  let timeSortedMessages = messages.sort(
    (a, b) => moment(a.sent_date) - moment(b.sent_date)
  );

  if (photos && photos.length && photos.length > 3) {
    photos = photos.slice(0, 3);
  }

  return (
    <div className="match">
      <p>Name: {name}</p>
      <p>bio: {bio}</p>
      <p>harassmentScore: {harassmentScore}</p>
      {photos.map(photo => (
        <img
          key={photo.url}
          alt="bot profile"
          className="profilePic"
          src={photo.url}
        />
      ))}
      <div className="messageBox">
        {timeSortedMessages.map((message, i) => (
          <p key={message.from + i}>{`${
            message.from === botTinderId ? botName : name
          }: ${message.message}`}</p>
        ))}
      </div>
    </div>
  );
};

const Activity = account =>
  account._matches.map(match => {
    match.botName = account.fullProfile.name;
    if (match.messages && match.messages.length) {
      return <Match key={`${match._id}_${+new Date()}`} {...match} />;
    } else {
      return <Fragment />;
    }
  });

export default Activity;
