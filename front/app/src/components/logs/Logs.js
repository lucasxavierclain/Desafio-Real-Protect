
const Logs = (props) => {
    return (
        <>
            <tr  >
                <td>{props.day}</td>
                <td>{props.month}</td>
                <td>{props.year}</td>
                <td>{props.hour}</td>
                <td>{props.msg}</td>

            </tr>
        </>
    )
}
export default Logs;