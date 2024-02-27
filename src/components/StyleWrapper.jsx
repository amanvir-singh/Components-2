export default function StyleWrapper({children}){

    return (<div
        style={
            {backgroundColor: "#f8f9fa", /* Light gray background */
            padding: "20px", /* Padding around the content */
            textAlign: "center", /* Center-align the text */
            borderTop: "1px solid #dee2e6", /* Optional border at the top */
            boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)" /* Subtle box shadow */
        }
        }>
        {children}
        
    </div>)
}