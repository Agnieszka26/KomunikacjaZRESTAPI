import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContextList } from "../Context";
import User from "../User/User";

import { useContext } from "react";
function UserList({users, isLoading}) {
  const context = useContext(ContextList);
  const {setSelectedUser} = context;
  const navigate = useNavigate();
  const iKnowThereWillBe10ElementsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const moveToDetails = (
    id,
    email,
    firstname,
    surname,
    profilePic,
    date,
    city,
    streetName,
    location
  ) => {
    setSelectedUser({
      email,
      firstname,
      surname,
      profilePic,
      date,
      city,
      streetName,
      location,
    });

    navigate(`/users/${id}`);
  };
  return (
    <Container fixed>
      <Typography variant="h3" align="center">
        User List
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        alignItems="center"
        justify="center"
        justifyContent="center"
      >
        {users === undefined
          ? iKnowThereWillBe10ElementsArray.map((i) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={i}>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    height={400}
                  />
                </Grid>
              );
            })
          : users?.map((user) => {
              const {
                email,
                name: {first: firstname, last: surname},
                picture: {large: profilePic},
                registered: {date},
                location: {
                  city,
                  street: {name: streetName},
                },
                location,
              } = user;

              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={user.cell}
                  onClick={() =>
                    moveToDetails(
                      user.cell,
                      email,
                      firstname,
                      surname,
                      profilePic,
                      date,
                      city,
                      streetName,
                      location
                    )
                  }
                >
                  <User
                    email={email}
                    firstname={firstname}
                    surname={surname}
                    profilePic={profilePic}
                    date={date}
                    city={city}
                    streetName={streetName}
                  />
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
}

export default UserList;
