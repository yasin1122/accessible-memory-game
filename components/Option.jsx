export default function Option({ valueArray }) {
    const optionEl = valueArray.map(({ name, value }) => (
        <option key={value} value={value}>
            {name ? name : value}
        </option>
    ))
    
    return <>{optionEl}</>
}