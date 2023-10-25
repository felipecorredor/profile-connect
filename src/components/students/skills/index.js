import React from "react";
import { Button, Form } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";

const SkillsForm = () => {
  const methods = useFormContext();
  const { register, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <>
      <div>
        {fields.map((item, index) => {
          return (
            <div className="row">
              <div className="col-md-7">
                <Form.Group key={item.id}>
                  <label htmlFor="full-name">
                    <i className="fas fa-user" />
                  </label>
                  <Form.Control
                    type="text"
                    {...register(`skills.${index}.name`)}
                    placeholder="Nombre"
                    className="form-control"
                  />
                </Form.Group>
              </div>

              <div className="col-md-2">
                <Button
                  type="button"
                  className="w-100"
                  onClick={() => remove(index)}
                  variant="danger"
                >
                  <i className="fas fa-trash" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-10">
        <button
          className="theme-btn style-two small"
          type="button"
          onClick={() => {
            append({ name: "" });
          }}
        >
          Añadir skill
        </button>
      </section>
    </>
  );
};

export default SkillsForm;
