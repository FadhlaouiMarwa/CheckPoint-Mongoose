import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deletecontact } from '../redux/actions/contact'
function ContactCard({liste}) {
    const dispatch=useDispatch()
  return (
    <div>
        <Card style={{ width: '18rem', height:'17rem' }}>
  <Card.Body>
  <Card.Text>
     {liste.name}
    </Card.Text>
        <Card.Text>
     Adresse Email: {liste.email}
    </Card.Text>
    <Card.Text>
     Numéro du téléphone: {liste.phone}
    </Card.Text>
    <Button variant="primary" onClick={()=>dispatch(deletecontact(liste._id))}>Supprimer</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default ContactCard