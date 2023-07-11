import React from "react";

function Product({id, productName, category, price, onAddClick}) {
    const handleAddBtnClicked = e => {
        onAddClick(id);
    };

    return (
        <>
            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/HKOFQYa.jpeg" alt=""/></div>
            <div className="col">
                <div className="row text-muted">{productName}</div>
                <div className="row">{category}</div>
            </div>
            <div className="col text-center price">{price}원</div>
            <div className="col text-end action">
                <button className="btn btn-small btn-outline-dark" onClick={handleAddBtnClicked}>추가</button>
            </div>
        </>
    )
}

export default Product;