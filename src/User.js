import { Card } from "react-bootstrap";

const User = ({ name, address, username, email, phone, company }) => {

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
      
      const d = randomDate(new Date(2012, 0, 1), new Date());
      const dateCal = d.toDateString().split(' ').slice(1).join(' ');
  return (
    <div>
      <Card style={{  }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {company.catchPhrase} and to {company.bs}
          </Card.Text>
          <div>
            <Card.Title>General Info</Card.Title>
            <p className="d-flex justify-content-between"><span>Date of Birth</span><span>{dateCal}</span></p>
            <p className="d-flex justify-content-between"><span>Address</span><span>{address.street}, {address.suite}</span></p>
            <p className="d-flex justify-content-between"><span>Email</span><span>{email}</span></p>
            <p className="d-flex justify-content-between"><span>Phone</span><span>{phone}</span></p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
