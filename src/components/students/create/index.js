import React from "react";

import BasicForm from "../basic";
import { FormProvider, useForm } from "react-hook-form";
import SkillsForm from "../skills";
import ExperienceForm from "../experience";
import toast from "react-hot-toast";
import axios from "axios";
import EducationForm from "../education";

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
    <div className="col-lg-12 pt-30 pb-30">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          id="faq-form"
          className="faq-form wow fadeInLeft delay-0-2s"
          name="faq-form"
        >
          <div>
            <section>
              <BasicForm />
            </section>
            <section className="pb-50">
              <SkillsForm />
            </section>
            <section className="pb-50">
              <ExperienceForm />
            </section>
            <section className="pb-50">
              <EducationForm />
            </section>

            <div className="d-flex justify-content-center">
              <button type="submit" className="theme-btn">
                Crear perfil <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateStudent;
