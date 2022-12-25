
function Lacivert({temaRengi}) {
 let buttonClass = temaRengi === "acik" ? "btn btn-light" :"btn btn-dark"

    return (
        <div>
            <h4>Lacivert component</h4>
            <button className={buttonClass}>Action</button>
        </div>
    )
}

export default Lacivert