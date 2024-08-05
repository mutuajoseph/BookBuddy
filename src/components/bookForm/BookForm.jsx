import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  title: "",
  author: "",
  description: "",
  assignedHistory: [],
};

const bookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  description: Yup.string().required("Description is required"),
});

export const BookForm = () => {
  const handleSubmit = (data) => {
    console.log("my form fields", data);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={bookSchema}
    >
      <Form>
        <Field name="title">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.title && form.touched.title}>
              <FormLabel fontWeight={"light"}>Title</FormLabel>
              <Input {...field} type="text" id="title" />
              <FormErrorMessage>
                {form.errors.title && form.touched.title && form.errors.title}
              </FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="description">
          {({ field, form }) => (
            <FormControl
              isInvalid={form.errors.description && form.touched.description}
            >
              <FormLabel fontWeight={"light"}>Description</FormLabel>
              <Input {...field} type="text" id="description" />
              <FormErrorMessage>
                {form.errors.description &&
                  form.touched.description &&
                  form.errors.description}
              </FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="author">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.author && form.touched.author}>
              <FormLabel fontWeight={"light"}>Author</FormLabel>
              <Input {...field} type="text" id="author" />
              <FormErrorMessage>
                {form.errors.author &&
                  form.touched.author &&
                  form.errors.author}
              </FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Button type="submit" colorScheme={"green"} w={'100%'} my={'0.5rem'}>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
