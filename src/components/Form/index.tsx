import { Controller, useForm } from "react-hook-form";
import { formSlice } from "../../store/reducers/FormSlice";
import RadioInput from "../RadioInput";
import TextInput from "../TextInput";
import Button from "../Button";
import { useAppDispatch } from "../../hooks/store";

interface IFormValues {
  option: string;
  text: string;
  notes: string;
  generatedCode: string;
}

const initialFormData: IFormValues = {
  option: "",
  text: "",
  notes: "",
  generatedCode: "",
};

export default function Form() {
  const {
    control,
    watch,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: initialFormData,
  });

  const currentValues = getValues();

  // update the currentValues object when the form values change
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const watchValues = watch();

  const generateDiscountCode = () => {
    setValue("generatedCode", `NEWCODE${Math.floor(Math.random() * 1000)}`);
  };

  const onSubmit = async (data: IFormValues) => {
    alert(JSON.stringify(data));
  };
  // const formData = useAppSelector((state) => state.formData);
  const dispatch = useAppDispatch();
  const { dataUpdate } = formSlice.actions;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="col-span-2">
        <span>Choose some option</span>
        <div className="radio-container">
          {["Option A", "Option B", "Option C"].map((item) => (
            <Controller
              key={item}
              name="option"
              control={control}
              render={({ field: { onChange } }) => (
                <RadioInput
                  isInvalid={!!errors.option}
                  name="option"
                  onChange={(e) => {
                    onChange(e.target.value);
                    dispatch(
                      dataUpdate({
                        option: e.target.value,
                        note: currentValues.notes || "",
                      })
                    );
                  }}
                  value={item}
                  label={item}
                  isChecked={watch("option") === item}
                />
              )}
            />
          ))}
        </div>
      </label>

      <label>
        <Controller
          name="text"
          control={control}
          rules={{
            required: "This field is required",
            validate: (e) => {
              // Include basic validation to check if the entered text follows a simple pattern (e.g., "DISCOUNT2024").
              const text = e as string;
              if (text && !/^DISCOUNT[0-9]{4}$/i.test(text)) {
                return "Text must match the pattern DISCOUNT####";
              }
            },
          }}
          render={({ field: { onChange } }) => (
            <TextInput
              isInvalid={!!errors.text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              placeholder="Enter a discount code"
            />
          )}
        />
        {errors.text && <span>{errors.text.message}</span>}
      </label>

      <Controller
        name="notes"
        control={control}
        render={({ field: { onChange } }) => (
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              onChange(e);
              dispatch(
                dataUpdate({
                  option: currentValues.option || "",
                  note: e.target.value,
                })
              );
            }}
            placeholder="Enter some notes"
          />
        )}
      />
      <Button type="button" onClick={generateDiscountCode}>
        Generate Discount Code
      </Button>

      {currentValues.generatedCode && (
        <h4>Generated Code: {currentValues.generatedCode}</h4>
      )}

      <Button type="submit">Submit</Button>
    </form>
  );
}
