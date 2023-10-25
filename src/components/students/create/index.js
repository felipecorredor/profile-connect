import React from "react";

import BasicForm from "../basic";
import { FormProvider, useForm } from "react-hook-form";
import SkillsForm from "../skills";
import ExperienceForm from "../experience";
import toast from "react-hot-toast";
import axios from "axios";

const DEFAULT_VALUES = {
  skills: [
    {
      name: "",
    },
  ],
};

const CreateStudent = () => {
  const methods = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data) => {
    axios
      .post("/api/students/create", data)
      .then(async () => {
        toast.success("Perfil creado exitosamente");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="col-lg-12 pt-30">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          id="faq-form"
          className="faq-form wow fadeInLeft delay-0-2s"
          name="faq-form"
        >
          <div>
            <section className="pb-50">
              <BasicForm />
            </section>
            <section className="pb-50">
              <h3>Skills</h3>
              <SkillsForm />
            </section>
            <section className="pb-50">
              <h3>Experiencia</h3>
              <ExperienceForm />
            </section>

            <div className="col-sm-12">
              <div className="form-group mb-0 form-btn-label">
                <button type="submit" className="theme-btn">
                  Crear perfil <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateStudent;
