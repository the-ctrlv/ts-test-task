import { Controller, useForm } from "react-hook-form";

import RadioInput from "../RadioInput";
import TextInput from "../TextInput";
import Button from "../Button";

import { formSlice } from "../../store/reducers/FormSlice";

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
    clearErrors,
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 my-10"
    >
      <h1 className="font-bold text-5xl text-center">Test Form</h1>
      <label className="col-span-2">
        <span className="font-semibold text-lg block mb-2">
          Choose some option
        </span>
        <div className="radio-container relative">
          {["Option A", "Option B", "Option C"].map((item) => (
            <Controller
              key={item}
              name="option"
              control={control}
              rules={{ required: "This field is required" }}
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
          {errors.option && (
            <span className="error-msg">{errors.option.message}</span>
          )}
        </div>
      </label>

      <label>
        <Controller
          name="text"
          control={control}
          rules={{
            validate: (e) => {
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
        {errors.text && (
          <span className="error-msg">{errors.text.message}</span>
        )}
      </label>
      <div className="flex-col flex md:flex-row gap-5 items-start md:items-center mb-4 md:mb-0 relative">
        <Button
          type="button"
          onClick={() => {
            generateDiscountCode();
            clearErrors("text");
            setValue("text", "");
          }}
        >
          Generate Discount Code
        </Button>

        {currentValues.generatedCode && (
          <h4 className="absolute md:relative -bottom-7 md:bottom-auto">
            New Generated Code:
            <span className="text-green font-bold inline-block ms-3">
              {currentValues.generatedCode}
            </span>
          </h4>
        )}
      </div>

      <Controller
        name="notes"
        control={control}
        render={({ field: { onChange } }) => (
          <textarea
            className="hover:ring-dark-gray py-3 placeholder:text-md
            md:max-w-xs bg-white block h-[150px] w-full
             appearance-none text-lg
              md:placeholder:text-base rounded-lg px-5 font-semibold leading-6
              text-black outline-0 ring-2 focus:outline-none
               focus:ring-2 focus:ring-green ring-borderGray resize-none"
            rows={5}
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

      <Button type="submit">SUBMIT</Button>
    </form>
  );
}
