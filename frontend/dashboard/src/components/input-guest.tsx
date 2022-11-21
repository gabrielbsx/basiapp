type InputGuestProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
}

export default function InputGuest({
  name,
  label,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  touched,
}: InputGuestProps) {
  return (
    <>
      <div className="flex flex-col my-5">
        <label
          className="flex font-medium sm:text-sm text-gray-100"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="flex w-full px-3 py-2 mt-1 bg-slate-200 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
          type={type}
          name={name}
          id={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
      {error && touched && (
        <span className="flex text-sm text-red-400 justify-end">
          {error}
        </span>
      )}
    </>
  )
}
