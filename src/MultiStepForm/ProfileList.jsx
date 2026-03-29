import React, { useState } from "react";
import { Card, Button } from "antd";

const ProfileList = () => {
  const [profiles, setProfiles] = useState(() => {
    return JSON.parse(localStorage.getItem("datingProfiles")) || [];
  });

  const handleDelete = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
    localStorage.setItem("datingProfiles", JSON.stringify(updatedProfiles));
  };

  const handleClearAll = () => {
    setProfiles([]);
    localStorage.removeItem("datingProfiles");
  };

  if (profiles.length === 0) {
    return <p>No profiles saved :(</p>;
  }

  // paletă de culori pentru header
  const colors = ["#1890ff", "#13c2c2", "#eb2f96", "#fa8c16", "#52c41a"];

  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <h2>Saved Profiles</h2>
      <Button danger onClick={handleClearAll} style={{ marginBottom: 20 }}>
        Clear All
      </Button>
      {profiles.map((profile, index) => (
        <Card
          key={index}
          title={
            <div
              style={{
                background: colors[index % colors.length],
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "6px"
              }}
            >
              {`Profile ${index + 1}`}
            </div>
          }
          style={{ marginBottom: 20, borderRadius: 10 }}
          extra={
            <Button danger onClick={() => handleDelete(index)}>
              Delete
            </Button>
          }
        >
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Profession:</strong> {profile.profession}</p>
          <p><strong>City:</strong> {profile.city}</p>
          <p><strong>Hobbies:</strong> {profile.hobbies.join(", ")}</p>
          <p><strong>Preferences:</strong> {profile.preferences}</p>
        </Card>
      ))}
    </div>
  );
};

export default ProfileList;