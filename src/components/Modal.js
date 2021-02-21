export const Modal = (prop) =>(
    <div className="modal fade" id={`popup${prop.info.flight_number}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">About</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="col-sm-4">
                        <h5>Rocket Name</h5>
                        <p> {prop.info.rocket.rocket_name} </p>
                    </div>
                    <a href={prop.info.links.wikipedia} className="btn btn-primary btn-block more-info" target="_blank"> Learn More on wikipedia </a>
                </div>
            </div>
        </div>
    </div>
);