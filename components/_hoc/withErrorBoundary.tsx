import React from "react"

const withErrorBoundary = <P extends object = any>(
  Component: React.ComponentType<P>
) => {
  return class ErrorBoundary extends React.PureComponent<P, any> {
    constructor(props: any) {
      super(props)
      this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      try {
        const errorString = error.toString()
        Component.toString()
        console.log({ string: errorString })
      } catch (e) {
        console.log(e)
      }

      this.setState({ hasError: true })
    }

    render() {
      if (this.state.hasError) {
        return null
      } else {
        return <Component {...(this.props as P)} />
      }
    }
  }
}

export default withErrorBoundary
