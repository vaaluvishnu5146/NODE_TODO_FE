function ButtonC ({ label = "", onClick = () => {} }) {
    return <button className="btn btn-primary" onClick={onClick}>{label}</button>
}

export default ButtonC;