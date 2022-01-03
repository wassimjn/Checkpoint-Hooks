import { Card , ListGroup  } from "react-bootstrap";
import Edit from "./Edit";
import ReactStars from 'react-stars'


function SerieCard({el:{title,posterUrl,description,trailer,rate,id} ,setSeriedata , seriedata}) {
    return(
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterUrl} />
      <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ReactStars
          count={5}
          value={rate}
          size={24}
          activeColor="#ffd700"
          edit={false}        
        />
      </ListGroup>
      <Card.Body>
      <Card.Link href={trailer}>Trailer Link</Card.Link>
      <Edit tite={title} descrip={description} url={posterUrl} rate={rate}  id={id}   seriedata={seriedata} setSeriedata={setSeriedata} ></Edit>
      </Card.Body>
      </Card>
    </div>
    )
}
export default SerieCard ;