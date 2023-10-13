import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  styled,
  FormHelperText,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation/validationSchema";
import { Output } from "./Output";

const StyledForm = styled("form")({
  display: "flex",
  width: "40em",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  marginTop: "16px",
});

const StyledTextField = styled(TextField)({
  width: "100%",
});

const StyledButton = styled(Button)({});

const StyledSelect = styled(Select)({
  textAlign: "left",
});

const StyledFormControl = styled(FormControl)({});

const ButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

const StyledFormHelperText = styled(FormHelperText)({
  width: "300px",
  marginLeft: "14px",
  marginRight: "14px",
});

const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "#fff4f4",
  },
  "&:active": {
    backgroundColor: "#fff4f4",
  },
  "&:focus": {
    backgroundColor: "#fff4f4",
  },
});

const FormWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});

export interface IFormInput {
  name: string;
  phoneNumber: string;
  email: string;
  language: string;
}

const MyForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [submittedData, setSubmittedData] = useState<IFormInput | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setSubmittedData(data);
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Jméno"
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Telefoní Číslo"
              error={!!errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <StyledTextField
              {...field}
              label="Email"
              error={!!errors.email}
              helperText={errors?.email?.message}
            />
          )}
        />
        <StyledFormControl error={!!errors.language} fullWidth>
          <InputLabel id="language-label">Hlavní Jazyk *</InputLabel>
          <Controller
            name="language"
            control={control}
            render={({ field }) => (
              <StyledSelect
                {...field}
                labelId="language-label"
                variant="outlined"
                label="Hlavní Jazyk *"
              >
                <StyledMenuItem value="en">Angličtina</StyledMenuItem>
                <StyledMenuItem value="sk">Slovenština</StyledMenuItem>
                <StyledMenuItem value="cs">Čeština</StyledMenuItem>
              </StyledSelect>
            )}
          />
          <StyledFormHelperText>
            {errors.language?.message}
          </StyledFormHelperText>
        </StyledFormControl>
        <ButtonWrapper>
          <StyledButton
            type="submit"
            variant="contained"
            color="error"
            disabled={!isValid}
          >
            Odeslat
          </StyledButton>
        </ButtonWrapper>
      </StyledForm>

      {submittedData && <Output submittedData={submittedData} />}
    </FormWrapper>
  );
};

export default MyForm;
