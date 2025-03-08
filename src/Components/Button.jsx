function ButtonC ({ label = "", onClick = () => {} }) {
    return <button onClick={onClick}>{label}</button>
}

export default ButtonC;