import {
  Card, CardActionArea, CardContent, CardMedia, Typography
} from "@mui/material";
import * as React from "react";
import LocationMap from "./LocationMap";

export default function User({
  email,
  firstname,
  surname,
  profilePic,
  date,
  city,
  streetName,
  location,
}) {
  const registrationDate = new Date(date).toDateString();
  console.log(location);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={profilePic}
          alt="profilePic"
        />
        <CardContent>
          {firstname ? (
            <div>
              <Typography variant="overline" component="span">
                Name:{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {firstname}
              </Typography>
            </div>
          ) : (
            <Typography variant="overline" component="div">
              Name was not given
            </Typography>
          )}
          {surname ? (
            <div>
              <Typography variant="overline" component="span">
                Surame:{"  "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {surname}
              </Typography>
            </div>
          ) : (
            <Typography variant="overline" component="div">
              Surame was not given
            </Typography>
          )}
          {email ? (
            <div>
              <Typography variant="overline" component="span">
                Email:{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {email}
              </Typography>
            </div>
          ) : (
            <Typography variant="overline" component="div">
              No email address
            </Typography>
          )}
          {city ? (
            <div>
              <Typography variant="overline" component="span">
                Address:{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {city}
                {", "}
                {streetName}
              </Typography>
            </div>
          ) : (
            <Typography variant="overline" component="span">
              No address
            </Typography>
          )}

          {date ? (
            <div>
              <Typography variant="overline" component="span">
                Registration Date:{" "}
              </Typography>
              <Typography variant="subtitle1" component="span">
                {registrationDate}
              </Typography>
            </div>
          ) : (
            <Typography variant="overline" component="div">
              No proper date was given
            </Typography>
          )}

          {location && <LocationMap location={location} />}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
