import { Container, Typography } from "@mui/material";
import { ContextList } from "../Context";
import User from "../User/User";

import { useContext } from "react";
function UserDetails() {
  const context = useContext(ContextList);
  const {selectedUser} = context;

  const {email, firstname, surname, profilePic, date, city, streetName, location} =
    selectedUser;

  return (
    <Container fixed>
      <Typography variant="h3" align="center">
        User's Details
      </Typography>
      <div style={{width: "50%", margin: "auto"}}>
        <User
          maxWidth={300}
          user={selectedUser}
          email={email}
          firstname={firstname}
          surname={surname}
          profilePic={profilePic}
          date={date}
          city={city}
          streetName={streetName}
          location={location}
        />
      </div>
    </Container>
  );
}

export default UserDetails;
