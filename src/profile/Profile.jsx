import React from 'react'
import PropTypes from "prop-types";
import {Card,Button} from 'react-bootstrap'


function Profile(profile) {
    console.log(`profile:`,profile)
    Profile.defaultprofile={
        fullname:"fullname",
        bio:'bio',
        proffesion:'proffesion'
    };
    Profile.propTypes={
        fullname:PropTypes.string,
        bio:PropTypes.string,

        proffesion:PropTypes.string,



    }
  return (
    <div>
         
         <h1>Profile</h1>

        <Card style={{width: '30rem' , margin:'0 auto'}}>
  <Card.Img variant="top" src={'https://img.freepik.com/vecteurs-libre/astronaute-mignon-lecture-livre-cartoon-vector-icon-illustration-concept-icone-enseignement-sciences-isole-vecteur-premium-style-dessin-anime-plat_138676-3347.jpg?w=2000'}/>
  <Card.Body>
    <Card.Title>   <h1 style={{color: "red"}}> welcome {profile.fullname}</h1>
</Card.Title>
    <Card.Text>
    <h1 style={{backgroundColor: "lightblue"}}> You are {profile.bio}</h1>
        <h1 style={{backgroundColor: "blue"}}> And you are the best  {profile.proffesion}</h1>
    </Card.Text>
    <Button onClick={() => profile.handleName(`My name is ${profile.fullname} `)}>Who are you ?</Button>
  </Card.Body>
</Card>

        </div>
  )
}

export default Profile