import React from "react";

const Activity = activity => {
  if (activity.type === "like") {
    return (
      <div>
        <p>{`A bot liked a post on ${activity.platform} by the user ${
          activity.postedBy
        }`}</p>
      </div>
    );
  } else if (activity.type === "post") {
    return (
      <div>
        <p>{`${activity.postedBy} posted to ${activity.instagram}`}:</p>

        <img
          alt="bot posted"
          src={`http://167.99.235.109${activity.image.replace(
            "downloads",
            ""
          )}`}
        />

        <p>{activity.text}</p>
      </div>
    );
  }
};

export default Activity;
