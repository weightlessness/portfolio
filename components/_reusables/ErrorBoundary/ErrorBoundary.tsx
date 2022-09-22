import React from "react";


class ErrorBoundary extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error){

        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {

        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return (
                null
            )
        }else {
            return this.props.children
        }
    }

}

export default ErrorBoundary