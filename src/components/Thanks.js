import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";

const Thanks = () => {

    const history = useHistory();
    const { name } = useParams();

    console.log(history);


    return(
        <React.Fragment>
           <div className="thanks">
             <p>Thanks <strong>{name}!!</strong></p>
             <p>You joined <strong>{history.location.state}</strong></p>
           
            <hr/>
            <p><strong>Disclaimer : </strong>Duis ullamcorper erat nisl, vel blandit sem mollis eu. Sed ac fringilla mi. Maecenas a mi nibh. Vestibulum ut sapien magna. Vivamus vitae nunc eu odio suscipit pulvinar. Duis tortor quam, lacinia eget justo in, vulputate vulputate mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
           
           </div>
        </React.Fragment>
    )

}


export default Thanks;