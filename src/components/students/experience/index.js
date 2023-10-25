import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

const ExperienceForm = () => {
  const methods = useFormContext();
  const { register, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  return (
    <>
      {fields.map((item, index) => (
        <Form.Row key={item.id}>
          <Form.Group as={InputGroup} className="col-md-6">
            <FormControl
              {...register(`experiences.${index}.position`)}
              placeholder="Cargo"
            />
          </Form.Group>
          <Form.Group as={InputGroup} className="col-md-6">
            <FormControl
              {...register(`experiences.${index}.company`)}
              placeholder="Nombre de la empresa"
            />
          </Form.Group>
          <Form.Group as={InputGroup} className="col-md-6">
            <FormControl
              {...register(`experiences.${index}.location`)}
              placeholder="Ubicación"
            />
          </Form.Group>

          <div className="form-group col-md-6">
            <select
              name="subject"
              {...register(`experiences.${index}.typeEmployment`)}
              className="form-control"
              style={{ fontFamily: "unset" }}
            >
              <option value="Subject">Subject</option>
              <option value="Instructors">Instructors</option>
              <option value="Pricing">Pricing</option>
              <option value="Setting">Setting</option>
            </select>
          </div>

          <Form.Group as={InputGroup} className="col-md-12">
            <FormControl
              {...register(`experiences.${index}.description`)}
              placeholder="Descripción"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button
            type="button"
            onClick={() => remove(index)}
            className="col-md-2"
            variant="danger"
          >
            <i className="fas fa-trash" />
          </Button>
        </Form.Row>
      ))}

      <section className="mt-10">
        <button
          className="theme-btn style-two small"
          type="button"
          onClick={() => {
            append({});
          }}
        >
          Añadir experiencia
        </button>
      </section>
    </>
  );
};

export default ExperienceForm;
