export const Modal = (prop) =>(
    <div className="modal fade" id={`popup${prop.info.flight_number}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
            <div className="modal-content">
            <img src={prop.info.links.mission_patch_small} className="card-img-top" alt="..."/>
                <div className="modal-header">
                    {/* <h5 className="modal-title" id="mission-name" >{prop.info.mission_name}</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{color:"white",top:"3%",right:"5%",position:"absolute"}}>X</button>
                </div>
                <div className="row modal-body">
                    <div className="col-sm-4">
                        <h5>Rocket Name</h5>
                        <p> {prop.info.rocket.rocket_name} </p>
                    </div>
                    <div className="col-sm-4">
                        <h5>Rocket Type</h5>
                        <p> {prop.info.rocket.rocket_type} </p>
                    </div>
                    <div className="col-sm-4">
                        <h5>Launch Site</h5>
                        <p> {prop.info.launch_site.site_name} </p>
                    </div>
                    <div className="col-sm-6">
                        <h5>Launch Success</h5>
                        <p> {prop.info.launch_success ? "Yes": "No"} </p>
                    </div>
                   
                    <div className="col-sm-6">
                        <h5>Flight Number</h5>
                        <p> {prop.info.flight_number} </p>
                    </div>
                    <a href={prop.info.links.wikipedia} className="btn btn-primary btn-block more-info" target="_blank"> Learn More on wikipedia </a>
                </div>
            </div>
        </div>
    </div>
);