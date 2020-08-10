import { func } from "prop-types";

export default function Text({ children, type }) {
    if (type==='header1') {
        return (
            <h1 className="header1">
                {children}
            </h1>
        )
    } else if (type==='header2') {
        return (
            <h2 className="header2">
                {children}
            </h2>
        )
    } else if (type==='body1') {
        return (
            <p className="body1">
                {children}
            </p>
        )
    }
}