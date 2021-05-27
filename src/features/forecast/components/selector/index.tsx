
const Selector = ({ options, label, name, onChange }: any) => (
    <div className="form-group">
        <label>{label}</label>
        <select className="form-control" onChange={e => {
            onChange({ [name]: e.target.value })
        }}>
            {options.map((option: any, key: any) =>
                <option key={key} value={option.value}>{option.text}</option>
            )}
        </select>
    </div>
)



export default Selector;
