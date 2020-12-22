const ProductCardJson = ({ product }) => (
    <div className="card" 
    style={{width:"500", height:"100", padding:"10px", margin:"10px"}}>

        <div className="row">
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{product.pname}</h4>
                    <h4 className="card-text">{product.price}</h4>
                </div>
            </div>
        </div>
    </div>
)
export default ProductCardJson; 
