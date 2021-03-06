const ContactCard = ({ contact }) => (
    <div className="card">
        <div className="row">
            <div className="col-md-4">
                <img src={contact.picture}
                    className="card-img" alt={contact.name}
                    style={{ width: 100, height: 100 }} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{contact.name}</h4>
                    <h4 className="card-text">{contact.email}</h4>
                    <h4 className="card-text">{contact.phone}</h4>
                </div>
            </div>
        </div>
    </div>
)
export default ContactCard; 