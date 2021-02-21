 export const Card = (prop) =>(
    <div className="card container col-sm-6"  key={prop.info.flight_number}>
               
    <div className="mission-img">
      <img src={prop.info.links.mission_patch_small} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prop.info.mission_name}</h5>
            <p>{prop.info.launch_year}</p>
            <p className="card-text">{prop.info.details}</p>
          </div>
    </div>
    <div className="card-body">
      
      <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#popup${prop.info.flight_number}`}>  View More</a>
    </div>
</div>
);