
export default function InfoItem({ title, value }) {
    // if (!!value) {
    //     return (
    //         <div>
    //             <p className="text-gray-400">{title}</p>
    //             <h4 className="text-lg font-medium">{value}</h4>
    //         </div>
    //     )
    // }
    // else {
    //     return null;
    // }
    return (
        <div>
            <p className="text-gray-400">{title}</p>
            <h4 className="text-lg font-medium">{!!value ? value : "No data available"}</h4>
        </div>
    )
}
