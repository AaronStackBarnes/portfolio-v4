import React from "react";
import moment from "moment";

const Match = match => {
  console.log(match);
  let {
    botTinderId,
    name,
    bio,
    messages,
    _account,
    lastMessageDate,
    fetchedPhotos,
    harassmentScore,
    endChat
  } = match;

  let timeSortedMessages = messages.sort(
    (a, b) => moment(a.sent_date) - moment(b.sent_date)
  );

  let photos;
  if (!fetchedPhotos || !fetchedPhotos.length) {
    photos = [];
  } else if (fetchedPhotos.length > 3) {
    photos = fetchedPhotos.slice(0, 3);
  } else {
    photos = fetchedPhotos;
  }

  return (
    <div className="match">
      <p>Name: {name || "???"}</p>
      <p>bio: {bio || "???"}</p>
      <p>harassmentScore: {harassmentScore}</p>
      <p>lastMessageDate: {lastMessageDate}</p>
      <p>endChat: {endChat}</p>

      {photos.map(photo => (
        <img key={photo} alt="profile" className="profilePic" src={photo} />
      ))}
      <div className="messageBox">
        {timeSortedMessages.map((message, i) => (
          <p key={message.from + i}>{`${
            message.from === botTinderId ? _account.name : name
          }: ${message.message}`}</p>
        ))}
      </div>
    </div>
  );
};

export default Match;
