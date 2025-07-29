import { useForm, Controller } from "react-hook-form";

export default function ExampleForm({text}: {text: string}) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      termsAccepted: false,
    },
  });

  return (
      <Controller
        name="termsAccepted"
        control={control}
        render={({ field: { onChange, onBlur, name, ref, value } }) => (
          <label className="flex items-center gap-4">
            <input
              type="checkbox"
              name={name}
              ref={ref}
              checked={value}
              onBlur={onBlur}
              onChange={(e) => onChange(e.target.checked)}
              className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
            <span>{text}</span>
          </label>
        )}
      />
  );
}

