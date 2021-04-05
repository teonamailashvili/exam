const Welcome = (props) => {
    const Styles = {
        color: "seagreen",
        textAlign: "center",
    };

    return (
        <div>
            <h1 style={Styles}>Hello {props.message}</h1>
        </div>
    );
};

export default Welcome;