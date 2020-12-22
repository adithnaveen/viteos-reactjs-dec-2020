const ContactCardJson = ({ contact }) => (
    <div className="card" 
    style={{width:"700px", height:"200px", padding:"10px", margin:"10px"}}>

        <div className="row">
            <div className="col-md-4">
                <img src={contact.picture}
                    className="card-img" alt={contact.name}
                    style={{ width: 150, height: 150}} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{contact.gender} | {contact.name}</h4>
                    <h4 className="card-text">{contact.email}</h4>
                    <h4 className="card-text">{contact.phone}</h4>
                </div>
            </div>
        </div>
    </div>
)
export default ContactCardJson; 
