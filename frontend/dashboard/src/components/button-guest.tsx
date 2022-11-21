type ButtonGuestProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting: boolean;
  text: string;
}

export default function ButtonGuest({
  type,
  isSubmitting,
  text,
}: ButtonGuestProps) {
  return (
    <div className="flex justify-center">
      <button
        className={
          `bg-slate-700 text-white rounded-md font-bold px-4 py-2 shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50 ${isSubmitting ? 'cursor-not-allowed' : ''}`
        }
        type={type}
        disabled={isSubmitting}
      >
        {text}
      </button>
    </div>
  )
}
