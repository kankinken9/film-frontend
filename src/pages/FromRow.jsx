export default function FromRow({
  name,
  label,
  type,
  placeholder,
  defaultValue,
  required,
}) {
  return (
    <div className="mb-3 row">
      <label htmlFor={name} className="col-sm-3 col-form-label">
        {label} <span style={{ color: "red" }}> * </span> :
      </label>
      <div className="col-sm-9">
        <input
          name={name}
          type={type}
          className="form-control"
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
        />
      </div>
    </div>
  );
}
